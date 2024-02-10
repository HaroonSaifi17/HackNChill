import './Timeline.css'
import React, {useCallback, useEffect, useLayoutEffect, useRef, useState} from 'react'
import {MotionContext, useScroll, useSpring, useTransform, motion} from "framer-motion";


function Timeline() {
    const sticky = useRef(null);
    const stickyParent = useRef(null);
    const [scrollLeft, setScrollLeft] = useState(0);

    useEffect(() => {
        sticky.current.scrollLeft = 2500 - scrollLeft;
        console.log(scrollLeft)
        // sticky.current.scrollLeft = -scrollLeft;
    }, [scrollLeft]);

    useEffect(() => {
        let scrollWidth = sticky.current.scrollWidth;
        let verticalScrollHeight = stickyParent.current.getBoundingClientRect().height-sticky.current.getBoundingClientRect().height;

        function horizontalScroll() {

            let stickyPosition = sticky.current.getBoundingClientRect().top;
            if(stickyPosition > 1) return;
            else{
                let scrolled = stickyParent.current.getBoundingClientRect().top;
                setScrollLeft((scrollWidth/verticalScrollHeight)*(-scrolled)*2.5);
                // console.log(sticky.current.scrollLeft);
            }
        }

        document.addEventListener('scroll', horizontalScroll);
        return () => {document.removeEventListener('scroll', horizontalScroll);}
    }, []);

    return (
        <>
            <h1 className={"text-center text-4xl"}>TIMELINE</h1>
            <div>
                <div ref={stickyParent} className={"timelineContainer"}>
                    <div ref={sticky} className={"timelineTrainContainer"}>
                        <img src={"/timeline/train.png"}/>
                    </div>
                </div>
            </div>

            <div style={{height: "50px", width: "100vw"}}/>
        </>

    )
}

export default Timeline
