import { useState } from 'react';
import LinzerAnswerCard from './LinzerAnswerCard';

const LinzerQuestionCard = ({ cardNum, card, bgImg, bgImgEven, bgImgOdd }) => {
  const [ isActive, setIsActive ] = useState(false);
  const [ visibility, setVisibility ] = useState("visible");

  const handleHover = () => {
    setIsActive(true);
  }

  const handleLeave = () => {
    setIsActive(false);
  }

  const handleClick = () => {
    setVisibility("hidden");
  }

  console.log(card.card.answers)
  return (
    <>
      <LinzerAnswerCard cardNum={cardNum} answer={card.card.answers} bgImgEven={bgImgEven} bgImgOdd={bgImgOdd} />
      <div className={`question-card card${cardNum}`} onMouseOver={handleHover} onMouseOut={handleLeave} style={{
        backgroundImage: `url(${bgImg})`,
        visibility: `${visibility}`
      }}>
        {isActive ?
          <div className="click-container" onClick={handleClick} style={{
            height: "100%", width: "100%"
          }}>
            <p className="question-card-text">{card.card.hoverState}</p>
          </div> :
          <p className="question-card-text">{card.card.initialState}</p>
        }
      </div>
    </>
  )
}

export default LinzerQuestionCard