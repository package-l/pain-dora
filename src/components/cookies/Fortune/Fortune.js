import Shape from './Shape';
import Numbers from './Numbers';
import '../../../styles/Fortune.scss';
import { fortuneData } from './fortuneData';

import Cookies from 'js-cookie';

const Fortune = (props) => {
  Cookies.set('fortune', true);

  return (
    <div className="fortune-interaction-container">
        <div className="instructionBox">
          <div className="test" style={{
              backgroundImage: `url(${props.data.customAssets.instructionsBox})`
          }}><p className="dialogue">Pull out each fortune<br></br>w/ your cursor<br></br>to reveal each curse .</p></div>
        </div>
        <div className="right-section">

                <Shape id="fortune-triangle" side="left" text={fortuneData[0].triangle}/>
                <Shape id="fortune-rhombus" side="right" text={fortuneData[0].rhombus}/>
                <Numbers id="fortune-number1" frontText={fortuneData[0].number1.front} backText={fortuneData[0].number1.back}/>
                <Shape id="fortune-circle" side="left" text={fortuneData[0].circle}/>
                <Shape id="fortune-heart" side="right" text={fortuneData[0].heart}/>
                <Numbers id="fortune-number2" frontText={fortuneData[0].number2.front} backText={fortuneData[0].number2.back}/>
                <Shape id="fortune-pentagon" side="left" text={fortuneData[0].pentagon}/>
                <Shape id="fortune-square" side="right" text={fortuneData[0].square}/>

        </div>
    </div>
  )
}

export default Fortune