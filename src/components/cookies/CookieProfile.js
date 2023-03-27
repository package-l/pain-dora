//import '../../styles/Chess.scss';
import '../../styles/CookieProfile.scss';
import { useState, useNavigate } from 'react';
import { useMediaQuery } from 'react-responsive';

//Cookies:
import Fortune from './Fortune/Fortune';
import Madeleine from "./Madeleine";
import Brownie from "./Brownie";
import Linzer from './Linzer/Linzer';
import Macaron from './Macaron';
import Chess from './Chess';
import Wafer from './Wafer';
import SoftCookie from './SoftCookie';
//import '../../styles/Madeleine.scss';

//Math.random() * width*0.7 - width*0.7,
const CookieProfile = (props) => {
  const [cookie, setCookie] = useState([props.data.name]);
  //const navigate = useNavigate();

  //Media Query
  const isBigScreen = useMediaQuery({ 
    query: '(min-width: 850px)' 
  })
  const isAspectRatio = useMediaQuery({
    query: '(min-aspect-ratio: 8/3)'
  })
  const isTallScreen = useMediaQuery({
    query: '(min-height: 450px)'
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
        backgroundImage: `url(${props.data.bgImg})`
      }}>
      {/*<div className="character-left-section">*/}
        <div className="backarrow"></div>
        <div className="character-card">
          <div className="character-card-border"></div>
            {cookie.toString() === "brownie" ? 
              <div className="profileImg"></div> :
              <img src={props.data.img} className="profileImg" alt="Character Profile Card"></img>
            }
          <div className="fullname">{props.data.fullname}</div>
          <div className="description">{props.data.description}</div>
        </div>
      {/*</div>*/}
      <div className="character-right-section">
        {cookie.toString() === "fortune" &&
          <Fortune data={props.data}/>
        }
        {cookie.toString() === "macaron" &&
          <Macaron data={props.data}/>
        }
        {cookie.toString() === "chess" &&
          <Chess data={props.data}/>
        }
        {cookie.toString() === "madeleine" &&
          <Madeleine data={props.data}/>
        }
        {cookie.toString() === "linzer" &&
          <Linzer data={props.data}/>
        }
        {cookie.toString() === "wafer" &&
          <Wafer data={props.data}/>
        }
        {cookie.toString() === "brownie" &&
          <Brownie data={props.data}/>
        }
        {cookie.toString() === "softcookie" &&
          <SoftCookie data={props.data}/>
        }
      </div>
    </div>}
    </>
  )
}

export default CookieProfile