import '../styles/NavMap.scss';

const NavMap = ({ open }) => {

  return (
    <div className="navmap" open={open} style={{transform:`${open ? 'translateX(0)' : 'translateX(300%)'}`}}>
        <div className="navmap-border">
            <div>
                <ul>
                    <li><a href="#roof">Roof/Lid</a></li>
                    <li><a href="#floor2">Floor 2</a></li>
                    <li><a href="#ground">_Ground_</a></li>
                    <li><a href="#cellar">||Cellar||</a></li>
                    <li><a href="#basement">Basement</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default NavMap