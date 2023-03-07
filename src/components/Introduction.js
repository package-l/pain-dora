//Code for the box lid and wrapper introduction

import '../styles/Introduction.scss';
import { useSplash } from './SplashProvider';
import { useState, useRef, useEffect, useCallback } from "react";

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
            elem.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
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

const Introduction = () => {
    const { isLidShowing } = useSplash();
    //const [ isLidOn, setIsLidOn ] = useState(true);
    const [ fadeOut, setFadeOut ] = useState({visibility: "visible", opacity: 1, transition: "none"});

    const handleDrag = useCallback(
        ({ x, y }) => ({
          x: Math.max(0, x),
          y: Math.max(0, y)
        }),
        []
      );
    
      const [ref, pressed, handleMouseDown] = useDraggable({
        onDrag: handleDrag
      });

      const handleMouseLeave = () => {
        if (pressed) {
            console.log("out");
            //fade-out/close lid-modal
            setFadeOut({visibility: "hidden", transition: "visibility 0s 2s, opacity 5s linear"});
        }
      }

      /*const handleMouseUp = () => {
        if (pressed) {
            console.log("out");
            //fade-out/close lid-modal
            setFadeOut({visibility: "hidden", opacity: 0, transition: "visibility 0s 2s, opacity 5s linear"});
        }
      }
    }}*/

  return (
    <div className="introduction" onMouseLeave={handleMouseLeave} style={{
        visibility: `${fadeOut.visibility}`,
        opacity: `${fadeOut.opacity}`,
        transition: `${fadeOut.transition}`
    }}>
        {!isLidShowing ? null :
            <div className="lid-modal" ref={ref} onMouseDown={handleMouseDown}>
                <p>{pressed ? "removing..." : "drag to remove lid..."}</p>
            </div>
        }
    </div>
  )
}

export default Introduction