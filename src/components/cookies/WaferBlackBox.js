import { useRef } from 'react';

const WaferBlackBox = ({i, item}) => {


  return (
    <>
        <div className="black" id={`black-${i}`} >
            <div className="black-dialogue">{item}</div>
        </div>
    </>
  )
}

export default WaferBlackBox