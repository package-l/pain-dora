import { useRef, useEffect, useCallback, useState } from 'react';

const id = (x) => x;

const useDraggable = ({ onDrag = id } = {}) => {
    const [pressed, setPressed] = useState(false);
    //const [closeVisibility, setCloseVisibility] = useState("hidden");
    //const [paperTextVisibility, setPaperTextVisibility] = useState("hidden");
    //const [fadeAnimation, setFadeAnimation] = useState("none");

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

            // If the sibling fortune cookie is open, shrink it.
            if (elem.parentNode.parentNode.classList.contains("active")) {

                // Check if the sibling comes before or after current target
                
                // Before
                if (elem.parentNode.previousSibling !== null) {
                    if (elem.parentNode.previousSibling.firstChild.style.animationName === "grow") {
                        elem.parentNode.previousSibling.firstChild.style.animationName ="shrink";
                        elem.parentNode.previousSibling.firstChild.firstChild.style.visibility ="hidden";
                        
                        //elem.nextSibling.firstChild.style.visibility = "hidden";

                        // Set sibling fortune cookie's text to fade out
                        elem.parentNode.previousSibling.firstChild.firstChild.style.animationName = "fadeOut";

                        elem.parentNode.previousSibling.lastChild.firstChild.style.visibility = "hidden";
                        /*requestAnimationFrame(() => {
                            //allows animation to reset
                            setTimeout(() => {
                                elem.parentNode.previousSibling.lastChild.firstChild.style.visibility = "hidden";
                            }, 0);
                        });*/


                    }
                }
                // After
                else if (elem.parentNode.nextSibling !== null) {
                    if (elem.parentNode.nextSibling.firstChild.style.animationName === "grow") {
                        elem.parentNode.nextSibling.firstChild.style.animationName ="shrink";
                        elem.parentNode.nextSibling.firstChild.firstChild.style.visibility ="hidden";
                        
                        elem.parentNode.nextSibling.firstChild.firstChild.style.animationName = "fadeOut";

                        elem.nextSibling.firstChild.style.visibility = "hidden";
                        elem.firstChild.style.animationName = "fadeOut";
                        
                        //elem.parentNode.nextSibling.lastChild.firstChild.style.animationName = "fadeOut";
                        // Hide x
                        elem.parentNode.nextSibling.lastChild.firstChild.style.visibility = "hidden";


                    }
                }

                
            }
                //  ERASE LATER BUT - elem/ref is <div> fortune-paper

                // Send class name to parent class in order to know the status of sibling cookie
                elem.parentNode.parentNode.classList.add("active");

                // Animate fortune cookie paper to come out
                elem.style.animationName = "grow";

                // Make the close button visible
                elem.nextSibling.firstChild.style.visibility = "visible";

                // Style fortune cookie text
                elem.firstChild.style.visibility = "visible";
                elem.firstChild.style.animationName = "fadeIn";

        }
        const handleMouseUp = (e) => {

                // ERASE LATER BUT - e.target is <p>
                e.target.style.userSelect = "auto";
                
                setPressed(false);
                //e.target.nextSibling.firstChild.style.visibility = "visible";
                //setCloseVisibility("visible");
                //e.target.firstChild.firstChild.firstChild.style.visibility = "visible";
                //e.target.firstChild.firstChild.firstChild.style.animationName = "fadeIn";
                //setPaperTextVisibility("visible");
                //setFadeAnimation("fadeIn");
        };
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        };
    }, [pressed, onDrag])
    return [ref, pressed, handleMouseDown];
};

export default useDraggable