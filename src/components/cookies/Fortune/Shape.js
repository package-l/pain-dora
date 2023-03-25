import { useState, useEffect } from 'react';
import useDraggable from '../../useDraggable';
import { useCallback } from 'react';

const Shape = ({ id, side, text }) => {

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

    
    const handleClick = () => {
        //setAnimation("none");

        //ref.current.style.animationName("shrink");
        //ref.current.style.animationDuration = "3s";
        //ref.current.style.fillMode = "forwards";
        //ref.current.style.animation = "shrink";
        //ref.current.style.animationDuration = "3s";
        //ref.current.style.fillMode = "forwards";
        ref.current.style.animationDirection = "reverse";
        console.log(ref.current.style.animationDirection);
    }
    
  return (
    <div id={`${id}-container`} className="grid-item">
        <div className={`fortune-paper ${side}`} ref={ref} onMouseDown={handleMouseDown}><p>{text}</p></div>
        <div id={id}>
            <div className="close" onClick={handleClick}>&#xd7;</div>
        </div>
    </div>
  )
}

export default Shape