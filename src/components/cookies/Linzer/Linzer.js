import { linzerAnswerData } from './linzerAnswerData';
import { linzerQuestionData } from './linzerQuestionData'; 
import LinzerQuestionCard from './LinzerQuestionCard';
import LinzerAnswerCard from './LinzerAnswerCard';
import '../../../styles/Linzer.scss';
import Cookies from 'js-cookie';

const Linzer = (props) => {
  Cookies.set('linzer', true);

  return (
    <div className="linzer-interaction-container">
      <div className="consumerBox">
        <div className="test"style={{
          backgroundImage: `url(${props.data.customAssets.instructionsBox})`
        }}><p className="dialogue">2 Lies & a Truth .<br></br><br></br>Hover over any prompt -<br></br>the black box, click to begin,<br></br>then choose the correct truth .</p></div>
        {/*<img onClick={handleMadeleineDialogueClick} src={props.data.customAssets.consumerBox} alt="User Dialogue Box"></img>
        <p className="dialogue">{consumerText}</p>*/}
      </div>
      <div className="right-section">
        <div className="cards">
        <div className="questions">
            {linzerQuestionData.map((question, key) => (
                <LinzerQuestionCard key={key} question={question} bgImg={props.data.customAssets.promptBox}/>
            ))}
          </div>
          <div className="answers">
            {linzerAnswerData?.map((answers, key) => {
              return (
                <LinzerAnswerCard key={key} cardNum={key} answer={answers} bgImgEven={props.data.customAssets.answerBoxEven} bgImgOdd={props.data.customAssets.answerBoxOdd}/>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Linzer