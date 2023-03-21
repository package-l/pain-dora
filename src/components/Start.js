import { useSplash } from './SplashProvider';
import Definition from './Definition';
import AcceptCookies from './AcceptCookies';
import useWindowDimensions from './useWindowDimensions';
import { useState, useEffect } from 'react';
import spotlightImage from '../img/Monster_Blank.png';
import { Link } from "react-router-dom";
import Cookies from 'js-cookie';

const Start = () => {
  const { isSpotlightShowing, isDefinitionShowing, isAcceptCookiesShowing, showLid, showWrapper, hideSpotlight, showDefinition, showSpotlight } = useSplash();
  const { height, width } = useWindowDimensions();
  const [position, setPosition] = useState({
    left: -500,
    top: -500
  })

  function handleMouseMove(eve) {
    setPosition({ left: eve.pageX, top: eve.pageY});
    //console.log(`radial-gradient(circle at ${position.left / width * 100}% ${position.top / height * 100}%, transparent 160px, rgba(0, 0, 0, 0.85) 200px)`)
  }

  //This handleButtonClick() goes directly to Home page without Menu
  /*function handleButtonClick() {
    setIsShowing(false);
  }*/

  useEffect(() => {
    /*(async () => {
      // Simulating some background work
      await sleep(2000);
      // As soon as the backgorund work finishes, hide the splash and display the home screen
      hideSplash();
    })();*/
    (async () => {
      if (Cookies.get('home')) {
        showDefinition();
      }
      //showDefinition();
      console.log(isDefinitionShowing);
    })();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleButtonClick() {
    showLid();
    showWrapper();
    hideSpotlight();
  }

  return (
    <div className="start">
        {isAcceptCookiesShowing && !Cookies.get('home') ? (
          <AcceptCookies />
        ): <Definition />}
        {/*isDefinitionShowing ? (
          <Definition />
        ): null*/}
        {isSpotlightShowing ? (
          <div className="splash" onMouseMove={(eve) => handleMouseMove(eve)}>
            <button className="enter"><Link to="/home" onClick={handleButtonClick}><span>Enter</span></Link></button>
            <img className="spotlight-image" src={spotlightImage} alt="room background"></img>
            <div className="mouse" style={{
              backgroundImage: `radial-gradient(circle at ${position.left / width * 100}% ${position.top / height * 100}%, transparent ${height/5}px, black ${height/5}px)`
            }}></div>
          </div>
        ) : null}
    </div>
  )
}

export default Start