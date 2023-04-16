import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import '../../styles/Financier.scss'
import audio from "../../img/Financier/cashier.mp3";
import BackArrow from '../BackArrow';

const Financier = (props) => {
    Cookies.set('financier', true);
    const [text, setText] = useState("");
    const [index, setIndex] = useState(2);
    const [list, setList] = useState([{
        text: props.data.customAssets.dialogue[0].text
    }, {
        text: props.data.customAssets.dialogue[1].text
    }]);
    
    const [ dollarAnimation, setDollarAnimation ] = useState(false);

    const handleDialogueClick = () => {
        if (index <= props.data.customAssets.dialogue.length-1) {
            setText(props.data.customAssets.dialogue[index].text);
            setIndex(index+1);
            console.log(text);
            console.log(index);
            console.log(list);
            setDollarAnimation(true);
            new Audio(audio).play();
        }
    }

    useEffect(() => { 
        //this edit allows text to not infinitely loop (using a state variable)
        if (text !== "") {
            setList(state => [...state, {
                text: text
            }])
        }
     }, [index, text, props])

  return (
    <div className="financier-interaction-container">
        <div className="instructionBox">
            <BackArrow />
            {list.map((item, i) => 

                (text !== undefined && ((i%2 !== 0 && i !== 1) || i === 0)) ?
                    <>
                        {(i !== 0) &&
                            <div className={`dollar-sign ${dollarAnimation ? "float": ""}`} style={{
                                left: '20%', top: '13%', textAlign: 'start'
                            }}>
                                    + $ $ $
                            </div>
                        }
                    </> :
                    <>
                        {(i !== 0) &&
                            <div className={`dollar-sign ${dollarAnimation ? "float": ""}`} style={{
                                right: '20%', top: '8%', textAlign: 'end'
                            }}>
                                    + $ $ $
                            </div>
                        }
                    </>
                )
            }
            <div className="test" onClick={handleDialogueClick} style={{
                backgroundImage: `url(${props.data.customAssets.instructionBox})`
            }}><p className="dialogue">{props.data.customAssets.instructionText}</p></div>
        </div>
        <div className="right-section">
            {list.map((item, i) => 
                (
                    text !== undefined && ((i%2 !== 0 && i !== 1) || i === 0)) ?
                    
                    <div className="financierBox" key={i} id={`financier-${i}`} style={{
                        backgroundImage: `url(${props.data.customAssets.interactionBox1})`
                    }}>
                        <div className="fin-dialogue">{item.text}</div>
                            {/*(i !== 0) &&
                                <div className={`dollar-sign ${dollarAnimation ? "float": ""}`}>
                                        + $ $ $
                                </div>
                */}
                        </div> :
                    <div className="financierBox" key={i} id={`financier-${i}`} style={{
                        backgroundImage: `url(${props.data.customAssets.interactionBox2})`
                        }}>
                        <div className="fin-dialogue">{item.text}</div>
                            {/*(i !== 1) &&
                                <div className={`dollar-sign ${dollarAnimation ? "float": ""}`}>
                                        + $ $ $
                                </div>
                            */}
                    </div>

                )
            }
        </div>
    </div>
  )
}

export default Financier