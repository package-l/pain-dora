import '../styles/NavMap.scss';

const NavMap = ({ open, setOpen }) => {

  const toggleOpen = () => {
    setOpen(!open);
    console.log("toggle" + open);
  }

  return (
    <div className="navmap" open={open} style={{transform:`${open ? 'translateX(0)' : 'translateX(300%)'}`}}>
        <div className="navmap-border">
          <div className="close" onClick={toggleOpen}>x</div>
          <ul>
              <a href="#roof"><li><p className="roof"><span className="roof-angle">Roo</span>f<span className="lid-angle">/Lid</span></p></li></a>
              <a href="#floor2"><li><p>Floor 2</p></li></a>
              <a href="#ground"><li><p>_Ground_</p></li></a>
              <a href="#cellar"><li><p>||Cellar||</p></li></a>
              <a href="#basement"><li><p>Basement</p></li></a>
          </ul>
        </div>
    </div>
  )
}

export default NavMap