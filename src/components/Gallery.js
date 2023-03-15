import { useState } from 'react';
import HamburgerButton from './HamburgerButton';
import NavMenu from './NavMenu';

const Gallery = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <div className="hamburger-container">
        <HamburgerButton name="menu" open={openMenu} setOpen={setOpenMenu}/>
        <NavMenu open={openMenu} setOpen={setOpenMenu}/>
      </div>
      <div>This page has not yet been coded. It will look roughly like this:</div>
    </>
  )
}

export default Gallery