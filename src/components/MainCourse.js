import { useState } from 'react';
import '../styles/MainCourse.scss';
import Heart from '../img/maincourse/Heart_Black.png';

import HamburgerButton from './HamburgerButton';
import NavMenu from './NavMenu';

const MainCourse = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
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
    </div>
  )
}

export default MainCourse