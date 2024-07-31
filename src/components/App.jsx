import React, { useState } from "react";

function App() {
    const [count, setcount] = useState(0)
    function oshirish(){
        setcount(count + 1)
    }
    function kamaytirish (){
        setcount(count - 1)
    }
    return (
    <div>
        <h1>{count}</h1>
        <button onClick={kamaytirish}>-</button>
        <button onClick={oshirish}>+</button>
    </div>
    )
}

export default App