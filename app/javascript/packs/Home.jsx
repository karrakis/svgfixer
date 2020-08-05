import React, { useState } from "react"
import Boundary from "./Boundary"
import Uploader from "./Uploader"

export const Home = ({data}) => {
    const [boundaryXY, updateBoundaryXY] = useState({x: 128, y: 128})
    
    return (<div className="w-screen h-screen flex items-center justify-center bg-gray-800 bg-opacity-50">
        <Boundary boundaryXY={boundaryXY} updateBoundaryXY={updateBoundaryXY} svg={localStorage["svg"]}/>
        <Uploader/>
    </div>)
}

export default Home