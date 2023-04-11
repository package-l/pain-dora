import Cookies from 'js-cookie';
import { useState, useEffect } from 'react';
import MacaronButton from './MacaronButton';
import '../../styles/Macaron.scss';

const Macaron = (props) => {
  Cookies.set('macaron', true);
  const [list, setList] = useState(props.data.customAssets.dialogue);
  const [activeButton, setActiveButton] = useState(0);
  const [youDialogue, setYouDialogue] = useState(props.data.customAssets.dialogue[0].you);
  const [mmDialogue, setMmDialogue] = useState(props.data.customAssets.dialogue[0].mm);

  const handleClick = (item) => {
    setActiveButton(item.id);
    setYouDialogue(item.you);
    setMmDialogue(item.mm);
  }

  useEffect(() => {
    console.log("clicked! " + activeButton)
  }, [activeButton])

  return (
    <div className="macaron-interaction-container">
        <div className="instructionBox"></div>
        <div className="right-section">
          <div className="dialogueBox" style={{
              backgroundImage: `url(${props.data.customAssets.dialogueBox})`
          }}>
            <div className="mac-dialogue">
              <div>You :</div><br/>
              <div className="you">
                {youDialogue}
              </div><br/><br/>
              <div>Mme Macaron :</div><br/><br/>
              <div className="mm">
                {mmDialogue}
              </div>
            </div>
          </div>
          <div className="controlBox">
            {list.map((item, i) => (
              (i%2 !== 0)) ?
                <div key={i} id={item.id} className={`macaron-button${activeButton === item.id ? " active" : ""}`} onClick={() => handleClick(item)}>
                    <div className="rectangle" style={{
                        backgroundColor: "#c4ceb2",
                    }}></div>
                    <div className="rectangle" style={{
                        backgroundColor: "#c4ceb2",
                    }}></div>
                </div> :
                <div key={i} id={item.id} className={`macaron-button${activeButton === item.id ? " active" : ""}`} onClick={() => handleClick(item)}>
                  <div className="rectangle" style={{
                      backgroundColor: "#fce0e2",
                  }}></div>
                  <div className="rectangle" style={{
                      backgroundColor: "#fce0e2",
                  }}></div>
                </div>
            )}
          </div>
        </div>
    </div>
  )
}

export default Macaron