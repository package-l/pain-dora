import { useMediaQuery } from 'react-responsive';
import '../../styles/About.scss';

const AboutDine = () => {
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

  const isSizingAspectRatio = useMediaQuery({
    query: '(max-aspect-ratio: 16/9)'
  })

  return (
    <div className="dine-wrapper">
        <div className="content">
            <div className="dine"><h2 style={{
            fontSize: `${isSizingAspectRatio ? '2.75vw' : '4.5vh'}`
            }}>Fine, Di(n)e w/ Me</h2></div>
            <div className="line2"><p style={{
            fontSize: `${isSizingAspectRatio ? '0.9vw' : '1.65vh'}`
            }}>is an intimate space that prioritizes
            </p></div>
            <div className="bullets"><p style={{
            fontSize: `${isSizingAspectRatio ? '0.9vw' : '1.65vh'}`
            }}><span className="bullet">intentional&nbsp;&nbsp;</span><br/>
            <span className="bullet">minimalistic</span><br/><span className="bullet">curational&nbsp;&nbsp;&nbsp;</span><br/>
            <span className="bullet">aesthetic&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br/><span className="bullet">visual&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br/>
            <span className="bullet">capitalistic&nbsp;&nbsp;</span><br/><span className="bullet">commercial&nbsp;</span>&nbsp; meaningful design ,
            </p></div>
            <div className="line3"><p style={{
            fontSize: `${isSizingAspectRatio ? '0.9vw' : '1.65vh'}`
            }}>fostering emotional and physical sustainability ,<br/>             
            </p></div>
            <div className="line3 second"><p style={{
            fontSize: `${isSizingAspectRatio ? '0.9vw' : '1.65vh'}`
            }}>through a plateful of playful and painful experiences .                
            </p></div>
            <div className="line4"><p style={{
            fontSize: `${isSizingAspectRatio ? '0.9vw' : '1.65vh'}`
            }}> - A .                
            </p></div>
            <div className="inquire"><p style={{
            fontSize: `${isSizingAspectRatio ? '0.9vw' : '1.65vh'}`
            }}>
                To inquire, please say hello at :
            </p></div>
            <div className="email"><p style={{
            fontSize: `${isSizingAspectRatio ? '0.9vw' : '1.65vh'}`
            }}>
                FineDinewme @ Gmail.com
            </p></div>
            <div className="insta"><p style={{
            fontSize: `${isSizingAspectRatio ? '0.9vw' : '1.65vh'}`
            }}>
                & @ ChandyApple (via Instagram)
            </p></div>
        </div>
    </div>
  )
}

export default AboutDine