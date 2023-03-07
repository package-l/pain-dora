import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cookies from 'js-cookie';
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

import testCookie from './img/Madeleine/Mad.png';

function App() {
  /*
  <Route path="*" element={<NoPage />} />
  ^For 404 errors or other pages not specified.
  */
  
  Cookies.remove('home');

  return (
    <BrowserRouter>
      <Routes>
        {/* Website Overall + Navigation */}
        <Route path="/" element={<SplashProvider><Home /></SplashProvider>} />
        {/*<Route path="/" element={<SplashProvider><AcceptCookies /></SplashProvider>} />*/}
        <Route path="/start_er" element={<SplashProvider><Start /></SplashProvider>} />
        <Route path="/declinecookie" element={<RejectCookies />} />
        <Route path="/flavourprofiles" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/maincourse" element={<MainCourse />} />

        {/* Cookie Profiles */}
        <Route path="/fortunecookie" element={<CookieProfile name="Fortune Cookie" img= {testCookie}/>} />
        <Route path="/macaron" element={<CookieProfile name="Macaron" img={testCookie} />} />
        <Route path="/softcookie" element={<CookieProfile name="Soft Cookie" img= {testCookie} />} />
        <Route path="/chess" element={<CookieProfile name="Chess" img= {testCookie} />} />
      </Routes>        
    </BrowserRouter>
  );
}

export default App;
