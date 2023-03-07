import '../styles/Door.scss';
import { useSplash } from '../SplashProvider';

const Door = () => {
    const { isDoorShowing, hideDoor } = useSplash();

    function handleDoorKnobClick() {
        hideDoor();
    }

  return (
    <>
        {!isDoorShowing ? null :
            <>
                <div className="door-container">
                    <div className="door">
                        <div className="door-card-inner">
                            <div className="door-cover">
                                <div className="doorknob" onClick={handleDoorKnobClick}></div>
                            </div>
                            <div className="door-card-back">
                                <div>This is the back</div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        }
    </>
  )
}

export default Door