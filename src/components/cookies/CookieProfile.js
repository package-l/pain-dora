//import '../../styles/Chess.scss';
import '../../styles/CookieProfile.scss';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

//Cookies:
import Fortune from './Fortune/Fortune';
import Madeleine from "./Madeleine";
import Brownie from "./Brownie";
import Linzer from './Linzer/Linzer';
import Macaron from './Macaron';
import Chess from './Chess';
import Wafer from './Wafer';
import SoftCookie from './Soft/SoftCookie';
import Financier from './Financier';
//import '../../styles/Madeleine.scss';

import BackArrowHome from '../BackArrowHome';

//Math.random() * width*0.7 - width*0.7,
const CookieProfile = (props) => {
  const [cookie] = useState([props.data.name]);

  //const navigate = useNavigate();
  const [instructionText] = useState(props.data.customAssets.instructionText);

  /*const madeleineRef = useRef();
  function handleText() {
    setConsumerText("");
  }*/

  //Media Query for screen visibility
  const isBigScreen = useMediaQuery({ 
    query: '(min-width: 880px)' 
  })
  const isAspectRatio = useMediaQuery({
    query: '(max-aspect-ratio: 12/9)' // 8/3
  })
  const isTallScreen = useMediaQuery({
    query: '(max-aspect-ratio: 22/9)'//'(min-height: 450px)'
  })

  // Sizing font media query
  const isSizingAspectRatio = useMediaQuery({
    query: '(max-aspect-ratio: 16/9)'
  })

  const isSizingNarrowAspectRatio = useMediaQuery({
    query: '(max-aspect-ratio: 11/9)'
  })

  return (
    <>
      {!isBigScreen || isAspectRatio || !isTallScreen ? 
      <div className="page-warning" style={{height: '100vh', color: 'white', fontFamily: 'Chantal', backgroundColor: 'black'}}>
        <div className="page-warning-text" style={{paddingTop: '30vh', top: '50%', transform: 'translateY(50%)'}}>Due to the interactive nature of the website, please use at a larger screen size/aspect ratio.
        <br></br><br></br>Thank you!</div>
    </div>
        : 
      <div className="cookie-container" id={props.data.name} style={{
        backgroundImage: `url(${props.data.bgImg})`,
      }}>
      {/*<div className="character-left-section">*/}
        {/*<div className="backarrow" onClick={() => navigate(-1)}></div>*/}
        <div className="container-90">
          <div className="content-container">
            <div className="character-card">
              <div className="character-card-border"></div>
                <BackArrowHome />
                {cookie.toString() === "brownie" && 
                  <div className="profileImg"></div>
                }
                {cookie.toString() === "softcookie" &&
                  <img src={props.data.img[Math.floor(Math.random() * 7)]} className="profileImg soft" alt="Character Profile Card"></img>
                }
                {cookie.toString() === "wafer" &&
                  <img src={props.data.img} className="profileImg"  alt="Character Profile Card" style={{
                    marginTop: '3rem'
                  }}></img>
                }
                {cookie.toString() !== "brownie" && cookie.toString() !== "softcookie" && cookie.toString() !== "wafer"&&
                  <img src={props.data.img} className="profileImg" alt="Character Profile Card"></img>
                }
              <div className="fullname" style={{
                fontSize: `${isSizingAspectRatio ? '1.5vw' : '2.8vh'}`
              }}>{props.data.fullname}</div>
              
              <div className="description" style={{
                fontSize: `${isSizingAspectRatio ? '1vw' : '1.8vh'}`
              }}>{props.data.description}</div>

              {(cookie.toString() !== "madeleine" && cookie.toString() !== "financier" && cookie.toString() !== "brownie") ?
              <div className="cookie-instruction-image" style={{
                backgroundImage: `url(${props.data.customAssets.instructionBox})`,
                fontSize: `${isSizingAspectRatio ? '0.8vw' : '1.6vh'}`
              }}><div className="cookie-instruction-text"><p className="dialogue">{instructionText}</p></div></div> :
                <div className="cookie-instruction-image"></div>
              }

            </div>
          {/*</div>*/}
            <div className="cookie-right-section">
              {cookie.toString() === "fortune" &&
                <Fortune data={props.data}/>
              }
              {cookie.toString() === "macaron" &&
                <Macaron data={props.data}/>
              }
              {cookie.toString() === "chess" &&
                <Chess data={props.data}/>
              }
              {cookie.toString() === "linzer" &&
                <Linzer data={props.data} big={isBigScreen} size={isSizingAspectRatio}/>
              }
              {cookie.toString() === "wafer" &&
                <Wafer data={props.data}/>
              }
              {cookie.toString() === "softcookie" &&
                <SoftCookie data={props.data}/>
              }
            </div>
          </div>
          {cookie.toString() === "financier" &&
                <Financier data={props.data} big={isBigScreen} size={isSizingAspectRatio}/>
              }
              {cookie.toString() === "brownie" &&
                <Brownie data={props.data}/>
              }
              {cookie.toString() === "madeleine" &&
                <Madeleine data={props.data} narrow={isSizingNarrowAspectRatio} wide={isSizingAspectRatio}/>
              }
          

        </div>

    </div>}
    </>
  )
}

export default CookieProfile