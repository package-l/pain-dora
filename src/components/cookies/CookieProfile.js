//import '../../styles/Chess.scss';
import '../../styles/CookieProfile.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
import Financier from './Financier';
//import '../../styles/Madeleine.scss';

//Math.random() * width*0.7 - width*0.7,
const CookieProfile = (props) => {
  const [cookie, setCookie] = useState([props.data.name]);
  const navigate = useNavigate();
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

  const isSizingAspectRatio = useMediaQuery({
    query: '(max-aspect-ratio: 16/9)'
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
                {cookie.toString() === "brownie" ? 
                  <div className="profileImg"></div> :
                  <img src={props.data.img} className="profileImg" alt="Character Profile Card"></img>
                }
                <br/>
              <div className="fullname">{props.data.fullname}</div>
              <br/>
              <div className="description">{props.data.description}</div><br/>
            </div>
          {/*</div>*/}

            {cookie.toString() === "fortune" &&
              <Fortune data={props.data}/>
            }
            {cookie.toString() === "macaron" &&
              <Macaron data={props.data}/>
            }
            {cookie.toString() === "chess" &&
              <Chess data={props.data}/>
            }
            {cookie.toString() === "financier" &&
              <Financier data={props.data}/>
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
          

        </div>

    </div>}
    </>
  )
}

export default CookieProfile