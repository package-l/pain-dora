import { useState } from 'react';
import '../styles/MainCourse.scss';
import Heart from '../img/maincourse/Heart_Black.png';

import HamburgerButton from './HamburgerButton';
import NavMenu from './NavMenu';
import { useMediaQuery } from 'react-responsive';

const MainCourse = () => {
  const [openMenu, setOpenMenu] = useState(false);

  //Media Query
  const isBigScreen = useMediaQuery({ 
    query: '(min-width: 850px)' 
  })
  const isAspectRatio = useMediaQuery({
    query: '(min-aspect-ratio: 8/3)'
  })

  return (
    <>
      {!isBigScreen || isAspectRatio ? 
      <div className="page-warning" style={{height: '100vh', color: 'white', fontFamily: 'Chantal', paddingTop: '20vh', paddingLeft: '2vw', paddingRight: '2vw', backgroundColor: 'black'}}>
        <div className="page-warning-text" style={{top: '50%', transform: 'translateY(-50%)'}}>Due to the interactive nature of the website, please use at a larger screen size/aspect ratio.
        <br></br><br></br>Thank you!</div>
      </div>
        : 
        <div className="maincourse">
        <div className="hamburger-container">
          <HamburgerButton name="menu" open={openMenu} setOpen={setOpenMenu}/>
          <NavMenu open={openMenu} setOpen={setOpenMenu}/>
        </div>
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
        <div className="middle-circle">
          <div>This <br></br>Cookie Monster website ,</div>
          <div className="heartwrapper"><img className="heart" src={Heart} alt="Heart"></img></div>
          <div>aims to <br></br> create genuine, nourishing, & reflective practices, <br></br>
                through exposing normalized toxic dialogues, <br></br>
                between relationships of self & others.
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
      </div>}
    </>
  )
}

export default MainCourse