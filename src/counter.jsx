import { useState } from "react"

export default function Counter(){
    const [count,setCount] = useState(0);

    const clickAdd=()=>{
        const newCount = count + 1;
        setCount(newCount);
    }

    const clickMinus = () =>{
        const newCount = count - 1;
        setCount(newCount);
    }
    return(
        <div style={{border:"2px solid purple", padding:"20px", backgroundColor:"turquoise"}}>
            <h2>Counter : {count}</h2>
            <button onClick={clickAdd}>Add</button>
            <button style={{margin:'20px'}} onClick={clickMinus}>Minus</button>
        </div>
    )
}