import '../../styles/Madeleine.scss';
import { useState, useEffect, useRef, forwardRef } from 'react';
import Cookies from 'js-cookie';
import BackArrowHome from '../BackArrowHome';
import { useMediaQuery } from 'react-responsive';

const Madeleine = forwardRef((props, isAspectRatio) => {
  Cookies.set('madeleine', true);

      // Sizing font media query
      const isSizingAspectRatio = useMediaQuery({
        query: '(max-aspect-ratio: 16/9)'
    })

  //State management for position of elements
  const [rightHeight, setRightHeight] = useState(0);
  const [rightWidth, setRightWidth] = useState(0);
  const ref = useRef(null);

  // State management for text dialogue
  const [index, setIndex] = useState(0);
  const [madeleineText, setMadeleineText] = useState();
  const [list, setList] = useState([]);  
  const [consumerText, setConsumerText] = useState(<>This will be your dialogue box &mdash; the Investigator.<br /><br/>
  Please c/lick this black box<br/> to begin, & continue c/licking.</>);


  const handleMadeleineDialogueClick = () => {
  
    if (index < props.data.customAssets.dialogue.length-1) {
      setIndex(index+1);
    }
    else {
      setIndex(22);
    }
    if (props.data.customAssets.dialogue[index].speaker === "consumer") {
      console.log(props.data.customAssets.dialogue[index].text)
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
      right:  Math.abs(((Math.random() * rightWidth*.80 - rightWidth*.50))) + "px",
      top: Math.abs(((Math.random() * rightHeight - rightHeight*.27))) + "px",
      text: madeleineText
    }])
 }, [index, madeleineText, props, rightWidth, rightHeight])

  return (
    <div className="madeleine-interaction-container">
        <div className="content-container" ref={ref}>

          <div className="instructionBox">
            <BackArrowHome />
            <div className="instruction-image" onClick={handleMadeleineDialogueClick} style={{
              backgroundImage: `url(${props.data.customAssets.instructionBox})`,
              fontSize: `${isSizingAspectRatio ? '0.8vw' : '1.3vh'}`
            }}><div className="instruction-text"><p className="dialogue">{consumerText}</p></div></div>
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
    </div>
  )
})

export default Madeleine