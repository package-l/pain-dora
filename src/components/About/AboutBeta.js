import { useMediaQuery } from 'react-responsive';

const AboutBeta = () => {

    const isSizingAspectRatio = useMediaQuery({
        query: '(max-aspect-ratio: 16/9)'
      })

  return (
    <div className="beta-wrapper">
        <div className="content">
            <div className="name"><h2 style={{
                fontSize: `${isSizingAspectRatio ? '2vw' : '3.75vh'}`
            }}>TAsTE TEsTErs :</h2></div>
            <div className="line2"><p style={{
                fontSize: `${isSizingAspectRatio ? '1.25vw' : '2vh'}`
            }}>Friends, Loves, Artists, Designers, & Truly Great Genuine People
            </p></div>
            <div className="info1"><p style={{
            fontSize: `${isSizingAspectRatio ? '1.25vw' : '1.9vh'}`
            }}>Calvin H.,  Celeste W.,  Eileen L.,  Hadley S.,<br/>
            Haley P.,  July L., Olivia V. & Ya Pei C.                             
            </p></div>
            <div className="grey"></div>
            <div className="white"></div>
            <div className="pink"></div>
            <div className="green"></div>
            <div className="yellow"></div>
            <div className="brown"></div>
            <div className="black"></div>
        </div>
    </div>
  )
}

export default AboutBeta