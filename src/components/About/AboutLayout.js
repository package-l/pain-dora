import { Outlet } from 'react-router-dom';
import AboutNav from './AboutNav';
import About from './About';

const AboutLayout = () => {
  return (
    <>
        <Outlet />
        <About />
    </>
  )
}

export default AboutLayout