import React, { useEffect } from "react"

const displayXY = (x,y) => {
    return <div className="flex flex-col"><span>{x}</span><span>{y}</span></div>
}

export const Boundary = ({boundaryXY, updateBoundaryXY}) => {
    console.log(boundaryXY)
    useEffect(() => {
        const resizeHandler = (e) => {
            updateBoundaryXY([e.target.offsetWidth, e.target.offsetHeight])
        }
        document.getElementById("boundary").addEventListener('mouseup', resizeHandler)

        return () => {
            document.getElementById("boundary").removeEventListener('mouseup', resizeHandler)
        }
    }, [updateBoundaryXY])

    return (
        <div id="boundary" className="resize overflow-auto w-32 h-32 bg-white shadow-inner flex flex-col justify-center items-center">
            <span className="my-4">{displayXY(...boundaryXY)}</span>
        </div>
    )
}

export default Boundary