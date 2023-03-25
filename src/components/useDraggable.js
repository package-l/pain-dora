import { useRef, useEffect, useCallback, useState } from 'react';

const id = (x) => x;

const useDraggable = ({ onDrag = id } = {}) => {
    const [pressed, setPressed] = useState(false);

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