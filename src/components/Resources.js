import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import '../styles/Resources.scss';

// Other components
import HamburgerButton from './HamburgerButton';
import NavMenu from './NavMenu';
import BackArrow from './BackArrow';

const Resources = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const isSizingAspectRatio = useMediaQuery({
        query: '(max-aspect-ratio: 16/9)'
    })

  return (
    <div className="resources-container">

          <div className="hamburger-container">
            <BackArrow />
            <HamburgerButton name="menu" open={openMenu} setOpen={setOpenMenu}/>
            <NavMenu open={openMenu} setOpen={setOpenMenu}/>
          </div>


          <section className="quote-container" id="quote">
            <h1 className="quote">As much as a knife, words too - can be weaponized .<br/>
                & As much as knife, word do - take many lives . 
            </h1>
            <div className="scroll">
                Scroll for Resources
            </div>
            <div className="arrow"></div>
          </section>

          <section className="list-container" id="resources">
                <h1>For those seeking help with :</h1>
                {/*<div className="list-row">
                    <div className="list-column">
                        <h2>Mental & Emotional Health</h2>
                    </div>
                    <div className="list-column">
                        <h2>Improving on<br/>Empathy & Compassion</h2>
                    </div>
                </div>*/}
                <div className="list-row">
                    <div className="list-column">
                        <h2>Mental & Emotional Health</h2>
                        <div className="border">
                            <ul>
                                <li>
                                    <a href="https://www.freecodecamp.org/" target="_blank" rel="noreferrer noopener">Suicide & Life Crisis Hotline</a>
                                </li>
                                <li>
                                    <a href="https://www.freecodecamp.org/" target="_blank" rel="noreferrer noopener">Eating Disorders</a>
                                </li>
                                <li>
                                <a href="https://www.freecodecamp.org/" target="_blank" rel="noreferrer noopener">Depression & Anxiety</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="list-column">
                        <h2>Improving on<br/>Empathy & Compassion</h2>
                        <ul>
                            <li>
                                <a href="https://www.freecodecamp.org/" target="_blank" rel="noreferrer noopener">Cards for Humanity</a>
                            </li>
                            <li>
                            <a href="https://www.freecodecamp.org/" target="_blank" rel="noreferrer noopener">Nurture Empathy to Nurture Your Kids</a>
                            </li>
                        </ul>
                    </div>
                </div>
          </section>
        </div>
  )
}

export default Resources