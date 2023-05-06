import { useState } from 'react';
import HamburgerButton from './HamburgerButton';
import NavMenu from './NavMenu';

import { galleryData } from './galleryData';
import Cookies from 'js-cookie';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

import { Link, useNavigate } from 'react-router-dom';
import '../styles/Gallery.scss';

import { useMediaQuery } from 'react-responsive';

const Gallery = () => {
  //Media Query
  const isBigScreen = useMediaQuery({ 
    query: '(min-width: 850px)' 
  })
  const isAspectRatio = useMediaQuery({
    query: '(min-aspect-ratio: 8/3)'
  })
  const isTallScreen = useMediaQuery({
    query: '(min-height: 450px)'
  })



  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);
  console.log(galleryData[0]);


  return (
    <div className="gallery-container">
    {!isBigScreen || isAspectRatio || !isTallScreen ? 
      <div className="page-warning" style={{height: '100vh', color: 'white', fontFamily: 'Chantal', backgroundColor: 'black'}}>
        <div className="page-warning-text" style={{paddingTop: '30vh', top: '50%', transform: 'translateY(50%)'}}>Due to the interactive nature of the website, please use at a larger screen size/aspect ratio.
        <br></br><br></br>Thank you!</div>
      </div>
        : 
      <>
      <div className="backarrow" onClick={() => navigate(-1)} role="button" aria-label="Go to previous page" tabIndex="0"></div>
      <div className="hamburger-container" role="button" aria-label="Open website navigation menu" tabIndex="0">
        <HamburgerButton name="menu" open={openMenu} setOpen={setOpenMenu}/>
        <NavMenu open={openMenu} setOpen={setOpenMenu}/>
      </div>
      <div role="main" className="white-background">
        <div className="border1">

            <h1 className="title">Flavour - Profiles</h1>
            <div className="grid-container">
              <div className="chess">
                <div className="image">
                  {Cookies.get("chess") ? 
                    <Link to="/chess" state={{section: ""}}><img role="link" className="visited" src={galleryData[0].characters.chess.visited} alt="Link to Queen Knowah's Profile Page"></img></Link> :
                    <>
                      <div className="locked-text rhombus">You must meet<br/> me in the house first !</div>
                      <img src={galleryData[0].characters.chess.locked} alt="Locked Queen Knowah Link"></img>
                      <FontAwesomeIcon className="icon" icon={faLock} />
                    </>
                  }
                </div><br/>
                <div className="name">{galleryData[0].characters.chess.name}</div><br/>
                <div className="description">{galleryData[0].characters.chess.description}</div>
              </div>
              <div className="wafer">
                <div className="image">
                  {Cookies.get("wafer") ? 
                    <Link to="/wafer" state={{section: ""}}><img role="link" className="visited" src={galleryData[0].characters.wafer.visited} alt="Link to Flaky Wafer Jake's Profile Page"></img></Link> :
                    <>
                      <div className="locked-text">You must meet<br/> me in the house first !</div>
                      <img src={galleryData[0].characters.wafer.locked} alt="Locked Flaky Wafer Jake Link"></img>
                      <FontAwesomeIcon className="icon" icon={faLock} />
                    </>
                  }
                </div><br/>
                <div className="name">{galleryData[0].characters.wafer.name}</div><br/>
                <div className="description">{galleryData[0].characters.wafer.description}</div>
              </div>
              <div className="financier">
                <div className="image">
                  {Cookies.get("financier") ? 
                    <>
                      <Link to="/financier" state={{section: ""}}><img role="link" className="visited" src={galleryData[0].characters.financier.visited} alt="Link to Monsieur Financier's Profile Page"></img></Link> 
                      <div className="dollar-sign1 visited">+ $ $ $</div>
                      <div className="dollar-sign2 visited">+ $ $ $</div>
                      <div className="dollar-sign3 visited">+ $ $ $</div>
                    </> :
                    <>
                      <div className="locked-text rhombus">You must meet<br/> me in the house first !</div>
                      <img src={galleryData[0].characters.financier.locked} alt="Locked Monsieur Financier Link"></img>
                      <FontAwesomeIcon className="icon" icon={faLock} />
                    </>
                  }
                </div><br/>
                <div className="name">{galleryData[0].characters.financier.name}</div><br/>
                <div className="description">{galleryData[0].characters.financier.description}</div>
              </div>
              <div className="macaron">
                <div className="image">
                  {Cookies.get("macaron") ? 
                    <Link to="/macaron" state={{section: ""}}><img role="link" className="visited" src={galleryData[0].characters.macaron.visited} alt="Link to Madame Macaron Profile Page"></img></Link> :
                    <>
                      <div className="locked-text">You must meet<br/> me in the house first !</div>
                      <img src={galleryData[0].characters.macaron.locked} alt="Locked Madame Macaron Link"></img>
                      <FontAwesomeIcon className="icon" icon={faLock} />
                    </>
                  }
                </div>
                <br/>
                <div className="name">{galleryData[0].characters.macaron.name}</div><br/>
                <div className="description">{galleryData[0].characters.macaron.description}</div>
              </div>
              <div className="soft">
                <div className="image">
                  {Cookies.get("softcookie") ? 
                    <Link to="/softcookie" state={{section: ""}}><img role="link" className="visited" src={galleryData[0].characters.soft.visited} alt="Link to Soft Cookie Profile Page"></img></Link> :
                    <>
                      <div className="locked-text rhombus">You must meet<br/>everyone else before me !</div>
                      <img src={galleryData[0].characters.soft.locked} alt="Locked Soft Cookie Link"></img>
                      <FontAwesomeIcon className="icon" icon={faLock} />
                    </>
                  }
                </div><br/>
                <div className="name">{galleryData[0].characters.soft.name}</div><br/>
                <div className="description">{galleryData[0].characters.soft.description}</div>
              </div>
              <div className="linzer">
                <div className="image">
                  {Cookies.get("linzer") ? 
                    <Link to="/linzer" state={{section: ""}}><img role="link" className="visited" src={galleryData[0].characters.linzer.visited} alt="Link to Lying Linzer Lindsay Profile Page"></img></Link> :
                    <>
                      <div className="locked-text">You must meet<br/> me in the house first !</div>
                      <img src={galleryData[0].characters.linzer.locked} alt="Locked Lying Linzer Lindsay Link"></img>
                      <FontAwesomeIcon className="icon" icon={faLock} />
                    </>
                  }
                </div><br/>
                <div className="name">{galleryData[0].characters.linzer.name}</div><br/>
                <div className="description">{galleryData[0].characters.linzer.description}</div>
              </div>
              <div className="brownie">
                <div className="image">
                  {Cookies.get("brownie") ? 
                    <Link to="/brownie" state={{section: ""}}><img role="link" className="visited" src={galleryData[0].characters.brownie.visited} alt="Link to Little Debbie Downer Brownie Profile Page"></img></Link> :
                    <>
                      <div className="locked-text rhombus">You must meet<br/> me in the house first !</div>
                      <img src={galleryData[0].characters.brownie.locked} alt="Locked Little Debbie Downer Brownie Link"></img>
                      <FontAwesomeIcon className="icon" icon={faLock} />
                    </>
                  
                  }
                </div><br/>
                <div className="name">{galleryData[0].characters.brownie.name}</div><br/>
                <div className="description">{galleryData[0].characters.brownie.description}</div>
              </div>
              <div className="madeleine">
                <div className="image">
                  {Cookies.get("madeleine") ? 
                    <Link to="/madeleine" state={{section: ""}}><img role="link" className="visited" src={galleryData[0].characters.madeleine.visited} alt="Link to Mad Mad Baby Madeleine's Profile Page"></img></Link> :
                    <>
                      <div className="locked-text">You must meet<br/> me in the house first !</div>
                      <img src={galleryData[0].characters.madeleine.locked} alt="Locked Mad Mad Baby Madeleine Link"></img>
                      <FontAwesomeIcon className="icon" icon={faLock} />
                    </>
                  }
                </div><br/>
                <div className="name">{galleryData[0].characters.madeleine.name}</div><br/>
                <div className="description">{galleryData[0].characters.madeleine.description}</div>
              </div>
              <div className="fortune">
                <div className="image">
                  {Cookies.get("fortune") ? 
                    <Link to="/fortune" state={{section: ""}}><img role="link" className="visited" src={galleryData[0].characters.fortune.visited} alt="Link to Mis-Fortune's Profile Page"></img></Link> :
                    <>
                      <div className="locked-text rhombus">You must meet<br/> me in the house first !</div>
                      <img src={galleryData[0].characters.fortune.locked} alt="Locked Mis-Fortune Link"></img>
                      <FontAwesomeIcon className="icon" icon={faLock} />
                    </>
                  }
                </div><br/>
                <div className="name">{galleryData[0].characters.fortune.name}</div><br/>
                <div className="description">{galleryData[0].characters.fortune.description}</div>
              </div>
              <div className="mystery1">
                <div className="image">
                  <div className="temp-square"></div>
                </div><br/>
                <div className="name">? ? ?</div><br/>
                <div className="description"></div>
              </div>
              <div className="mystery2">
                <div className="image">
                  <div className="temp-circle"></div>
                </div><br/>
                <div className="name">? ? ?</div><br/>
                <div className="description"></div>
              </div>
              <div className="mystery3">
                <div className="image">
                  <div className="temp-triangle"></div>
                </div><br/>
                <div className="name">? ? ?</div><br/>
                <div className="description"></div>
              </div>
            </div>
        </div>
      </div>
      </>}
    </div>
  )
}

export default Gallery