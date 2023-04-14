import { linzerAnswerData } from './linzerAnswerData';
import { linzerQuestionData } from './linzerQuestionData'; 
import LinzerQuestionCard from './LinzerQuestionCard';
import LinzerAnswerCard from './LinzerAnswerCard';
import BackArrow from '../../BackArrow';
import '../../../styles/Linzer.scss';
import Cookies from 'js-cookie';

const Linzer = (props) => {
  Cookies.set('linzer', true);

  return (
    <div className="linzer-interaction-container">
      <div className="instructionBox">
        <BackArrow />
        <div className="test"style={{
          backgroundImage: `url(${props.data.customAssets.instructionsBox})`
        }}><p className="dialogue">2 Lies & a Truth .<br></br><br></br>Hover over any prompt &mdash;<br></br>
        the black box&mdash; click to begin,<br></br>then choose the correct truth .</p></div>

      </div>
      <div className="right-section">
        <div className="cards">
          {linzerQuestionData.map((card, key) => {
            return (
              <LinzerQuestionCard key={key} cardNum={key} card={card} bgImg={props.data.customAssets.promptBox} bgImgEven={props.data.customAssets.answerBoxEven} bgImgOdd={props.data.customAssets.answerBoxOdd}/>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Linzer