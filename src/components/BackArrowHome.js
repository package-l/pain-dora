import { useLocation, Link } from 'react-router-dom';

const BackArrow = () => {
    const location = useLocation()
    const { section } = location.state

  return (
    <>
        <Link className="backarrow" to={`/home#${section}`}></Link>
    </>
    )
}

export default BackArrow