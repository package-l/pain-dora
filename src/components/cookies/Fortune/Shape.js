import { useState, useEffect } from 'react';
import useDraggable from '../../useDraggable';
import { useCallback } from 'react';

const Shape = ({ id, side, text }) => {
    const [animation, setAnimation] = useState("none");

    const handleDrag = useCallback(
        ({ x, y }) => ({
          x: Math.max(0, x),
          y: Math.max(0, y)
        }),
        []
      );
    
      const [ref, pressed, handleMouseDown, closeVisibility, setCloseVisibility, paperTextVisibility, setPaperTextVisibility, fadeAnimation, setFadeAnimation] = useDraggable({
        onDrag: handleDrag
      });

    
    const handleClick = () => {
      setAnimation("shrink");
        requestAnimationFrame(() => {
          setTimeout(() => {
            ref.current.style.animationName = "shrink";
            setFadeAnimation("fadeOut");
          }, 0);
        });
        console.log(closeVisibility);
        setCloseVisibility("hidden");
        setPaperTextVisibility("hidden");
    }
    
  return (
    <div id={`${id}-container`} className="grid-item">
        <div className={`fortune-paper ${side}`} ref={ref} onMouseDown={handleMouseDown} style={{
          animationName: `${animation}`
        }}><p style={{
          visibility: `${paperTextVisibility}`,
          animationName: `${fadeAnimation}`
        }}>{text}</p></div>
        <div id={id}>
            <div className="close" onClick={handleClick} style={{
              visibility: `${closeVisibility}`
            }}>&#xd7;</div>
        </div>
    </div>
  )
}

export default Shape