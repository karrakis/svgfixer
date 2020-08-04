import React from "react"

const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
        reader.readAsDataURL(file);
    })
}

const imageUpload = (e) => {
    const file = e.target.files[0];
    getBase64(file).then(base64 => {
        localStorage["fileBase64"] = base64;
        console.debug("file stored", base64);
    })
}

export const Uploader = () => {
    return <input
        type="file"
        id="svgFile"
        name="svgFile"
        onChange={imageUpload}
        />
}

export default Uploader