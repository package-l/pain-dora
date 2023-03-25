import '../../styles/Madeleine.scss';
import { useState, useEffect, useRef } from 'react';


const Madeleine = (props) => {

  //State management for position of elements
  const [rightHeight, setRightHeight] = useState(0);
  const [rightWidth, setRightWidth] = useState(0);
  const ref = useRef(null);

  // State management for text dialogue
  const [index, setIndex] = useState(0);
  const [madeleineText, setMadeleineText] = useState();
  const [consumerText, setConsumerText] = useState(`This will be your dialogue box - the Investigator.\n
  Please c/lick this black box\n to begin, & continue c/licking.`);
  const [list, setList] = useState([]);

  const handleMadeleineDialogueClick = () => {
    if (index < props.data.customAssets.dialogue.length-1) {
      setIndex(index+1);
    }
    else {
      setIndex(23);
    }
    if (props.data.customAssets.dialogue[index].speaker === "consumer") {
      setConsumerText(props.data.customAssets.dialogue[index].text)
      setMadeleineText(undefined)
    }
    else if (props.data.customAssets.dialogue[index].speaker === "madeleine") {
      setMadeleineText(props.data.customAssets.dialogue[index].text);
    }
  } 

  useEffect(() => { 
    //this edit allows text to not infinitely loop (using a state variable)
    setRightHeight(ref.current.clientHeight);
    setRightWidth(ref.current.clientWidth);
    setList(state => [...state, {
      right:  Math.abs(((Math.random() * rightWidth*.8 - rightWidth*.2))) + "px",
      top: Math.abs(((Math.random() * rightHeight - rightHeight*.2))) + "px",
      text: madeleineText
    }])
 }, [index, madeleineText, props, rightWidth, rightHeight])

  return (
    <div className="madeleine-interaction-container">
        <div className="consumerBox">
          <div className="test" onClick={handleMadeleineDialogueClick} style={{
            backgroundImage: `url(${props.data.customAssets.consumerBox})`
          }}><p className="dialogue">{consumerText}</p></div>
          {/*<img onClick={handleMadeleineDialogueClick} src={props.data.customAssets.consumerBox} alt="User Dialogue Box"></img>
          <p className="dialogue">{consumerText}</p>*/}
        </div>
        <div className="right-section" ref={ref}>
          {list.map((item, i) => 
            (
              item.text !== undefined &&
              
                <div className="madeleineBox" key={i} id={`index-${i}`} style={{
                    right: item.right,
                    top: item.top
                }}>
                  <img src={props.data.customAssets.madeleineBox} alt="Mad Mad Baby Madeleine Dialogue Box"></img>
                  <div className="mad-dialogue">{item.text}</div>
                </div>

            )
          )}
        </div>
    </div>
  )
}

export default Madeleine