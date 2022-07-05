import React from "react";
import { useState } from "react";

function MyComponent() {
    const [number, setNumber] = useState({
        number: 0,
        isOdd: false
    })

    const changeNum = () => {
        setNumber(update => {
            return {...update, isOdd:true}
        })
    }

    

    return(
        <div>
            <h1>O número atual é {number}</h1>
            <button onClick={changeNum}>click on me</button>
        </div>
    )
}


function Treino() {
    return <MyComponent/>
}

export default Treino;