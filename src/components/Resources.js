import { useState, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import '../styles/Resources.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

// Other components
import HamburgerButton from './HamburgerButton';
import NavMenu from './NavMenu';
import BackArrow from './BackArrow';

const Resources = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const resourceRef = useRef();

    const handleScrollButton = (eve) => {
        resourceRef.current.scrollIntoView({behavior: 'smooth'});
      }

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
            <div className="scroll" onClick={(eve) => handleScrollButton(eve)}>
                Scroll for Resources
                <FontAwesomeIcon icon={faCaretDown} className="caret"/>
            </div>
            <div className="arrow"></div>
          </section>

          <section className="list-container" id="resources" ref={resourceRef}>
                <div className="list-position-container">
                    <h1>For those seeking help with :</h1>
                    <div className="list-row">
                        <div className="list-column"><h2>Mental & Emotional Health</h2></div>
                        <div className="list-column"><h2>Improving on<br/>Empathy & Compassion</h2></div>
                    </div>
                    <div className="list-row">
                        <div className="list-column">
                            
                            <div className="border">
                                <ul>
                                    <li>
                                        <a href="https://988lifeline.org/" target="_blank" rel="noreferrer noopener">Suicide & Life Crisis Hotline</a>
                                    </li>
                                    <li>
                                        <a href="https://www.mayoclinic.org/healthy-lifestyle/adult-health/in-depth/anger-management/art-20045434" target="_blank" rel="noreferrer noopener">Anger / Temper Issues</a>
                                    </li>
                                    <li>
                                        <a href="https://www.talkspace.com/blog/healing-after-emotional-abuse/" target="_blank" rel="noreferrer noopener">Healing from Emotional Trauma</a>
                                    </li>
                                    <li>
                                        <a href="https://adaa.org/find-help/support/community-resources" target="_blank" rel="noreferrer noopener">Anxiety & Depression</a>
                                    </li>
                                    <li>
                                        <a href="https://www.nationaleatingdisorders.org/where-do-i-start-0" target="_blank" rel="noreferrer noopener">Eating Disorders</a>
                                    </li>
                                    <li>
                                        <a href="https://socialworklicensemap.com/social-work-resources/mental-health-resources-list/" target="_blank" rel="noreferrer noopener">60 Digital Links</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="list-column">
                            
                            <ul>
                                <li>
                                    <a href="https://cardsforhumanity.frog.co/" target="_blank" rel="noreferrer noopener">Cards for Humanity</a>
                                </li>
                                <li>
                                    <a href="https://mcc.gse.harvard.edu/resources-for-families/5-tips-cultivating-empathy" target="_blank" rel="noreferrer noopener">Nurture Empathy to Nurture Your Kids</a>
                                </li>
                                <li>
                                    <a href="https://mcc.gse.harvard.edu/resources-by-topic" target="_blank" rel="noreferrer noopener">Empathy via Many Relationships</a>
                                </li>
                                <li>
                                    <a href="https://acuityinsights.app/2020/07/empathy-2/" target="_blank" rel="noreferrer noopener">You Too, Can Learn Empathy</a>
                                </li>
                                <li>
                                    <a href="https://greatergood.berkeley.edu/article/item/six_habits_of_highly_compassionate_people" target="_blank" rel="noreferrer noopener">Compassionate Habits</a>
                                </li>
                                <li>
                                    <a href="https://caringpractitioner.co.uk/exploring-how-to-listen-respond-to-people-in-distress/" target="_blank" rel="noreferrer noopener">Handling Distressed People</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
          </section>
        </div>
  )
}

export default Resources