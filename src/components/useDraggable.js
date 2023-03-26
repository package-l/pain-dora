import { useRef, useEffect, useCallback, useState } from 'react';

const id = (x) => x;

const useDraggable = ({ onDrag = id } = {}) => {
    const [pressed, setPressed] = useState(false);
    const [closeVisibility, setCloseVisibility] = useState("hidden");
    const [paperTextVisibility, setPaperTextVisibility] = useState("hidden");
    const [fadeAnimation, setFadeAnimation] = useState("none");

    const position = useRef({ x: 0, y: 0});
    const ref = useRef();

    const handleMouseDown = useCallback((e) => {
        e.target.style.userSelect = "none";
        setPressed(true);
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
            elem.style.animationName = "grow";
        }
        const handleMouseUp = (e) => {
                e.target.style.userSelect = "auto";
                setPressed(false);
                setCloseVisibility("visible");
                setPaperTextVisibility("visible");
                setFadeAnimation("fadeIn");
        };
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        };
    }, [pressed, onDrag, closeVisibility, paperTextVisibility, fadeAnimation])
    return [ref, pressed, handleMouseDown, closeVisibility, setCloseVisibility, paperTextVisibility, setPaperTextVisibility, fadeAnimation, setFadeAnimation];
};

export default useDraggable