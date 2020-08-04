import React, { useState } from "react"
import Boundary from "./Boundary"
import Uploader from "./Uploader"

export const Home = ({data}) => {
    const [boundaryXY, updateBoundaryXY] = useState([])
    
    return (<div className="w-screen h-screen flex items-center justify-center bg-gray-800 opacity-50">
        <Boundary boundaryXY={boundaryXY} updateBoundaryXY={updateBoundaryXY}/>
        <Uploader/>
    </div>)
}

export default Home