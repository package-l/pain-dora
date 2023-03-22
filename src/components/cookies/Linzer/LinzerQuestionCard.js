
const LinzerQuestionCard = ({ question, bgImg }) => {

  return (
    <div className="question-card" style={{
        backgroundImage: `url(${bgImg})`
      }}><p className="question-card-text">{question}</p></div>
  )
}

export default LinzerQuestionCard