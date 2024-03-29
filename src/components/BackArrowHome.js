import { useLocation, Link, useNavigate } from 'react-router-dom';

const BackArrowHome = () => {
  const location = useLocation();
  const { section } = location.state;
  const navigate = useNavigate();

return (
  <>
    {(location.state !== "" && location.state !== undefined) ? 
      <Link className="backarrow" to={`/home#${section}`}></Link> :
      <div className="backarrow" onClick={() => navigate(-1)}></div>
  }
  </>
  )
}

export default BackArrowHome