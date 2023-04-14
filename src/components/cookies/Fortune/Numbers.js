import { useState } from 'react';

const Numbers = ({ id, frontText, backText }) => {
  const [flip, setFlip] = useState(false);

  const handleCardFlipClick = () => {
    setFlip(!flip);
  }

  console.log(frontText);
  return (
    <div id={id} className="grid-item" onClick={handleCardFlipClick}>
        <div className={`flip-card-inner ${flip ? "flip" : ""}`}>
          <div className="flip-card-front">
            {Object.values(frontText).map((item, i) => (
              <div key={i}>{item}</div>
            ))
            } 
          </div>
          <div className="flip-card-back"><div>{backText}</div></div>
        </div>
    </div>
  )
}

export default Numbers