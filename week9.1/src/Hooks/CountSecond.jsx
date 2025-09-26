import { useEffect, useState } from "react";


function useInterval(fn, timeout){

    useEffect(()=>{
        setInterval(()=>{
                fn()
        }, timeout)

    },[])

}

export function CountSecond(){
    const [count, setCount] = useState(0);

    useInterval(()=>{
        setCount(c=>c+1)

    },1000)

    return <div>
        the second is {count}
    </div>

}