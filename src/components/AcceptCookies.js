//import Cookies from 'js-cookie'
import Cookies from 'js-cookie';
import { useSplash } from './SplashProvider';
import '../styles/AcceptCookies.scss';
import { useState } from 'react';
import { Link } from "react-router-dom";
import Start from './Start';
import Definition from './Definition';

const AcceptCookies = () => {
  const { isAcceptCookiesShowing, hideAcceptCookies, showDefinition, hideSpotlight, isDefinitionShowing } = useSplash();
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
      {!isAcceptCookiesShowing ? null : (
        <div className="accept-cookies-page">
          <div className="choices">
            <div className="cookietext" style={{
                opacity: `${opacity.text}`
              }}>Save Cookies?</div>
              <div className="accept" onMouseEnter={handleAcceptHover} onMouseLeave={handleMouseLeave} onClick={handleAccept} style={{
                opacity: `${opacity.accept}`
              }}>
                <div className="arbotek">Y<div className="minion-small">e</div><div className="minion-small">s</div></div>
              </div>
              <div className="dot" style={{
                opacity: `${opacity.text}`
              }}></div>
              <Link to="/declinecookie" className="decline" onMouseEnter={handleDeclineHover} onMouseLeave={handleMouseLeave} style={{
                opacity: `${opacity.decline}`
              }}>
                <div className="arbotek">N<div className="minion-small">o</div></div>
              </Link>
            <div className="cookie-explanation" style={{
                opacity: `${opacity.text}`
              }}>
              <p>On this byte-sized website, <br/> we use cookies as a tool to storytell. <br/> <br/>No cache, no selling,
                & all of your privacy rights are respected.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default AcceptCookies