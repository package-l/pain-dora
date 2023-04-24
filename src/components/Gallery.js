import { useState } from 'react';
import HamburgerButton from './HamburgerButton';
import NavMenu from './NavMenu';
import Screenshot from '../img/temp/gallery_screenshot.png';
import { galleryData } from './galleryData';
import Cookies from 'js-cookie';

import { useNavigate } from 'react-router-dom';
import '../styles/Gallery.scss';

const Gallery = () => {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);
  console.log(galleryData[0]);

  return (
    <div className="gallery-container">
      <div className="backarrow" onClick={() => navigate(-1)}></div>
      <div className="hamburger-container">
        <HamburgerButton name="menu" open={openMenu} setOpen={setOpenMenu}/>
        <NavMenu open={openMenu} setOpen={setOpenMenu}/>
      </div>
      <div className="white-background">
        <div className="border1">
          <div className="border2">
            <h1 className="title">Flavour Profiles</h1>
            <div className="grid-container">
              <div className="chess">
                <div className="image">
                  {Cookies.get("chess") ? 
                    <img src={galleryData[0].characters.chess.visited} alt="Queen Knowah"></img> :
                    <img src={galleryData[0].characters.chess.locked} alt="Locked Queen Knowah"></img>
                  }
                </div>
                <div className="name">{galleryData[0].characters.chess.name}</div>
                <div className="description">{galleryData[0].characters.chess.description}</div>
              </div>
              <div className="wafer">
                <div className="image">
                  {Cookies.get("wafer") ? 
                    <img src={galleryData[0].characters.wafer.visited} alt="Flaky Wafer Jake"></img> :
                    <img src={galleryData[0].characters.wafer.locked} alt="Locked Flaky Wafer Jake"></img>
                  }
                </div>
                <div className="name">{galleryData[0].characters.wafer.name}</div>
                <div className="description">{galleryData[0].characters.wafer.description}</div>
              </div>
              <div className="financier">
                <div className="image">
                  {Cookies.get("financier") ? 
                    <img src={galleryData[0].characters.financier.visited} alt="Monsieur Financier"></img> :
                    <img src={galleryData[0].characters.financier.locked} alt="Locked Monsieur Financier"></img>
                  }
                </div>
                <div className="name">{galleryData[0].characters.financier.name}</div>
                <div className="description">{galleryData[0].characters.financier.description}</div>
              </div>
              <div className="macaron">
                <div className="image">
                  {Cookies.get("macaron") ? 
                    <img src={galleryData[0].characters.macaron.visited} alt="Madame Macaron"></img> :
                    <img src={galleryData[0].characters.macaron.locked} alt="Locked Madame Macaron"></img>
                  }
                </div>
                <div className="name">{galleryData[0].characters.macaron.name}</div>
                <div className="description">{galleryData[0].characters.macaron.description}</div>
              </div>
              <div className="soft">
                <div className="image">
                  {Cookies.get("softcookie") ? 
                    <img src={galleryData[0].characters.soft.visited} alt="Soft Cookie"></img> :
                    <img src={galleryData[0].characters.soft.locked} alt="Locked Soft Cookie"></img>
                  }
                </div>
                <div className="name">{galleryData[0].characters.soft.name}</div>
                <div className="description">{galleryData[0].characters.soft.description}</div>
              </div>
              <div className="linzer">
                <div className="image">
                  {Cookies.get("linzer") ? 
                    <img src={galleryData[0].characters.linzer.visited} alt="Lying Linzer Lindsay"></img> :
                    <img src={galleryData[0].characters.linzer.locked} alt="Locked Lying Linzer Lindsay"></img>
                  }
                </div>
                <div className="name">{galleryData[0].characters.linzer.name}</div>
                <div className="description">{galleryData[0].characters.linzer.description}</div>
              </div>
              <div className="brownie">
                <div className="image">
                  {Cookies.get("brownie") ? 
                    <img src={galleryData[0].characters.brownie.visited} alt="Little Debbie Downer Brownie"></img> :
                    <img src={galleryData[0].characters.brownie.locked} alt="Locked Little Debbie Downer Brownie"></img>
                  }
                </div>
                <div className="name">{galleryData[0].characters.brownie.name}</div>
                <div className="description">{galleryData[0].characters.brownie.description}</div>
              </div>
              <div className="madeleine">
                <div className="image">
                  {Cookies.get("madeleine") ? 
                    <img src={galleryData[0].characters.madeleine.visited} alt="Mad Mad Babu Madeleine"></img> :
                    <img src={galleryData[0].characters.madeleine.locked} alt="Locked Mad Mad Baby Madeleine"></img>
                  }
                </div>
                <div className="name">{galleryData[0].characters.madeleine.name}</div>
                <div className="description">{galleryData[0].characters.madeleine.description}</div>
              </div>
              <div className="fortune">
                <div className="image">
                  {Cookies.get("fortune") ? 
                    <img src={galleryData[0].characters.fortune.visited} alt="Mis-Fortune"></img> :
                    <img src={galleryData[0].characters.fortune.locked} alt="Locked Mis-Fortune"></img>
                  }
                </div>
                <div className="name">{galleryData[0].characters.fortune.name}</div>
                <div className="description">{galleryData[0].characters.fortune.description}</div>
              </div>
              <div className="mystery1">
                <div className="image">
                  <div className="temp-image"></div>
                </div>
                <div className="name">? ? ?</div>
                <div className="description"></div>
              </div>
              <div className="mystery2">
                <div className="image"></div>
                <div className="name">? ? ?</div>
                <div className="description"></div>
              </div>
              <div className="mystery3">
                <div className="image"></div>
                <div className="name">? ? ?</div>
                <div className="description"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery