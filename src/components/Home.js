import { useState, useEffect } from 'react';
//import { Link, Outlet } from 'react-router-dom';
import { useSplash } from './SplashProvider';
import '../styles/Home.scss';
import Introduction from './Introduction';
import '../styles/Wrapper.scss';
import NavMenu from './NavMenu';
import NavMap from './NavMap';
import Brownie from '../img/icons/Icon_Brownie.png';
import Chess from '../img/icons/Icon_Chess.png';
import Fortune from '../img/icons/Icon_Fortune.png';
import Linzer from '../img/icons/Icon_Linzer.png';
import Macaron from '../img/icons/Icon_Macaron.png';
import Madeleine from '../img/icons/Icon_Madeleine.png';
import SoftCookie from '../img/icons/Icon_Madeleine.png';
import Wafer from '../img/icons/Icon_Wafer.png';
import HamburgerButton from './HamburgerButton';
import Roof from '../img/2F.png';
import Cellar from '../img/Cellar.png';
import Basement from '../img/basement.png'
import { Link } from "react-router-dom";


//const sleep = (ms = 1000) => new Promise((resolve) => setTimeout(resolve, ms));


const Home = () => {
  const { isShowing, isAcceptCookiesShowing, isDefinitionShowing, isLidShowing } = useSplash();

  const [openMenu, setOpenMenu] = useState(false);
  const [openMap, setOpenMap] = useState(false);

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
      {(isShowing || isAcceptCookiesShowing || isDefinitionShowing) ? null :
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
            <section className="tempwrapper" id="lid">
            </section>
            <section className="map-container" id="floor2">
              <img className="map" src={Roof} alt="Roof floor"></img>
              <div className="cookie-map-container">
                <Link to="/macaron"><img className="macaron cookie" src={Macaron} alt="Madame Macaron Character"></img></Link>
                <Link to="/chess"><img className="chess cookie" src={Chess} alt="Lady Knowah Character"></img></Link>
                <Link to="/fortunecookie"><img className="fortune cookie" src={Fortune} alt="Mis-fortune Character"></img></Link>
              </div>
            </section>
            <section className="map-container" id="ground">
              <img className="map" src={Cellar} alt="Cellar floor"></img>
              <div className="cookie-map-container">
                <Link to="/softcookie"><img className="softcookie cookie" src={SoftCookie} alt="Soft Cookie Character"></img></Link>
                <div className="circles">
                  <div className="bigcircle circle"><p>Garden<br />of Eating</p></div>
                  <div className="bloodcircle circle"><p>Blood<br />Pool</p></div>
                  <div className="watercircle circle"><p>Water<br />Pond</p></div>
                </div>
              </div>
            </section>
            <section className="map-container" id="cellar">
              <img className="map" src={Roof} alt="Roof floor"></img>
              <div className="cookie-map-container">
                <Link to="/madeleine"><img className="madeleine cookie" src={Madeleine} alt="Mad Mad Baby Madeliene"></img></Link>
                <Link to="/madeleine"><img className="wafer cookie" src={Wafer} alt="Wafer cookie"></img></Link>
                <Link to="/madeleine"><img className="linzer cookie" src={Linzer} alt="Linzer cookie"></img></Link>
                <Link to="/madeleine"><img className="brownie cookie" src={Brownie} alt="Brownie cookie"></img></Link>
              </div>
            </section>
            <section className="map-container basement" id="basement">
              <img className="map" src={Basement} alt="Basement floor"></img>
              <div>
                <p>UNDER_CONSTRUCTION</p>
              </div>
            </section>
          </div>
      }
    </div>
  )
}

export default Home