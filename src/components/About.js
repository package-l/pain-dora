import { useState } from 'react';
import HamburgerButton from './HamburgerButton';
import NavMenu from './NavMenu';

const About = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <div className="hamburger-container">
        <HamburgerButton name="menu" open={openMenu} setOpen={setOpenMenu}/>
        <NavMenu open={openMenu} setOpen={setOpenMenu}/>
      </div>
      <div>This page has not yet been coded.</div>
    </>
  )
}

export default About