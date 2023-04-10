import Cookies from 'js-cookie';
import { useState } from 'react';
import '../../styles/Wafer.scss'
import WaferBlackBox from './WaferBlackBox';

const Wafer = (props) => {
    Cookies.set('wafer', true);
    const [whiteDialogueList, setWhiteDialogueList] = useState(props.data.customAssets.whiteBoxDialogue);
    const [blackDialogueList, setBlackDialogueList] = useState(props.data.customAssets.blackBoxDialogue);

    const handleWhiteBox = (eve) => {
      eve.preventDefault();
      eve.currentTarget.style.opacity = "0";
    }

    const handleHover = (eve) => {
      eve.target.style.opacity = "100";
    }

    const handleLeave = (eve) => {
      eve.target.style.opacity = "0";
    }

  return (
    <div className="wafer-interaction-container">
      <div className="instructionBox">
        <div className="test" style={{
              backgroundImage: `url(${props.data.customAssets.tapeDialogue.tapeBox})`
          }}><p className="dialogue">{`Hover over each Black Square\nthen Click each White square.`}</p></div>
        </div>
      <div className="right-section">
        <div className="tape-layer" id="tape-1" style={{
          backgroundImage: `url(${props.data.customAssets.tapeDialogue.tapeBox})`
        }}>
          <div className="tape-dialogue">{props.data.customAssets.tapeDialogue.text1}</div>
        </div>
        <div className="tape-layer" id="tape-2" style={{
          backgroundImage: `url(${props.data.customAssets.tapeDialogue.tapeBox})`
        }}>
          <div className="tape-dialogue">{props.data.customAssets.tapeDialogue.text2}</div>
        </div>
        {whiteDialogueList.map((item, i) => 
          (
            <div className="grid-slot" key={i} id={`grid-${i}`} onClick={handleWhiteBox}>
                <div className="black" id={`black-${i}`} >
                  <div className="black-dialogue">{blackDialogueList[i]}</div>
                </div>
                <div className="white" id={`white-${i}`} onMouseOver={handleHover} onMouseOut={handleLeave}>
                  <div className="white-dialogue">{item}</div>
                </div>
            </div>
          )
        )}
      </div>
  </div>
  )
}

export default Wafer