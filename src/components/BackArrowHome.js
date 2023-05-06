import { useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';

const BackArrow = () => {
    const location = useLocation()
    const [section, setSection] = useState("");
    if (location.state) {
      setSection(location.state);
      console.log(section);
    }
    const navigate = useNavigate();

  return (
    <>
      {(section !== "" || section !== null) ? 
        <Link className="backarrow" to={`/home#${section}`}></Link> :
        <div className="backarrow" onClick={() => navigate(-1)}></div>
    }
    </>
    )
}

export default BackArrow