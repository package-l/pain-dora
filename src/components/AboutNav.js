import { Link } from 'react-router-dom';

const AboutNav = () => {
  return (
    <div className="dropdown">
        <button class="dropbtn">Dropdown
            <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
            <Link to="/about">Link 1</Link>
            <Link to="/about/andy">Link 2</Link>
            <Link to="/about/loui">Link 3</Link>
            <Link to="/about/beta">Link 3</Link>
        </div>
    </div>
  )
}

export default AboutNav