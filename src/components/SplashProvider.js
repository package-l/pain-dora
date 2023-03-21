import { createContext, useState, useContext } from 'react';
//import { Link } from 'react-router-dom';
import AcceptCookies from './AcceptCookies';
import Definition from './Definition';
import Start from './Start';
import useWindowDimensions from './useWindowDimensions';
import spotlightImage from '../img/SpotlightWIP.png';
import Cookies from 'js-cookie';
import '../styles/Splash.scss';

//Maybe you want to make the spotlight size relative to window size?

const SplashContext = createContext({
  showAcceptCookies: () => {},
  hideAcceptCookies: () => {},
  showDefinition: () => {},
  hideDefinition: () => {},
  showSpotlight: () => {},
  hideSpotlight: () => {},
  showLid: () => {},
  hideLid: () => {},
  showWrapper: () => {},
  hideWrapper: () => {},
  isAcceptCookiesShowing: true,
  isDefinitionShowing: false,
  isSpotlightShowing: false,
  isLidShowing: false,
  isWrapperShowing: false,
})

export const useSplash = () => {
  const context = useContext(SplashContext);
  if (!context) {
    throw new Error("Must be in splashProvider!")
  }
  return context;
}

export const SplashProvider = ({children}) => {
  const [isAcceptCookiesShowing, setIsAcceptCookiesShowing] = useState(true);
  const [isDefinitionShowing, setIsDefinitionShowing] = useState(false);
  const [isSpotlightShowing, setIsSpotlightShowing] = useState(false);
  const [position, setPosition] = useState({
    left: -500,
    top: -500
  })
  //const [isDoorShowing, setIsDoorShowing] = useState(false);
  const [isLidShowing, setIsLidShowing] = useState(false);
  const { height, width } = useWindowDimensions();
  const [isWrapperShowing, setIsWrapperShowing] = useState(false);

  function handleMouseMove(eve) {
    setPosition({ left: eve.pageX, top: eve.pageY});
    //console.log(`radial-gradient(circle at ${position.left / width * 100}% ${position.top / height * 100}%, transparent 160px, rgba(0, 0, 0, 0.85) 200px)`)
  }

  //This handleButtonClick() goes directly to Home page without Menu
  /*function handleButtonClick() {
    setIsShowing(false);
  }*/

  function handleButtonClick() {
    setIsLidShowing(true);
    setIsWrapperShowing(true);
    setIsSpotlightShowing(false);
  }

  return (
    <>
      <SplashContext.Provider value={{
        showAcceptCookies: () => {setIsAcceptCookiesShowing(true)},
        hideAcceptCookies: () => {setIsAcceptCookiesShowing(false)},
        showDefinition: () => {setIsDefinitionShowing(true)},
        hideDefinition: () => {setIsDefinitionShowing(false)},
        showSpotlight: () => {setIsSpotlightShowing(true);},
        hideSpotlight: () => {setIsSpotlightShowing(false);},
        showLid: () => {setIsLidShowing(true);},
        hideLid: () => {setIsLidShowing(false);},
        showWrapper: () => {setIsWrapperShowing(true);},
        hideWrapper: () => {setIsWrapperShowing(false);},
        isAcceptCookiesShowing,
        isDefinitionShowing,
        isSpotlightShowing,
        isLidShowing,
        isWrapperShowing,
      }}>
        {/*!Cookies.get('home') ? (
          <AcceptCookies />
        ): null*/}
        {/*Cookies.get('home') ? (
          <Definition />
        ): null*/}
        {/*{isDefinitionShowing ? (
          <Definition />
        ): null}
        {isSpotlightShowing ? (
          <div className="splash" onMouseMove={(eve) => handleMouseMove(eve)}>
            <button className="enter" onClick={handleButtonClick}><span>Enter</span></button>
            <img className="spotlight-image" src={spotlightImage} alt="room background"></img>
            <div className="mouse" style={{
              backgroundImage: `radial-gradient(circle at ${position.left / width * 100}% ${position.top / height * 100}%, transparent ${height/5}px, black ${height/5}px)`
            }}></div>
          </div>
          ) : null}*/}
        {children}
      </SplashContext.Provider>
    </>
  )
}
