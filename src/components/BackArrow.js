import { useNavigate } from 'react-router-dom';

const BackArrow = () => {
    const navigate = useNavigate();

  return (
    <>
        <div className="backarrow" onClick={() => navigate(-1)}></div>
        {/*<NavLink to="/home"><div className="backarrow"></div></NavLink>*/}
    </>
    )
}

export default BackArrow