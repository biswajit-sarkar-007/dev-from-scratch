import { useEffect, useState } from "react"

const useScreen = () => {
    const [screen, setScreen] = useState({
        windth:window.innerWidth,
        height:window.innerHeight
     })

    const handleScreen= (e) =>{
        setScreen({
            windth:window.innerWidth,
        height:window.innerHeight
        })

    }

    useEffect(()=>{
        window.addEventListener("resize", handleScreen)

        return () =>{
            window.addEventListener("resize", handleScreen)
        }

    },[]);
    return screen

}

export function  ScreenSize(){
    const myscreen = useScreen();
    return(
        <div>
             <p >Your Screen size {myscreen.height} {myscreen.windth}</p>

        </div>
    )
}