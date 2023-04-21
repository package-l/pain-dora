import { useState, useRef, useEffect } from 'react';
import Cookies from 'js-cookie';

import BackArrow from '../../BackArrow';
import '../../../styles/SoftCookie.scss';

const SoftCookie = (props) => {
    Cookies.set('softcookie', true);

    const [list, setList] = useState(props.data.customAssets.dialogueTextData.softData);
    const divRef = useRef();
    const dragItemOver = useRef();

    const dragStart = (eve, i, j, k) => {
      divRef.current = list[i][j][k];
    }

    const dragEnter = (eve, i, j, k) => {
      dragItemOver.current = list[i][j][k];
    }

    console.log(list);

    const onTrashDrop = (eve, index) => {

      const copyList = [...list];
      //const dragItemContent = copyListItems[divRef.current];


  
      console.log(divRef.current);
      let newList = [];

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

    useEffect(() => {

    }, [list])

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
              <div key={i} className={`line${i+1}`}>
                {line.map((word, j) => (
                  <div key={`word${j}`} className={`word${i+1}`}>
                  {word.map((item, k) => item.isVisible === true ? (
                    <div 
                    key={`item${k}`} 
                    className="word-parts"                 
                    onDragStart={(eve) => dragStart(eve, i, j, k)}
                    onDragEnter={(eve) => dragEnter(eve, i, j, k)}
                    draggable
                    style={{ visibility: `${item.style}` }}>{item.word}</div>
                  ): (
                    <div key={`item${k}`} id={k} className="word-parts nohover">{item.word}</div>
                  ))}
                <p className="space">&nbsp;</p></div>
                ))}
              </div>
            ))}
            {/*Object.values(list).map((line, i) => (
              <div key={i} className={`line${i+1}`}>
                {line.map((word, j) => (
                  <div key={`word${j}`} className={`word${i+1}`}>
                    {word.map((item, k) => item[1] === true ? (
                      <div 
                      key={`item${k}`} 
                      className="word-parts"                 
                      onDragStart={(eve) => dragStart(eve, k)}
                      onDragEnter={(eve) => dragEnter(eve, k)}
                      draggable
                      style={{ visibility: `${item[2]}` }}>{item[0]}</div>
                    ): (
                      <div key={`item${k}`} id={k} className="word-parts nohover">{item[0]}</div>
                    ))}
                  <p className="space">&nbsp;</p></div>
                ))}<br/><br/>
              </div>
            ))
                    */}
          </div>

          <div className="smallBox" style={{
            backgroundImage: `url(${props.data.customAssets.dialogueBox_Small})`
          }}>

          </div>
          <div className="trash"        
            onDragOver={(e) => onDragOver(e)}
            onDrop={(e) => onTrashDrop(e)}></div>
            {/*<div className="thoughts">
                {list.map((item, i) => (
                  <div key={i} className={`thought${activePiece === item.name ? " active" : ""}`} id={`thought-${item.name}`} style={{
                    backgroundImage: `url(${props.data.customAssets.bubbleBox})`,
                  }}><p>{item.text}</p></div>
                ))
                }
              </div>
            <div className="board" style={{
              backgroundImage: `url(${props.data.customAssets.chessBoard})`
            }}>
              <div className="piece-container">
                {list.map((item, i) => (
                  <div key={i} className={`${item.shape}`} id={`${item.name}`} onMouseOver={() => handleHover(item)} onMouseOut={handleLeave}></div>
                ))
                }
              </div>
              </div>*/}
        </div>

      </div>
    </div>
  )
}

export default SoftCookie