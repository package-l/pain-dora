import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useSplash } from './SplashProvider';
import '../styles/Home.scss';
import Introduction from './Introduction';
import '../styles/Wrapper.scss';
import Brownie from '../img/icons/Icon_Brownie.png';
import Chess from '../img/icons/Icon_Chess.png';
import Fortune from '../img/icons/Icon_Fortune.png';
import Linzer from '../img/icons/Icon_Linzer.png';
import Macaron from '../img/icons/Icon_Macaron.png';
import Madeleine from '../img/icons/Icon_Madeleine.png';
import SoftCookie from '../img/icons/Icon_Madeleine.png';
import Wafer from '../img/icons/Icon_Wafer.png';

import HamburgerButton from './HamburgerButton';
import NavMenu from './NavMenu';
import NavMap from './NavMap';

import Roof from '../img/house/Floor_2.png';
import Ground from '../img/house/Floor_G_Text.png'
import Cellar from '../img/house/Floor_Cellar.png';
import Basement from '../img/house/Floor_Basement.png';
import Fork from '../img/house/Fork_For_Cellar.png';

import { useMediaQuery } from 'react-responsive';


//const sleep = (ms = 1000) => new Promise((resolve) => setTimeout(resolve, ms));


const Home = () => {
  const { isSpotlightShowing, isAcceptCookiesShowing, isDefinitionShowing, isLidShowing, showSpotlight, showDefinition } = useSplash();

  const [openMenu, setOpenMenu] = useState(false);
  const [openMap, setOpenMap] = useState(false);

  //Media Query
  const isDesktopOrLaptop = useMediaQuery({
    query: `(min-width: 1224px)`
  })
  const isBigScreen = useMediaQuery({ 
    query: '(min-width: 850px)' 
  })
  const isAspectRatio = useMediaQuery({
    query: '(min-aspect-ratio: 9/3)'
  })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  useEffect(() => {
    /*(async () => {
      // Simulating some background work
      await sleep(2000);
      // As soon as the backgorund work finishes, hide the splash and display the home screen
      hideSplash();
    })();*/
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="home">
      {isLidShowing ? (
        <>
          <Introduction />
        </>
      ): null}
      {!isBigScreen || isAspectRatio ? 
      <div className="page-warning" style={{color: 'white', fontFamily: 'Chantal', paddingTop: '20vh', paddingLeft: '2vw', paddingRight: '2vw'}}>
        Due to the interactive nature of the website, please use at a larger screen size.
        <br></br><br></br>Thank you!
      </div>
        : 
        <div className="home-main" id="home-grid">
        <div className="hamburger-container">
          <HamburgerButton name="menu" open={openMenu} setOpen={setOpenMenu}/>
          <NavMenu open={openMenu} setOpen={setOpenMenu}/>
          <HamburgerButton name="map" open={openMap} setOpen={setOpenMap}/>
          <NavMap open={openMap} setOpen={setOpenMap}/>
        </div>
        {/* background image set in scss file
        <section className="wrapper">
          <div className="wrapper">
              <div className="wrapper-modal">
                  <div className="wrapper-text">
                      <h2 className="titlea">Pain/dora's Box</h2>
                      <h2 className="titleb">of Cookie Monsters ,</h2>
                      <p className="line2">"Home", unfortunately is where abuse often resides.</p>
                      <p className="line3">Disguised as a warm, safe, & loving space, everday is day, soft cookie kids are forced to face
                          emotional damage verbally and/or physically. 
                      </p>
                      <p className="line4">
                          In this case, <br/> I invite you to question & listen, <br/> to what each cookie (character) in this box
                          ass.ortment has to say & feel. <br/> <br/>Explore the house, <br/>through the kitchen, by c/licking around. <br/><br/>
                          Help find the Soft Cookie Kid that's gone missing.
                      </p>
                      <h3 className="titlec">a <br/> Cookie <br/>Murder Mystery :</h3>
                  </div>
              </div>
          </div>
  </section>*/}
        <section className="tempwrapper" id="roof">
        </section>
        <section className="map-container" id="floor2">
          {/*<img className="map" src={Roof} alt="Roof floor"></img>*/}
          <div className="cookie-map-container">
            <div id="f2-grid" className="content">
              <div className="mac">
                <Link to="/macaron"><img className="macaron cookie" src={Macaron} alt="Madame Macaron Character"></img></Link>
              </div>
              <div className="che">
                <Link to="/chess"><img className="chess cookie" src={Chess} alt="Lady Knowah Character"></img></Link>
              </div>
              <div className="for">
                <Link to="/fortune"><img className="fortune cookie" src={Fortune} alt="Mis-fortune Character"></img></Link>
              </div>
            </div>
          </div>
        </section>
        <section className="map-container" id="ground">
          <div className="cookie-map-container">
            {/*<img className="map" src={Ground} alt="Roof floor"></img>*/}
            <div id="ground-grid" className="content">
              <div className="mad">
                <Link to="/madeleine"><img className="madeleine cookie" src={Madeleine} alt="Mad Mad Baby Madeliene"></img></Link>
              </div>
              <div className="waf">
                <Link to="/wafer"><img className="wafer cookie" src={Wafer} alt="Wafer cookie"></img></Link>
              </div>
              <div className="linz">
                <Link to="/linzer"><img className="linzer cookie" src={Linzer} alt="Linzer cookie"></img></Link>
              </div>
              <div className="bro">
                <Link to="/brownie"><img className="brownie cookie" src={Brownie} alt="Brownie cookie"></img></Link>
              </div>
            </div>
          </div>
        </section>
        <section className="map-container" id="cellar">
          <img className="fork" src={Fork} alt="Fork"></img>
          {/*<img className="map" src={Cellar} alt="Cellar floor"></img>*/}
          <div className="cookie-map-container">
            <Link to="/softcookie"><img className="softcookie cookie" src={SoftCookie} alt="Soft Cookie Character"></img></Link>
            <div className="circles">
              <div className="bigcircleborder"></div>
              <div className="bigcircle circle"><p>Garden<br />of Eating</p></div>
              <div className="bloodcircle circle"><p>Blood<br />Pool</p></div>
              <div className="watercircle circle"><p>Water<br />Pond</p></div>
            </div>
          </div>
        </section>
        <section className="map-container basement" id="basement">
          <img className="map" src={Basement} alt="Basement floor"></img>

          {/*<div>
            <p>UNDER_CONSTRUCTION</p>
          </div>*/}
        </section>
      </div>
      }
    </div>
  )
}

export default Home