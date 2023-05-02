import { useMediaQuery } from 'react-responsive';

const AboutAndy = () => {

  //Media Query
  const isBigScreen = useMediaQuery({ 
    query: '(min-width: 850px)' 
  })
  const isAspectRatio = useMediaQuery({
    query: '(min-aspect-ratio: 8/3)'
  })
  const isTallScreen = useMediaQuery({
    query: '(min-height: 450px)'
  })

  const isSizingAspectRatio = useMediaQuery({
    query: '(max-aspect-ratio: 16/9)'
  })

  return (
    <div className="andy-wrapper">
        <div className="content">
            <div className="name"><h2 style={{
                fontSize: `${isSizingAspectRatio ? '2.75vw' : '4.5vh'}`
            }}>AnDY c.</h2></div>
            <div className="line2"><p style={{
                fontSize: `${isSizingAspectRatio ? '1.25vw' : '2vh'}`
            }}>Creative Director, Concept Designer, Playful Expressionist,<br/>
            Experimental Dessert Artist, or whatever you'd like to call me .
            </p></div>
            <div className="info1"><p style={{
            fontSize: `${isSizingAspectRatio ? '0.9vw' : '1.65vh'}`
            }}>I am constantly expanding the idea of what desserts can mean, can be,<br/> 
            & can represent through integrating design, philosophy, emotionality,<br/> 
            storytelling, & all sorts –            
            </p></div>
            <div className="info2"><p style={{
            fontSize: `${isSizingAspectRatio ? '0.9vw' : '1.65vh'}`
            }}>to create projects that revolve around community centered themes,<br/> 
            poetically & poignantly pushing consumers to improve our<br/>
            mental - emotional - & physical sustainability .            
            </p></div>
            <div className="image"></div>
            <div className="inquire"><p style={{
            fontSize: `${isSizingAspectRatio ? '0.9vw' : '1.65vh'}`
            }}>
                To inquire, please say hello at :
            </p></div>
            <div className="email"><p style={{
            fontSize: `${isSizingAspectRatio ? '0.9vw' : '1.65vh'}`
            }}>
                FineDinewme @ Gmail.com
            </p></div>
            <div className="insta"><p style={{
            fontSize: `${isSizingAspectRatio ? '0.9vw' : '1.65vh'}`
            }}>
                & @ ChandyApple (via Instagram)
            </p></div>
        </div>
    </div>
  )
}

export default AboutAndy