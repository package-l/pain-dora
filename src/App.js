import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './styles/App.scss';

import Home from './components/Home';
import About from './components/About';
import MainCourse from './components/MainCourse';
import Gallery from './components/Gallery';
import AcceptCookies from './components/AcceptCookies';
import RejectCookies from './components/RejectCookies';
import Start from './components/Start';
import { SplashProvider } from "./components/SplashProvider";
//import { SplashContextLayout } from "./components/SplashContextLayout";

import CookieProfile from './components/cookies/CookieProfile';

//import testCookie from './img/Madeleine/Mad.png';

import { cookieData } from './components/cookies/cookieData';

//temp
import Cookies from 'js-cookie';

function App() {
  /*
  <Route path="*" element={<NoPage />} />
  ^For 404 errors or other pages not specified.
  */
  
  Cookies.remove('home');
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash === '') {
      window.scrollTo(0,0);
    }
    else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [pathname, hash, key]);

  return (

      <Routes>
        {/* Website Overall + Navigation */}
        <Route path="/" element={<SplashProvider><Start /></SplashProvider>} />
        {/*<Route path="/" element={<SplashProvider><AcceptCookies /></SplashProvider>} />*/}
        {/*<Route path="/start_er" element={<SplashProvider><Start /></SplashProvider>} />*/}
        <Route path="/home" element={<Home />} />
        <Route path="/declinecookie" element={<RejectCookies />} />
        <Route path="/flavourprofiles" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/maincourse" element={<MainCourse />} />

        {/* Cookie Profiles */}\
        {cookieData.map((cookie, key) => {
          console.log(cookie.name);
          return (
              <Route path={"/" + cookie.name} key={key} element={<CookieProfile name={cookie.name} data={cookie} />} />
          )
        })
        }
      </Routes>        

  );
}

export default App;
