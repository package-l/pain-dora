import '../../styles/Brownie.scss';
import WaterWave from 'react-water-wave';
import Cookies from 'js-cookie';
import BackArrow from '../BackArrow';

const Brownie = (props) => {
  Cookies.set('brownie', true);

  return (
    <div className="brownie-interaction-container">
      <div className="instructionBox">
        <BackArrow />
        <div className="ripple-container">
          <WaterWave className="leftBox-img" imageUrl={props.data.img} 
              style={{ width: '88%', height: '88%', backgroundSize: 'contain'}}
              resolution={512}
              dropRadius={10}
              perturbance={0.04}
              interactive={true}
          >{()=> {}}</WaterWave>
        </div>
        <div className="test" style={{
          backgroundImage: `url(${props.data.customAssets.instructionsBox})`
        }}><p className="dialogue">{`Move the Cursor\n
        around specific areas\n
        & find out what happens !`}</p></div>
      </div>
     <div className="right-section" style={{
          backgroundImage: `url(${props.data.customAssets.interactionBox})`
      }}>
        <div className="rightBox-text">
      
          <WaterWave className="dialogue1" imageUrl={props.data.customAssets.dialogue1}
              style={{ width: '20%', height: '50%', maxHeight: '100%', overflow: 'auto', backgroundSize: 'contain', imageRendering: '-webkit-optimize-contrast'}}
              resolution={1500}
              dropRadius={8}
              perturbance={0.03}
              interactive={true}
              crossOrigin={props.data.customAssets.dialogue1}
          >{() => {}}</WaterWave>
          <WaterWave className="dialogue2" imageUrl={props.data.customAssets.dialogue2}
              style={{ width: '20%', height: '60%', maxHeight: '100%', overflow: 'auto', backgroundSize: '100%', imageRendering: '-webkit-optimize-contrast'}}
              resolution={512}
              dropRadius={8}
              perturbance={0.4}
              interactive={true}
          >{() => {}}</WaterWave>
          <WaterWave className="dialogue3" imageUrl={props.data.customAssets.dialogue3}
              style={{ width: '20%', height: '50%', maxHeight: '100%', overflow: 'auto', backgroundSize: '100%', imageRendering: '-webkit-optimize-contrast'}}
              resolution={512}
              dropRadius={8}
              perturbance={0.03}
              interactive={true}
          >{() => {}}</WaterWave>
          <WaterWave className="dialogue4" imageUrl={props.data.customAssets.dialogue4}
              style={{ width: '20%', height: '60%', maxHeight: '100%', overflow: 'auto', backgroundSize: '100%', imageRendering: '-webkit-optimize-contrast'}}
              resolution={512}
              dropRadius={8}
              perturbance={0.03}
              interactive={true}
          >{() => {}}</WaterWave>
          <WaterWave className="dialogue5" imageUrl={props.data.customAssets.dialogue5}
              style={{ width: '82%', height: '30%', backgroundSize: 'contain'}}
              resolution={512}
              dropRadius={8}
              perturbance={0.03}
              interactive={true}
          >{() => {}}</WaterWave>
        </div>
        {/*<div className="dialogue">{`oh . . . Sorry, i didn't notice you were investigating about 
        the Soft cookie missing case, i was lost in my own pity party of trainwreck thoughts. I'll 
        probably bore you with details that most likely wont be beneficial to your efforts 
        in trying to solve the cookie murder mystery . . . 

        cry cry, crying, i don't know why soft cookies kept trying, to uplift my life when i cry . 
        Couldn't they tell that i didn't want a tiramisu, that i just wanted to be brown and blue, 
        because being down is what i am used to .   

        ugh, of course, i accept all the faults, and i suck. but why romanticize them with the idea 
        of wabi sabi when i'm constantly soggy ? who would want me ? nobody would want me. there is 
        no way there is somebody that'll pick me, because i'm mopey and 782 calories .

        Drip drop, tear drops, sorry it's just me w/ my leaky faucet eyes forever dampening the mood 
        . . . sigh . . . Sighs . . .  and i can't stop . . . SIGHS again*. . . boo hoo, it's really 
        too much to do whatever it is to improve. what is the point of fixing things when we all turn 
        into poo poo doo doo  . . . 

        my siblings Pessimistic Peppermint Patty, Pat, & Patrick, said that Soft Cookie's hope and positivity
         is a trick that relies on ignorant bliss, as they are not a realist, like us, who go along with 
         the problems . I don't see the point of constructively criticizing or bettering anything, when 
         we all turn to brown mush at the end of the day . 

        i am tired of talking about soft cookies, it's not like they have it that bad, I have it way worse. 
`}
        </div>*/}
     </div>
    </div>

  )
}

export default Brownie