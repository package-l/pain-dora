//import Cookies from 'js-cookie'
import Cookies from 'js-cookie';
import { useSplash } from './SplashProvider';
import '../styles/AcceptCookies.scss';
import { useState } from 'react';
import { Link } from "react-router-dom";

import { useMediaQuery } from 'react-responsive';

const AcceptCookies = () => {

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

  const { isAcceptCookiesShowing, hideAcceptCookies, showDefinition, hideSpotlight } = useSplash();
  const [opacity, setOpacity] = useState({
    accept: 1,
    decline: 1,
    text: 1
  });

  function handleAccept() {
    Cookies.set('home', true);
    hideAcceptCookies();
    hideSpotlight();
    showDefinition();
  }

  function handleAcceptHover() {
    setOpacity({accept: 1, decline: 0.25, text: 0.25})
    console.log(opacity);
  }

  function handleDeclineHover() {
    setOpacity({accept: 0.25, decline: 1, text: 0.25})
    console.log(opacity);
  }

  function handleMouseLeave() {
    setOpacity({accept: 1, decline: 1, text: 1})
  }

  return (
    <>
      {!isBigScreen || isAspectRatio || !isTallScreen ? 
        <div className="page-warning" style={{height: '100vh', color: 'white', fontFamily: 'Chantal', backgroundColor: 'black'}}>
          <div className="page-warning-text" style={{paddingTop: '30vh', top: '50%', transform: 'translateY(50%)'}}>Due to the interactive nature of the website, please use at a larger screen size/aspect ratio.
          <br></br><br></br>Thank you!</div>
      </div>
        : 
        <>

      {!isAcceptCookiesShowing ? null : (
        <div className="accept-cookies-page">
          <div className="choices">
            <div className="cookietext" style={{
                opacity: `${opacity.text}`
              }}>Save Cookies?</div>
              <div className="accept" onMouseEnter={handleAcceptHover} onMouseLeave={handleMouseLeave} onClick={handleAccept} style={{
                opacity: `${opacity.accept}`
              }}>
                <div className="arbotek yes">Y<div className="minion-small">e</div><div className="minion-small">s</div></div>
              </div>
              <div className="dot" style={{
                opacity: `${opacity.text}`
              }}></div>
              <Link to="/declinecookie" className="decline" onMouseEnter={handleDeclineHover} onMouseLeave={handleMouseLeave} style={{
                opacity: `${opacity.decline}`
              }}>
                <div className="arbotek no">N<div className="minion-small">o</div></div>
              </Link>
            <div className="cookie-explanation" style={{
                opacity: `${opacity.text}`
              }}>
              <p>On this byte-sized website, <br/> we use cookies as a tool to storytell. <br/> <br/>No cache, no selling,
                & all of your privacy rights are respected.
              </p>
            </div>
            <div className="x" style={{
                opacity: `${opacity.text}`
              }}>&#9651;</div>
          </div>
        </div>
      )}
      </>
      }
    </>
  )
}

export default AcceptCookies