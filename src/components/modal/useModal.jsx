import { useState } from 'react'

const useModal=()=>{
    const [isShowing, setIsShowing]=useState(false)
    const toogle=()=>{
        console.log("clique")
        setIsShowing(!isShowing)}

    return {
        isShowing,
        toogle
    }
}

export default useModal