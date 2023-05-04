import '../styles/NavMenu.scss';
import { Link } from "react-router-dom";
import { useState } from 'react';

const NavMenu = ({ open, setOpen }) => {
  const [flip, setFlip] = useState(false);

  const handleCardFlipClick = () => {
    setFlip(!flip);
  }

  const toggleOpen = () => {
    setOpen(!open);
    console.log("toggle" + open);
  }

  return (
    <div className="navmenu-container">
      <div className="navmenu" open={open} style={{transform:`${open ? 'translateX(0)' : 'translateX(-300%)'}`}}>
          <div className={`flip-card-inner ${flip ? "flip" : ""}`}>
            <div className="flip-card-front">
              <div className="navmenu-border">
                    <div className="close" onClick={toggleOpen}>x</div>
                    <div className="front-text">
                        <ul>
                            <li className="titlemenu">menu</li>
                            <li></li>
                            <li><Link to="/">start_er</Link></li>
                            <li><Link reloadDocument to="/home">home</Link></li>
                            <li><Link to="/flavourprofiles">flavour<br/>profiles</Link></li>
                            <li></li>
                            <li><Link to="/resources">resources</Link></li>
                            <li></li>
                            <li><Link to="/maincourse">main course<br/>of action</Link></li>
                            <li></li>
                            <li></li>
                            <li className="link" onClick={handleCardFlipClick}>about &gt;</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flip-card-back">
              <Link to="/about" className="text">
                <p>fine,</p>
                <p>di(n)e</p>
                <p>w/ me</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.</p>
              </Link>
              <p className="arrowback link" onClick={handleCardFlipClick}>&lt;</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default NavMenu