import { useState, useRef } from 'react';
import Confetti from "react-confetti";


import '../../../styles/SoftCookie.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Cookies from 'js-cookie';

const SoftCookie = (props) => {
    Cookies.set('softcookie', true);


    const [list, setList] = useState(props.data.customAssets.dialogueTextData.softData);
    const [smallList, setSmallList] = useState(props.data.customAssets.smallDialogueTextData.softDataSmall);
    const [count, setCount] = useState(0);
    const divRef = useRef();
    const dragItemOver = useRef();
    const box = useRef();

    const dragStart = (eve, i, j, k, size) => {
      if (size === "big") {
        divRef.current = list[i][j][k];
      }
      else {
        divRef.current = smallList[i][j][k];
      }
      box.current = size;
    }

    const dragEnter = (eve, i, j, k, size) => {
      if (size === "big") {
        dragItemOver.current = list[i][j][k];
      }
      else {
        dragItemOver.current = smallList[i][j][k];
      }
    }


    const onTrashDrop = (eve) => {
      const copyList = [...list];
      const smallCopyList = [...smallList]

      //DO THIS FOR SMALL LIST
      if (box.current === "small") {
        smallCopyList.forEach((line, index) => {
          line.forEach((word, j) => {
            word.forEach((item, k) => {
              if (smallList[index][j][k] === divRef.current ) {
                console.log(smallList[index][j][k].style);
                smallList[index][j][k].style = "hidden";
              }
            })
          })
        });
        //console.log(copyList);
        setSmallList(smallCopyList);
      }

      else if (box.current === "big") {
        copyList.forEach((line, index) => {
          line.forEach((word, j) => {
            word.forEach((item, k) => {
              if (list[index][j][k] === divRef.current ) {
                console.log(list[index][j][k].style);
                list[index][j][k].style = "hidden";
              }
            })
          })
        });
        console.log(copyList);
        setList(copyList);
      }

      //const dragItemContent = copyListItems[divRef.current];

      setCount(count+1);
      console.log(count);
  
      console.log(divRef.current);
 
    }

    // REVIEW this
    const onDragOver = (eve) => {
      eve.preventDefault();
    }
    
  return (
    <div className="soft-interaction-container">
      <div className="content-container">
        {/*<div className="instructionBox">
          <BackArrow />
          <div className="instruction-image" style={{
                  backgroundImage: `url(${props.data.customAssets.instructionsBox})`
              }}><div className="instruction-text"><p className="dialogue">{props.data.customAssets.instructionText}</p></div>
          </div>
        </div>
            <div className="right-section">*/}
          <div className="bigBox" style={{
            backgroundImage: `url(${props.data.customAssets.dialogueBox_Big})`
          }}>
            <div className="box-container">
              {list.map((line, i) => (
                <div key={i} className={`line`}>
                  {line.map((word, j) => (
                    <p key={`word${j}`} className={`word`}>
                    {word.map((item, k) => item.isDeletable === true ? (
                      <span 
                      key={`item${k}`} 
                      className="word-parts"                 
                      onDragStart={(eve) => dragStart(eve, i, j, k, "big")}
                      onDragEnter={(eve) => dragEnter(eve, i, j, k, "big")}
                      draggable
                      style={{ visibility: `${item.style}` }}>{item.word}</span>
                    ): (
                      <span key={`item${k}`} id={k} className="word-parts nohover">{item.word}</span>
                    ))}
                  <span className="space">&nbsp;</span></p>
                  ))}
                <br/></div>
              ))}
            </div>
          </div>

          <div className="smallBox" style={{
            backgroundImage: `url(${props.data.customAssets.dialogueBox_Small})`
          }}>
            <div className="box-container-small">
              {smallList.map((line, i) => (
                <div key={i} className={`line`}>
                  {line.map((word, j) => (
                    <p key={`small-word${j}`} className={`word`}>
                    {word.map((item, k) => item.isDeletable === true ? (
                      <span
                      key={`small-item${k}`} 
                      className="word-parts"                 
                      onDragStart={(eve) => dragStart(eve, i, j, k, "small")}
                      onDragEnter={(eve) => dragEnter(eve, i, j, k, "small")}
                      draggable = "true"
                      style={{ visibility: `${item.style}` }}>{item.word}</span>
                    ): (
                      <span key={`small-item${k}`} id={k} className="word-parts nohover">{item.word}</span>
                    ))}
                  <span className="space">&nbsp;</span></p>
                  ))}
                  <br/></div>
              ))}
            </div>
          </div>
          <div className="trash"        
            onDragOver={(e) => onDragOver(e)}
            onDrop={(e) => onTrashDrop(e)}>
              <FontAwesomeIcon className="icon" icon={faTrash} />
              <div className="trash-count" style={{
                color: 'black',
                position: 'absolute',
                top: '50%',
                left: '50%'
              }}>{count}/32</div>
          </div>
        </div>
          {count === 32 &&
          <>
            <div className="ticker-wrap">
              <div className="ticker">
                <div className="end">ThAnk YoU For pLAYing, sAving, & sAvouring Us</div>
              </div>
            </div>
            <Confetti numberOfPieces={150} width={window.innerWidth} height={window.innerHeight} style={{
              position: 'absolute',
              top: '-8%',
              left: '-60%'
            }}/>
          </>
          }
      {/*</div>*/}
    </div>
  )
}

export default SoftCookie