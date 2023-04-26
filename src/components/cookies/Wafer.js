import Cookies from 'js-cookie';
import { useState } from 'react';
import '../../styles/Wafer.scss'


const Wafer = (props) => {
    Cookies.set('wafer', true);
    const [whiteDialogueList] = useState(props.data.customAssets.whiteBoxDialogue);
    const [blackDialogueList] = useState(props.data.customAssets.blackBoxDialogue);

    const handleWhiteBox = (eve) => {
      eve.preventDefault();
      eve.currentTarget.style.opacity = "0";
    }

    const handleHover = (eve) => {
      eve.target.style.opacity = "100";
      //setOpacity(100);
    }

    const handleLeave = (eve) => {
      eve.target.style.opacity = "0";
      //setOpacity(0);
    }

  return (
    <div className="wafer-interaction-container">
      <div className="content-container">
        {/*<div className="instructionBox">
          <BackArrow />
          <div className="instruction-image" style={{
                backgroundImage: `url(${props.data.customAssets.instructionsBox})`
            }}><div className="instruction-text"><p className="dialogue">{`Hover over each Black Square\nthen Click each White square.`}</p></div></div>
        </div>
          <div className="right-section">*/}
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
      {/*</div>*/}
  </div>
  )
}

export default Wafer