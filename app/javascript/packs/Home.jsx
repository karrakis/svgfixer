import React, { useEffect, useState } from "react"

export const Home = ({data}) => {
    const [boundaryXY, updateBoundaryXY] = useState()
    useEffect(() => {
        const el = document.getElementById("boundary")
        updateBoundaryXY(<div className="flex flex-col"><span>{el.offsetWidth}</span><span>{el.offsetHeight}</span></div>)
    })
    return (<div className="w-screen h-screen flex items-center justify-center bg-gray-800 opacity-50">
        <div id="boundary" className="resize overflow-auto w-32 h-32 bg-white shadow-inner flex flex-col justify-center items-center">
            <span className="my-4">{boundaryXY}</span>
        </div>
    </div>)
}

export default Home