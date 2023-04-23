import { useState, useRef, useEffect } from 'react';
import Cookies from 'js-cookie';

import BackArrow from '../../BackArrow';
import '../../../styles/SoftCookie.scss';

const SoftCookie = (props) => {
    Cookies.set('softcookie', true);

    const [list, setList] = useState(props.data.customAssets.dialogueTextData.softData);
    const [smallList, setSmallList] = useState(props.data.customAssets.smallDialogueTextData.softDataSmall);
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


  
      console.log(divRef.current);
      let newList = [];
    }

    // REVIEW this
    const onDragOver = (eve) => {
      eve.preventDefault();
    }
    
  return (
    <div className="soft-interaction-container">
      <div className="content-container">
        <div className="instructionBox">
          <BackArrow />
          <div className="test" style={{
                  backgroundImage: `url(${props.data.customAssets.instructionBox})`
              }}><p className="dialogue">{props.data.customAssets.instructionText}</p>
          </div>
        </div>
        <div className="right-section">
          <div className="bigBox" style={{
            backgroundImage: `url(${props.data.customAssets.dialogueBox_Big})`
          }}>
            {list.map((line, i) => (
              <div key={i} className={`line`}>
                {line.map((word, j) => (
                  <p key={`word${j}`} className={`word`}>
                  {word.map((item, k) => item.isDeletable === true ? (
                    <p 
                    key={`item${k}`} 
                    className="word-parts"                 
                    onDragStart={(eve) => dragStart(eve, i, j, k, "big")}
                    onDragEnter={(eve) => dragEnter(eve, i, j, k, "big")}
                    draggable
                    style={{ visibility: `${item.style}` }}>{item.word}</p>
                  ): (
                    <p key={`item${k}`} id={k} className="word-parts nohover">{item.word}</p>
                  ))}
                <p className="space">&nbsp;</p></p>
                ))}
              <br/> <br/></div>
            ))}
          </div>

          <div className="smallBox" style={{
            backgroundImage: `url(${props.data.customAssets.dialogueBox_Small})`
          }}>
            {smallList.map((line, i) => (
              <div key={i} className={`line`}>
                {line.map((word, j) => (
                  <p key={`small-word${j}`} className={`word`}>
                  {word.map((item, k) => item.isDeletable === true ? (
                    <p 
                    key={`small-item${k}`} 
                    className="word-parts"                 
                    onDragStart={(eve) => dragStart(eve, i, j, k, "small")}
                    onDragEnter={(eve) => dragEnter(eve, i, j, k, "small")}
                    draggable
                    style={{ visibility: `${item.style}` }}>{item.word}</p>
                  ): (
                    <p key={`small-item${k}`} id={k} className="word-parts nohover">{item.word}</p>
                  ))}
                <p className="space">&nbsp;</p></p>
                ))}
              <br/> <br/></div>
            ))}
          </div>
          <div className="trash"        
            onDragOver={(e) => onDragOver(e)}
            onDrop={(e) => onTrashDrop(e)}></div>
        </div>

      </div>
    </div>
  )
}

export default SoftCookie