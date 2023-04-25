import { linzerAnswerData } from './linzerAnswerData';
import { linzerQuestionData } from './linzerQuestionData'; 
import LinzerQuestionCard from './LinzerQuestionCard';
import LinzerAnswerCard from './LinzerAnswerCard';
import BackArrow from '../../BackArrow';
import '../../../styles/Linzer.scss';
import Cookies from 'js-cookie';

const Linzer = ({data, narrow, wide}) => {
  Cookies.set('linzer', true);

  return (
    <div className="linzer-interaction-container">
      {/*<div className="content-container">
        <div className="instructionBox">
          <BackArrow />
          <div className="instruction-image" style={{
            backgroundImage: `url(${props.data.customAssets.instructionsBox})`
          }}><div className="instruction-text"><p className="dialogue">2 Lies & a Truth .<br></br><br></br>Hover over any prompt &mdash;<br></br>
        the black box&mdash; click to begin,<br></br>then choose the correct truth .</p></div></div>
        </div>
        <div className="right-section">*/}
          <div className="cards">
            {linzerQuestionData.map((card, key) => {
              return (
                <LinzerQuestionCard key={key} cardNum={key} card={card} bgImg={data.customAssets.promptBox} bgImgEven={data.customAssets.answerBoxEven} bgImgOdd={data.customAssets.answerBoxOdd} narrow={narrow} wide={wide}/>
              )
            })}
          </div>
        {/*</div>
      </div>*/}
    </div>
  )
}

export default Linzer