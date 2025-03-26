import { useState,useEffect } from "react";
const Render=()=>{
    const [count,setCount]=useState(0)
    useEffect(()=>{
        const interval=setInterval(()=>{
            console.log('useeffect');
        },2000)
        return ()=>{
            clearInterval(interval)
            console.log('clean up')
        }
    },[count])
    return(
        <div>
            <p>{count}</p>
            <button onClick={()=>setCount(count+1)}>Click Me</button>
        </div>
    )
}
export default Render