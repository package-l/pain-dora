import '../styles/NavMap.scss';

const NavMap = ({ open }) => {

  return (
    <div className="navmap" open={open} style={{transform:`${open ? 'translateX(0)' : 'translateX(300%)'}`}}>
        <div className="navmap-border">
            <div>
                <ul>
                    <a href="#roof"><li>Roof/Lid</li></a>
                    <a href="#floor2"><li>Floor 2</li></a>
                    <a href="#ground"><li>_Ground_</li></a>
                    <a href="#cellar"><li>||Cellar||</li></a>
                    <a href="#basement"><li>Basement</li></a>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default NavMap