import Cookies from 'js-cookie';
import '../../../styles/Fortune.scss';

// Data
import { fortuneData } from './fortuneData';

// Components
import Shape from './Shape';
import Numbers from './Numbers';

const Fortune = (props) => {
  Cookies.set('fortune', true);

  return (
    <div className="fortune-interaction-container">
      <div className="content-container">
        {/*<div className="instructionBox">
          <BackArrow />
          <div className="instruction-image" style={{
              backgroundImage: `url(${props.data.customAssets.instructionsBox})`
          }}><div className="instruction-text"><p className="dialogue">Pull out each fortune<br></br>w/ your cursor<br></br>to reveal each curse .</p></div></div>
        </div>
        <div className="right-section">*/}
          <div className="group-1" >
            <Shape id="fortune-triangle" side="left" text={fortuneData[0].triangle}/>
            <Shape id="fortune-rhombus" side="right" text={fortuneData[0].rhombus}/>
          </div>
          <Numbers id="fortune-number1" frontText={fortuneData[0].number1.front} backText={fortuneData[0].number1.back}/>
          <div className="group-2">
            <Shape id="fortune-circle" side="left" text={fortuneData[0].circle}/>
            <Shape id="fortune-heart" side="right" text={fortuneData[0].heart}/>
          </div>
          <Numbers id="fortune-number2" frontText={fortuneData[0].number2.front} backText={fortuneData[0].number2.back}/>
          <div className="group-3">
            <Shape id="fortune-pentagon" side="left" text={fortuneData[0].pentagon}/>
            <Shape id="fortune-square" side="right" text={fortuneData[0].square}/>
          </div>
       {/* </div>*/}
      </div>
    </div>
  )
}

export default Fortune