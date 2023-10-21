import { useEffect, useState } from "react";

export default function HocTouchEvents(WrapperComponente) {

    return (props) => {

        const [touchAplicado, setTouchAplicado] = useState(false)

        const touchEnd = (e) => {
            const touch = e.changedTouches[0].clientX;
            const innerWidth = e.view.innerWidth;

            if (touch >= innerWidth * 0.8 && touchAplicado == "start") {
                setTouchAplicado("end");
            }
        };

        const touchStart = (e) => {
            const touch = e.changedTouches[0].clientX;
            const innerWidth = e.view.innerWidth;

            if (touch <= innerWidth / 3) {
                setTouchAplicado("start");
            } else {
                setTouchAplicado(false);
            }
        };

        useEffect(() => {

            window.addEventListener('touchend', touchEnd);
            window.addEventListener('touchstart', touchStart);

            return () => {
                window.removeEventListener('touchend', touchEnd);
                window.removeEventListener('touchstart', touchStart);
            };
        }, [touchAplicado]);

        return <WrapperComponente touchAplicado={touchAplicado} {...props}></WrapperComponente>

    }
}