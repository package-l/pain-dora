import '../styles/RejectCookies.scss';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const RejectCookies = () => {
  const navigate = useNavigate();

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

  return (
    <>
     {!isBigScreen || isAspectRatio || !isTallScreen ? 
        <div className="page-warning" style={{height: '100vh', color: 'white', fontFamily: 'Chantal', backgroundColor: 'black'}}>
          <div className="page-warning-text" style={{paddingTop: '30vh', top: '50%', transform: 'translateY(50%)'}}>Due to the interactive nature of the website, please use at a larger screen size/aspect ratio.
          <br></br><br></br>Thank you!</div>
        </div>
        : 
        <div className="reject-container">
          <div className="backarrow" onClick={() => navigate(-1)}></div>
          <div className="line1a">O<span>H</span></div>
            <div className="line1b"><span>N</span>O</div>
            <div className="line2">
                <svg viewBox="0 20 600 250" height="50%">
                    <path id="curve" fill="transparent" transform="translate(50,-50)" d="M98,248 C171,118 332,115 407,245 Z" />
                    <text width="100">
                        <textPath startOffset="28%" textAnchor="middle" xlinkHref="#curve">. . . unfortunately, no to cookies, means no cookie story for you . . .</textPath>
                    </text>
                </svg>
            </div>
        </div>
     }
    </>
  )
}

export default RejectCookies