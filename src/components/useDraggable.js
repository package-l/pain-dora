import { useRef, useEffect, useCallback, useState } from 'react';

const id = (x) => x;

const useDraggable = ({ onDrag = id } = {}) => {
    const [pressed, setPressed] = useState(false);
    const [closeVisibility, setCloseVisibility] = useState("hidden");
    const [paperTextVisibility, setPaperTextVisibility] = useState("hidden");
    const [fadeAnimation, setFadeAnimation] = useState("none");
    const [otherAnimation, setOtherAnimation] = useState("");

    const position = useRef({ x: 0, y: 0});
    const ref = useRef();

    const handleMouseDown = useCallback((e) => {
        e.target.style.userSelect = "none";
        setPressed(true);
        //e.target.parentNode.parentNode.classList.remove("active");
    }, []);

    useEffect(() => {
        if (!pressed) {
            return;
        }
        const handleMouseMove = (eve) => {
            if (!ref.current || !position.current) {
                return;
            }
            const pos = position.current;
            const elem = ref.current;
            position.current = onDrag({
                x: pos.x + eve.movementX,
                y: pos.y + eve.movementY
            });

            if (elem.parentNode.parentNode.classList.contains("active")) {

                    
                        if (elem.parentNode.previousSibling !== null) {
                            if (elem.parentNode.previousSibling.firstChild.style.animationName === "grow") {
                                elem.parentNode.previousSibling.firstChild.style.animationName ="shrink";
                                elem.parentNode.previousSibling.firstChild.firstChild.style.visibility ="hidden";
                                console.log(elem.parentNode.previousSibling.lastChild.firstChild)
                                //elem.nextSibling.firstChild.style.visibility = "hidden";
                                requestAnimationFrame(() => {
                                    //allows animation to reset
                                    setTimeout(() => {
                                        elem.parentNode.previousSibling.lastChild.firstChild.style.visibility = "hidden";
                                    }, 0);
                                });

                                elem.style.animationName = "grow";
                                elem.parentNode.parentNode.classList.add("active");
                                //setCloseVisibility("visible");
                                elem.nextSibling.firstChild.style.visibility = "visible";
                                console.log(elem.firstChild.firstChild);
                                elem.firstChild.style.visibility = "visible";
                                elem.firstChild.style.animationName = "fadeIn";
                            }
                        }
                        else if (elem.parentNode.nextSibling !== null) {
                            if (elem.parentNode.nextSibling.firstChild.style.animationName === "grow") {
                                elem.parentNode.nextSibling.firstChild.style.animationName ="shrink";
                                elem.parentNode.nextSibling.firstChild.firstChild.style.visibility ="hidden";
                                console.log(elem.nextSibling.firstChild)
                                elem.nextSibling.firstChild.style.visibility = "hidden";

                                elem.parentNode.nextSibling.lastChild.firstChild.style.visibility = "hidden";

                                elem.style.animationName = "grow";
                                elem.parentNode.parentNode.classList.add("active");
                                //setCloseVisibility("visible");
                                elem.nextSibling.firstChild.style.visibility = "visible";
                                console.log(elem.firstChild.firstChild);
                                elem.firstChild.style.visibility = "visible";
                                elem.firstChild.style.animationName = "fadeIn";
                            }
                        }

                
            }
            else {
                elem.style.animationName = "grow";
                elem.nextSibling.firstChild.style.visibility = "visible";
                elem.parentNode.parentNode.classList.add("active");
                //setCloseVisibility("visible");
            }
        }
        const handleMouseUp = (e) => {
                e.target.style.userSelect = "auto";
                e.target.nextSibling.firstChild.style.visibility = "visible";
                setOtherAnimation("shrink");
                setPressed(false);
                //setCloseVisibility("visible");
                e.target.firstChild.firstChild.firstChild.style.visibility = "visible";
                e.target.firstChild.firstChild.firstChild.style.animationName = "fadeIn";
                //setPaperTextVisibility("visible");
                //setFadeAnimation("fadeIn");
        };
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        };
    }, [pressed, onDrag, closeVisibility, paperTextVisibility, fadeAnimation])
    return [ref, pressed, handleMouseDown, paperTextVisibility, setPaperTextVisibility, fadeAnimation, setFadeAnimation];
};

export default useDraggable