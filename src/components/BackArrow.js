import { useNavigate } from 'react-router-dom';

const BackArrow = () => {
    const navigate = useNavigate();

  return (
    <>
        <div className="backarrow" onClick={() => navigate(-1)}></div>
    </>
    )
}

export default BackArrow