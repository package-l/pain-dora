import Cookies from 'js-cookie';
import { useState, useEffect } from 'react';
import BackArrow from '../BackArrow';
import '../../styles/Chess.scss'

const Chess = (props) => {
    Cookies.set('chess', true);

    const [ activePiece, setActivePiece ] = useState(null); 
    const [ list ] = useState(props.data.customAssets.dialogue)



    const handleHover = (item) => {
      setActivePiece(item.name);
      console.log(activePiece);
    }

    const handleLeave = () => {
      setActivePiece("");
    }

  return (
    <div className="chess-interaction-container">
      <div className="content-container">
        <div className="instructionBox">
          <BackArrow />
          <div className="test" style={{
                  backgroundImage: `url(${props.data.customAssets.instructionBox})`
              }}><p className="dialogue">{props.data.customAssets.instructionText}</p>
          </div>
        </div>
        <div className="right-section">
            <div className="thoughts">
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
            </div>
        </div>

      </div>
    </div>
  )
}

export default Chess