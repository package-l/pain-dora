import { useMediaQuery } from 'react-responsive';

const AboutLoui = () => {
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
    <div className="loui-wrapper">
        <div className="content">
            <div className="name"><h2 style={{
                fontSize: `${isSizingAspectRatio ? '2.75vw' : '4.5vh'}`
            }}>LoUIsA g.</h2></div>
            <div className="line2"><p style={{
                fontSize: `${isSizingAspectRatio ? '1.25vw' : '2vh'}`
            }}>Web Developer, Coder, Concept Designer, & Artist
            </p></div>
            <div className="info1"><p style={{
            fontSize: `${isSizingAspectRatio ? '0.9vw' : '1.65vh'}`
            }}>How well do you think you know yourself ?<br/>
            What exactly is self, & myself ?<br/>
            Oneself, Selfless, Self Aware, Selfish, S(h)el(l)f(ish), or even a S(h)elf ?<br/>                    
            </p></div>
            <div className="info2"><p style={{
            fontSize: `${isSizingAspectRatio ? '0.9vw' : '1.65vh'}`
            }}>From simple objects to colourful thoughts & colourless words,<br/>
            to why we like & dislike xyz, & to so forth –<br/>
            I teeter on the lines that are drawn between<br/>
            the metaphysical, physical, & self .<br/>                        
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
                @ loui__shan (via Instagram)
            </p></div>
        </div>
    </div>
  )
}

export default AboutLoui