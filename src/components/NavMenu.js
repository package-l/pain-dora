import '../styles/NavMenu.scss';
import { Link } from "react-router-dom";
import { useState } from 'react';

const NavMenu = ({ open }) => {
  const [flip, setFlip] = useState(false);

  const handleCardFlipClick = () => {
    setFlip(!flip);
  }

  return (
    <div className="navmenu-container">
      <div className="navmenu" open={open} style={{transform:`${open ? 'translateX(0)' : 'translateX(-300%)'}`}}>
          <div className={`flip-card-inner ${flip ? "flip" : ""}`}>
            <div className="flip-card-front">
              <div className="navmenu-border">
                    <div>
                        <ul>
                            <li className="titlemenu">menu</li>
                            <li></li>
                            <li><Link to="/start_er">start_er</Link></li>
                            <li><Link to="/home">home</Link></li>
                            <li><Link to="/flavourprofiles">flavour<br/>profiles</Link></li>
                            <li></li>
                            <li><Link to="/maincourse">main course<br/>of action</Link></li>
                            <li></li>
                            <li></li>
                            <li><Link to="/about">about</Link></li>
                            <li className="link" onClick={handleCardFlipClick}>&gt;</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flip-card-back">
              <div className="text">
                <p>fine,</p>
                <p>di(n)e</p>
                <p>w/ me</p>
              </div>
              <p className="arrowback link" onClick={handleCardFlipClick}>&lt;</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default NavMenu