//import wrapperText from '../img/wrappertext.png';
//most likely for accessibility should not be img
import wrapperGridBorder from '../img/wrapper+border.png';
import '../styles/Wrapper.scss';

const Wrapper = () => {
  return (
    <div className="wrapper">
        <div className="wrapper-modal">
            <div className="wrapper-text">
                <h2 className="titlea">Pain/dora's Box</h2>
                <h2 className="titleb">of Cookie Monsters ,</h2>
                <p className="line2">"Home", unfortunately is where abuse often resides.</p>
                <p className="line3">Disguised as a warm, safe, & loving space, everday is day, soft cookie kids are forced to face
                    emotional damage verbally and/or physically. 
                </p>
                <p className="line4">
                    In this case, <br/> I invite you to question & listen, <br/> to what each cookie (character) in this box
                    ass.ortment has to say & feel. <br/> <br/>Explore the house, <br/>through the kitchen, by c/licking around. <br/><br/>
                    Help find the Soft Cookie Kid that's gone missing.
                </p>
                <h3 className="titlec">a <br/> Cookie <br/>Murder Mystery :</h3>
            </div>
            <img className="wrapperImage" src={wrapperGridBorder} alt="background"></img>
        </div>
    </div>
  )
}

export default Wrapper