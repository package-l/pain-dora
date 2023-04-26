import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Other components
import HamburgerButton from './HamburgerButton';
import NavMenu from './NavMenu';

//temp
import Screenshot from '../img/Screenshot.png';

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
      <div>This page has not yet been coded. This will be an About page for Andy Chan.</div>
      <img src={Screenshot} alt="Temporary About Page Plan" style={{
        height: '75vh',
        marginTop: '5%'
      }}></img>
    </>
  )
}

export default About