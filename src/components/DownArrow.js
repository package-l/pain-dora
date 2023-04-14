import '../styles/DownArrow.scss';

const DownArrow = ({ nextFloor }) => {


  return (
    <div className={`down-arrow`}>
        <div className="arrow-text">{nextFloor}</div>
        <svg className="arrows" viewBox="0 0 70 70"> 
            <path className="a1" d="M0 0 L30 32 L60 0"></path>
            <path className="a2" d="M0 30 L30 62 L60 30"></path>
            <path className="a3" d="M0 60 L30 92 L60 60"></path>
        </svg>
    </div>
  )
}

export default DownArrow