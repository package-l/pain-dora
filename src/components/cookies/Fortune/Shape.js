import { useState } from 'react';
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
    
      const [ref, pressed, handleMouseDown] = useDraggable({
        onDrag: handleDrag
      });

    
    const handleClick = () => {
      //setAnimation("shrink");
      requestAnimationFrame(() => {
        //allows animation to reset
        setTimeout(() => {
          ref.current.style.animationName = "shrink";
          ref.current.parentNode.parentNode.classList.remove("active");
          ref.current.nextSibling.firstChild.style.visibility = "hidden";
          ref.current.firstChild.style.animationName = "fadeOut";
        }, 0);
      });
    }
    
  return (
    <div id={`${id}-container`} className="grid-item">
        <div className={`fortune-paper ${side}`} ref={ref} onMouseDown={handleMouseDown} style={{
          animationName: `${animation}`
        }}><p>{text}</p></div>
        <div id={id}>
            <div className="close" onClick={handleClick}>&#xd7;</div>
        </div>
    </div>
  )
}

export default Shape