import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import '../../styles/About.scss';

const AboutNav = () => {

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
    <div className="dropdown-container">
      <div className="dropdown">
          <button className="dropbtn" style={{
                fontSize: `${isSizingAspectRatio ? '1.25vw' : '2vh'}`
            }}>Kitchen Staff
              <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
              <Link to="/about">Fine, Di(n)e<br/>w/ Me</Link>
              <Link to="/about/andy">Head Chef<br/>Andy C.</Link>
              <Link to="/about/loui">Sous Chef<br/>Louisa G.</Link>
              <Link to="/about/beta">BETA<br/>Taste Testers</Link>
          </div>
      </div>
    </div>
  )
}

export default AboutNav