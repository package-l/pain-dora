import { useState } from 'react';

const LinzerAnswerCard = ({ cardNum, answer, bgImgEven, bgImgOdd, narrow, wide }) => {
  const [line1Color, setLine1Color] = useState();
  const [line2Color, setLine2Color] = useState();
  const [line3Color, setLine3Color] = useState();

  const handleAnswerReveal1 = () => {

    if (answer.line1.isTruth) {
      setLine1Color("#007800");
      setLine2Color("#a20000");
      setLine3Color("#a20000");
    }
    else if (!answer.line1.isTruth) {
      setLine1Color("#a20000")
    }

  }

  const handleAnswerReveal2 = () => {

    if (answer.line2.isTruth) {
      setLine2Color("#007800");
      setLine1Color("#a20000");
      setLine3Color("#a20000");
    }
    else if (!answer.line2.isTruth) {
      setLine2Color("#a20000")
    }
  }

  const handleAnswerReveal3 = () => {

    if (answer.line3.isTruth) {
      setLine3Color("#007800");
      setLine1Color("#a20000");
      setLine2Color("#a20000");
    }
    else if (!answer.line3.isTruth) {
      setLine3Color("#a20000")
    }
  }

  return (
    <div className={`answer-card card${cardNum}`} style={ cardNum === 1 || cardNum === 2 || cardNum === 5 ? {
      backgroundImage: `url(${bgImgEven})`,
    }: {
      backgroundImage: `url(${bgImgOdd})`,
    }}>
      <div className="answer-card-text">
        <div className="line1" id={`card${cardNum+1}line1`} onClick={(eve) => {handleAnswerReveal1(eve)}} style={{
          color: `${line1Color}`,
          fontSize: `${wide ? '0.75vw' : '1.1em'}`,
        }}>{answer.line1.text}</div> 
        <div className="line2" id={`card${cardNum+1}line2`} onClick={(eve) => {handleAnswerReveal2(eve)}} style={{
          color: `${line2Color}`,
          fontSize: `${wide ? '0.75vw' : '1.1em'}`,
        }}>{answer.line2.text}</div>
        <div className="line3" id={`card${cardNum+1}line3`} onClick={(eve) => {handleAnswerReveal3(eve)}} style={{
          color: `${line3Color}`,
          fontSize: `${wide ? '0.75vw' : '1.1em'}`,
        }}>{answer.line3.text}</div>
      </div>
    </div>
  )
}

export default LinzerAnswerCard