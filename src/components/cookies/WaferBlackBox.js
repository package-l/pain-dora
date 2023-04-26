const WaferBlackBox = ({i, item}) => {
  const handleWhiteBox = (eve) => {
    eve.preventDefault();
    eve.currentTarget.style.opacity = "0";
  }

  return (
    <>
        <div className="black" id={`black-${i}`} onClick={handleWhiteBox}>
            <div className="black-dialogue">{item}</div>
        </div>
    </>
  )
}

export default WaferBlackBox