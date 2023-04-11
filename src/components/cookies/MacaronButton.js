import { useState } from 'react';

const MacaronButton = ({className, color}) => {
    //const [ active, setActive ] = useState(null);

    /*const handleClick = (i) => {
        //eve.target.classList.toggle('active');
        setActive(i)
    }*/

  return (
    <div className={className}>
        <div className="rectangle" style={{
            backgroundColor: color,
        }}></div>
        <div className="rectangle" style={{
            backgroundColor: color,
        }}></div>
    </div> 
  )
}

export default MacaronButton