import { useState, useRef } from 'react';
import { Link } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import Cookies from 'js-cookie';
import '../styles/Home.scss';

// Import Splash/website start indicators
import { useSplash } from './SplashProvider';
import Introduction from './Introduction';

// Import Cookie icons
import Brownie from '../img/icons/Icon_Brownie.png';
import Chess from '../img/icons/Icon_Chess.png';
import Fortune from '../img/icons/Icon_Fortune.png';
import Linzer from '../img/icons/Icon_Linzer.png';
import Macaron from '../img/icons/Icon_Macaron.png';
import Madeleine from '../img/icons/Icon_Madeleine.png';
import Financier from '../img/icons/Icon_Financier.png';
import SoftCookieCrack from '../img/icons/Icon_SoftCookie.png';
import SoftCookie from '../img/icons/Icon_Soft_Cookie_Black.png';
import Wafer from '../img/icons/Icon_Wafer.png';

// Import components
import HamburgerButton from './HamburgerButton';
import NavMenu from './NavMenu';
import NavMap from './NavMap';
import DownArrow from './DownArrow';

// Some background image imports
import Basement from '../img/house/Floor_Grey_Basement_Fixed.png';
import Fork from '../img/house/Fork_For_Cellar.png';

// Lock Icon import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  //const { isSpotlightShowing, isAcceptCookiesShowing, isDefinitionShowing, isLidShowing, showSpotlight, showDefinition } = useSplash();
  const { isLidShowing } = useSplash();

  const [openMenu, setOpenMenu] = useState(false);
  const [openMap, setOpenMap] = useState(false);

  const [isSoftCookieCracked, setIsSoftCookieCracked] = useState(false);

  const wrapperRef = useRef();
  //const scrollRef = useRef(null);
  //useScrollSnap({ ref: scrollRef, duration: 10});

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

  const handleLiftLid = (eve) => {
    wrapperRef.current.scrollIntoView({behavior: 'smooth'});
  }

  const handleSoftCookieHover = () => {
    setIsSoftCookieCracked(!isSoftCookieCracked);
  }

  const handleSoftCookieLeave = () => {
    setIsSoftCookieCracked(!isSoftCookieCracked);
  }

  //useEffect(() => {
    /*(async () => {
      // Simulating some background work
      await sleep(2000);
      // As soon as the backgorund work finishes, hide the splash and display the home screen
      hideSplash();
    })();*/
    // eslint-disable-next-line react-hooks/exhaustive-deps
  //}, []);


  return (
    <div className="home">
      {isLidShowing ? (
        <>
          <Introduction />
        </>
      ): null}
      {!isBigScreen || isAspectRatio || !isTallScreen ? 
      <div className="page-warning" style={{height: '100vh', color: 'white', fontFamily: 'Chantal', backgroundColor: 'black'}}>
        <div className="page-warning-text" style={{paddingTop: '30vh', top: '50%', transform: 'translateY(50%)'}}>Due to the interactive nature of the website, please use at a larger screen size/aspect ratio.
        <br></br><br></br>Thank you!</div>
      </div>
        : 
        <div className="home-main" id="home-grid">

          <div className="hamburger-container">
            <HamburgerButton name="menu" open={openMenu} setOpen={setOpenMenu}/>
            <NavMenu open={openMenu} setOpen={setOpenMenu}/>
            <HamburgerButton name="map" open={openMap} setOpen={setOpenMap}/>
            <NavMap open={openMap} setOpen={setOpenMap}/>
          </div>


          <section className="map-container" id="roof">
            <div className="cookie-map-container">
              <div className="lid-text" onClick={(eve) => handleLiftLid(eve)} style={{
                  fontSize: `${isSizingAspectRatio ? '4.5vw' : '8vh'}`
                }}>
                lift lid
                <div className="roof-down">
                    <DownArrow nextFloor={"wrapper"}/>
                </div>
              </div>
            </div>
          </section>

          <section className="map-container" id="wrapper" ref={wrapperRef}>
                <div className="cookie-map-container">
                    <div className="content" id="wrapper-grid">
                        <h2 className="titlea"  style={{
                          fontSize: `${isSizingAspectRatio ? '4.5vw' : '8vh'}`
                        }}>Pain/dora's Box</h2>
                        <h2 className="titleb" style={{
                          fontSize: `${isSizingAspectRatio ? '4.5vw' : '8vh'}`
                        }}>of Cookie Monsters ,</h2>
                        <p className="line2" style={{
                          fontSize: `${isSizingAspectRatio ? '1.15vw' : '2vh'}`
                        }}>“Home,” unfortunately, is a space where abuse often resides.</p><br/>
                        <p className="line3" style={{
                          fontSize: `${isSizingAspectRatio ? '1.15vw' : '2vh'}`
                        }}>Disguised as a warm, safe, & loving environment, everyday is a day,<br/>
                        where soft cookie kids are forced to face hostile situations,<br/>
                        imbuing emotional, mental, &/or physical trauma . 
                        </p>
                        <p className="line4" style={{
                          fontSize: `${isSizingAspectRatio ? '1.15vw' : '2vh'}`
                        }}>
                            In this case,<br/>I invite you to question & listen,<br/>to what each cookie (character) has to
                             say & feel<br/>– in this cookie box ass.ortment.<br/> <br/>Explore the house<br/>(inspired by kitchen & dining settings),<br/>
                             by scrolling & strolling, & c/licking around .<br/><br/>
                             Be the investigator,<br/>& help find the Soft Cookie Kid that has gone missing .
                        </p>
                        <h3 className="titlec" style={{
                          fontSize: `${isSizingAspectRatio ? '3.5vw' : '6vh'}`
                        }}>a <br/><span style={{
                          letterSpacing: '0.5rem'
                        }}>Cookie</span><br/>Murder Mystery :</h3>
                        <div className="wrapper-down">
                              <DownArrow nextFloor={"floor 2"}/>
                        </div>
                    </div>
                </div>

          </section>

          <section className="map-container" id="floor2">
            {/*<img className="map" src={Roof} alt="Roof floor"></img>*/}
            <div className="cookie-map-container">
              <div id="f2-grid" className="content">
                <div className="mac">
                  <Link to="/macaron" className="macaron" state={{section: "f2-grid"}}><img className="cookie" src={Macaron} alt="Madame Macaron Character"></img></Link>
                </div>
                <div className="che">
                  <Link to="/chess" className="chess" state={{section: "f2-grid"}}><img className="cookie" src={Chess} alt="Lady Knowah Character"></img></Link>
                </div>
                <div className="for">
                  <Link to="/fortune" className="fortune" state={{section: "f2-grid"}}><img className="cookie" src={Fortune} alt="Mis-fortune Character"></img></Link>
                </div>
                <div className="fin" >
                  <Link to="/financier" className="financier" state={{section: "f2-grid"}}><img className="cookie" src={Financier} alt="Financier Character"></img>
                    <div className="dollar-sign1">$ $ $</div>
                    <div className="dollar-sign2">$ $ $</div>
                    <div className="dollar-sign3">$ $ $</div>
                  </Link>
                </div>
                <div className="f2-down">
                  <DownArrow nextFloor={"ground"}/>
                </div>
              </div>
            </div>
          </section>
          <section className="map-container" id="ground">
            <div className="cookie-map-container">
              <div id="ground-grid" className="content">
                <div className="mad">
                  <Link to="/madeleine" className="madeleine" state={{section: "ground-grid"}}><img className="cookie" src={Madeleine} alt="Mad Mad Baby Madeliene"></img></Link>
                </div>
                <div className="waf">
                  <Link to="/wafer" className="wafer" state={{section: "ground-grid"}}><img className="cookie" src={Wafer} alt="Wafer cookie"></img></Link>
                </div>
                <div className="linz">
                  <Link to="/linzer" className="linzer" state={{section: "ground-grid"}}><img className="cookie" src={Linzer} alt="Linzer cookie"></img></Link>
                </div>
                <div className="bro">
                  <Link to="/brownie" className="brownie" state={{section: "ground-grid"}}><img className="cookie" src={Brownie} alt="Brownie cookie"></img></Link>
                </div>
                <div className="ground-down">
                  <DownArrow nextFloor={"cellar"}/>
                </div>
              </div>
            </div>
          </section>
          <section className="map-container" id="cellar">
            <img className="fork" src={Fork} alt="Fork"></img>
            <div className="cookie-map-container">
            <div id="cellar-grid" className="content">
                {Cookies.get('brownie') && Cookies.get('madeleine') && Cookies.get('linzer') && Cookies.get('fortune') &&
                Cookies.get('chess') && Cookies.get('macaron') && Cookies.get('wafer') && Cookies.get('brownie') ?
                    <div className="sof">
                      <Link to="/softcookie" className="softcookie" state={{section: "cellar-grid"}}><img className="cookie" src={`${isSoftCookieCracked ? SoftCookieCrack : SoftCookie}`} alt="Soft Cookie Character" onMouseOver={handleSoftCookieHover} onMouseOut={handleSoftCookieLeave}></img></Link> 
                    </div> :
                    (<div className="Locked">
                      <div className="softcookie">
                        <img className="cookie" src={SoftCookie} alt="Soft Cookie Character"></img>
                        <FontAwesomeIcon className="Icon" icon={faLock} />
                      </div>
                    </div>)
                  }
                <div className="circles">
                  <div className="bigcircleborder"></div>
                  <div className="bigcircle circle"><p style={{
                    fontSize: `${isSizingAspectRatio ? '1.5vw' : '3vh'}`
                  }}>Garden<br />of Eating</p></div>
                  <div className="bloodcircle circle"><p style={{
                    fontSize: `${isSizingAspectRatio ? '1.5vw' : '2.6vh'}`
                  }}>Blood<br />Pool</p></div>
                  <div className="watercircle circle"><p style={{
                    fontSize: `${isSizingAspectRatio ? '1.5vw' : '2.6vh'}`
                  }}>Water<br />Pond</p></div>
                </div>
                <div className="cellar-down">
                  <DownArrow nextFloor={"basement"}/>
                </div>
              </div>
            </div>
          </section>
          <section className="map-container basement" id="basement">
            <img className="base-map" src={Basement} alt="Under Construction Basement Floor Map"></img>
            <p className="copyright" style={{
            fontSize: `${isSizingAspectRatio ? '0.9vw' : '1.7vh'}`
            }}>
                Cookie Monsters (Website)  ||  Copyright © 2023 Fine, Di(n)e w/ Me & Andy C.  ||  All Rights Reserved .
            </p>
          </section>
        </div>
        }
    </div>
  )
}

export default Home