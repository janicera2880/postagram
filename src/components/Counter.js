import React, {useState, useEffect} from "react";


function Counter() {
    const [count, setCount] = useState(0);

    useEffect (() => {
        const interval = setInterval (() => {
            setCount(count => count + 1)
        }, 3000)
        return () => clearInterval(interval);
    }, []);

    function increment (){
        setCount(count => count +1)
    }
    function decrement () {
        setCount (count => count  - 1)
    }
    return (

        <div>
        <h1>{count}</h1>
        <button onClick={increment}>increment </button>
        <button onClick={decrement}>decrement</button>
        </div>
    )
}
export default Counter;