import { useState } from 'react';
import HamburgerButton from './HamburgerButton';
import NavMenu from './NavMenu';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <div className="hamburger-container">
        <div className="backarrow" onClick={() => navigate(-1)}></div>
        <HamburgerButton name="menu" open={openMenu} setOpen={setOpenMenu}/>
        <NavMenu open={openMenu} setOpen={setOpenMenu}/>
      </div>
      <div>This page has not yet been coded. This will be an about page for the artist, Andy Chan.</div>
    </>
  )
}

export default About