//import '../../styles/Chess.scss';
import '../../styles/CookieProfile.scss';
import { useState, useNavigate } from 'react';

//Cookies:
import Madeleine from "./Madeleine";
import Brownie from "./Brownie";
//import '../../styles/Madeleine.scss';

//Math.random() * width*0.7 - width*0.7,
const CookieProfile = (props) => {
  const [cookie, setCookie] = useState([props.data.name]);
  //const navigate = useNavigate();

  
  return (
    <div className="cookie-container" id={props.data.name} style={{
      backgroundImage: `url(${props.data.bgImg})`
    }}>
    {/*<div className="character-left-section">*/}
      <div className="backarrow"></div>
      <div className="character-card">
        <div className="character-card-border"></div>
        {cookie.toString() !== "brownie" &&
          <img src={props.data.img} className="profileImg" alt="Character Profile Card"></img>
        }
        <div className="fullname">{props.data.fullname}</div>
        <div className="description">{props.data.description}</div>
      </div>
    {/*</div>*/}
    {cookie.toString() === "madeleine" &&
      <Madeleine data={props.data}/>
    }
    {cookie.toString() === "brownie" &&
      <Brownie data={props.data}/>
    }
  </div>
  )
}

export default CookieProfile