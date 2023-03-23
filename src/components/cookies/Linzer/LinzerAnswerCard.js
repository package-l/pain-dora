import { useState } from 'react';

const LinzerAnswerCard = ({ cardNum, answer, bgImgEven, bgImgOdd }) => {
  const [line1Color, setLine1Color] = useState();
  const [line2Color, setLine2Color] = useState();
  const [line3Color, setLine3Color] = useState();
  const [opacity, setOpacity] = useState("0");

  const handleAnswerReveal1 = () => {

    if (answer[cardNum].line1.isTruth) {
      setLine1Color("#007800");
      setLine2Color("#a20000");
      setLine3Color("#a20000");
    }
    else if (!answer[cardNum].line1.isTruth) {
      setLine1Color("#a20000")
    }

  }

  const handleAnswerReveal2 = () => {

    if (answer[cardNum].line2.isTruth) {
      setLine2Color("#007800");
      setLine1Color("#a20000");
      setLine3Color("#a20000");
    }
    else if (!answer[cardNum].line2.isTruth) {
      setLine2Color("#a20000")
    }
  }

  const handleAnswerReveal3 = () => {

    if (answer[cardNum].line3.isTruth) {
      setLine3Color("#007800");
      setLine1Color("#a20000");
      setLine2Color("#a20000");
    }
    else if (!answer[cardNum].line3.isTruth) {
      setLine3Color("#a20000")
    }
  }

  const handleHover= () => {
    setOpacity("100");
}

const handleLeave= () => {
    setOpacity("0");
}

  return (
    <div className="answer-card" onMouseOver={handleHover} onMouseOut={handleLeave} style={ cardNum === 1 || cardNum === 2 || cardNum === 5 ? {
      backgroundImage: `url(${bgImgEven})`,
      opacity: `${opacity}`
    }: {
      backgroundImage: `url(${bgImgOdd})`,
      opacity: `${opacity}`
    }}>
      <div className="line1" id={`card${cardNum+1}line1`} onClick={(eve) => {handleAnswerReveal1(eve)}} style={{
        color: `${line1Color}`
      }}>{answer[cardNum].line1.text}</div>
      <div className="line2" id={`card${cardNum+1}line2`} onClick={(eve) => {handleAnswerReveal2(eve)}} style={{
        color: `${line2Color}`
      }}>{answer[cardNum].line2.text}</div>
      <div className="line3" id={`card${cardNum+1}line3`} onClick={(eve) => {handleAnswerReveal3(eve)}} style={{
        color: `${line3Color}`
      }}>{answer[cardNum].line3.text}</div>
    </div>
  )
}

export default LinzerAnswerCard