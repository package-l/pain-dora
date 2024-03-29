import { useState } from 'react';
import '../styles/MainCourse.scss';
import Heart from '../img/maincourse/Heart_Black.png';

import HamburgerButton from './HamburgerButton';
import NavMenu from './NavMenu';
import { useMediaQuery } from 'react-responsive';
import BackArrow from './BackArrow';

const MainCourse = () => {
  const [openMenu, setOpenMenu] = useState(false);

  //Media Query
  const isBigScreen = useMediaQuery({ 
    query: '(min-width: 850px)' 
  })
  const isAspectRatio = useMediaQuery({
    query: '(max-aspect-ratio: 13/9)' // 8/3
  })
  const isTallScreen = useMediaQuery({
    query: '(max-aspect-ratio: 22/9)'//'(min-height: 450px)'
  })

  // Sizing font media query
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
        <div className="maincourse">
          <BackArrow />
        <div className="hamburger-container">
          <HamburgerButton name="menu" open={openMenu} setOpen={setOpenMenu}/>
          <NavMenu open={openMenu} setOpen={setOpenMenu}/>
        </div>
        <div className="grid-container" style={{
          fontSize: `${isSizingAspectRatio ? '1vw' : '1.6vh'}`,
          width: `${isSizingAspectRatio ? '90%' : '80%'}`
        }}>
          <div className="left-text">
            strings together a multitude<br></br>
            of microaggressive<br></br>
            behaviors that are carried<br></br>
            onto adulthood<br></br>
            illuminating how gravely<br></br>
            these environmental factors<br></br>
            effect everyone's personal<br></br>
            human development,<br></br>
            especially those coming<br></br>
            of ages - emotionally,<br></br>
            physically, mentally, etc.
          </div>
          <div className="middle">
            <div className="middle-circle">
              <div>This <br></br>Cookie Monster website ,</div>
              <div className="heartwrapper"><img className="heart" src={Heart} alt="Heart"></img></div>
              <div>aims to <br></br> create genuine, nourishing, & reflective practices, <br></br>
                    through exposing normalized toxic dialogues, <br></br>
                    between relationships of self & others.
              </div>
            </div>
          </div>
          <div className="right-text">
            was created with<br></br>
            love, compassion, &<br></br>
            pain, in response to<br></br>
            the lack of<br></br>
            proper emotional & mental<br></br>
            resources; in hopes<br></br>
            to promote more<br></br>
            emotional & mental<br></br>
            health in education<br></br>
            and us all..<br></br>
          </div>
        </div>
      </div>}
    </>
  )
}

export default MainCourse