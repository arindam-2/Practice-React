import React,{ use, useState } from "react";

function Counter(){

    const [count , setCount] = useState(0);

    function decreaseCounter(){
        if(count > 0){
            setCount(count - 1)
        }
    }
    function increaseCounter(){
        
            setCount(count + 1)
    }

    return(
        <>
            <button onClick={increaseCounter}>increase: {count}</button>
            <button onClick={decreaseCounter}>decrease: {count}</button>
        </>
    )

}

export default Counter;