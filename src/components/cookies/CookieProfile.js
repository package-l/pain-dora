import '../../styles/Chess.scss';

const CookieProfile = (props) => {
  return (
    <div className="cookie-container">
    <div className="character-card">
      <img src={props.img} alt="Character Profile Card"></img>
    </div>
    <div>{props.name}</div>
  </div>
  )
}

export default CookieProfile