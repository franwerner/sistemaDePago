import { useEffect } from "react"


export const useTouchMove = ({ alternarMostrar, containerRef }) => {

    useEffect(() => {


        let moveStatus = false

        const TouchStart = (e) => {
            const clientX = e.changedTouches[0].clientX
            clientX <= 120 ? moveStatus = true : moveStatus = false
        }

        const TouchEnd = (e) => {
            const clientX = e.changedTouches[0].clientX
            clientX >= 350 && moveStatus ? alternarMostrar() : moveStatus = false

        }

        containerRef.current.addEventListener("touchstart", TouchStart,{passive : true})
        containerRef.current.addEventListener("touchend", TouchEnd,{passive : true})

        return () => {
            if(!containerRef.current) return
            containerRef.current.removeEventListener("touchstart", TouchStart)
            containerRef.current.removeEventListener("touchend", TouchEnd)
        }



    }, [containerRef])



}