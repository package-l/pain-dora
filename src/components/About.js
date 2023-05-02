import { useState } from 'react';
import { Route, Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

// Other components
import HamburgerButton from './HamburgerButton';
import NavMenu from './NavMenu';
import BackArrow from './BackArrow';
import AboutNav from './AboutNav';

import Test from './Test';

// Style
import '../styles/About.scss';


const About = () => {
  const [openMenu, setOpenMenu] = useState(false);

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


  return (
    <>
      {!isBigScreen || isAspectRatio || !isTallScreen ? 
      <div className="page-warning" style={{height: '100vh', color: 'white', fontFamily: 'Chantal', backgroundColor: 'black'}}>
        <div className="page-warning-text" style={{paddingTop: '30vh', top: '50%', transform: 'translateY(50%)'}}>Due to the interactive nature of the website, please use at a larger screen size/aspect ratio.
        <br></br><br></br>Thank you!</div>
      </div>
        : 
      <div className="about-container">
        <div className="hamburger-container">
          <BackArrow />
          <HamburgerButton name="menu" open={openMenu} setOpen={setOpenMenu}/>
          <NavMenu open={openMenu} setOpen={setOpenMenu}/>
        </div>
        <div className="content">
          <div className="line1"><p style={{
            fontSize: `${isSizingAspectRatio ? '1.1vw' : '2vh'}`
          }}>This Cookie Monsters Website is fully designed & created by 2 friends, Andy C. & Louisa G. </p></div>

          <div className="dine"><h2 style={{
            fontSize: `${isSizingAspectRatio ? '2.75vw' : '4.5vh'}`
          }}>Fine, Di(n)e w/ Me</h2></div>
          <div className="line2"><p style={{
            fontSize: `${isSizingAspectRatio ? '0.9vw' : '1.65vh'}`
          }}>is an intimate space that prioritizes
          </p></div>
          <div className="bullets"><p style={{
            fontSize: `${isSizingAspectRatio ? '0.9vw' : '1.65vh'}`
          }}><span className="bullet">intentional</span><br/>
          <span className="bullet">minimalistic</span><br/><span className="bullet">curational</span><br/>
          <span className="bullet">aesthetic</span><br/><span className="bullet">visual</span> 
          <span className="bullet">capitalistic</span><br/><span className="bullet">commercial</span> meaningful design ,
          </p></div>
          <div className="line3"><p style={{
            fontSize: `${isSizingAspectRatio ? '0.9vw' : '1.65vh'}`
          }}>fostering emotional and physical sustainability ,<br/>             
          </p></div>
          <div className="line3 second"><p style={{
            fontSize: `${isSizingAspectRatio ? '0.9vw' : '1.65vh'}`
          }}>through a plateful of playful and painful experiences .                
          </p></div>
          <div className="line4"><p style={{
            fontSize: `${isSizingAspectRatio ? '0.9vw' : '1.65vh'}`
          }}> - A .                
          </p></div>
          <div className="inquire"><p style={{
            fontSize: `${isSizingAspectRatio ? '0.9vw' : '1.65vh'}`
          }}>
              To inquire, please say hello at :
          </p></div>
          <div className="email"><p style={{
            fontSize: `${isSizingAspectRatio ? '0.9vw' : '1.65vh'}`
          }}>
              FineDinewme @ Gmail.com
          </p></div>
          <div className="insta"><p style={{
            fontSize: `${isSizingAspectRatio ? '0.9vw' : '1.65vh'}`
          }}>
              & @ ChandyApple (via Instagram)
          </p></div>
        </div>
        <p className="copyright" style={{
            fontSize: `${isSizingAspectRatio ? '0.9vw' : '1.7vh'}`
          }}>
              Cookie Monsters (Website)  ||  Copyright © 2023 Fine, Di(n)e w/ Me & Andy C.  ||  All Rights Reserved .
        </p>
      </div>}
    </>
  )
}

export default About