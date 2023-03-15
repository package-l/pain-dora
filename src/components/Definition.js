import { useSplash } from './SplashProvider';
import { useEffect } from 'react';
import '../styles/Definition.scss';

const sleep = (ms = 1000) => new Promise((resolve) => setTimeout(resolve, ms));

const Definition = () => {
    const { isDefinitionShowing,  hideDefinition, showSpotlight } = useSplash();

    useEffect(() => {
        (async () => {
          // Simulating some background work
          await sleep(10500);//10500
          // As soon as the backgorund work finishes, hide the splash and display the home screen
          hideDefinition();
          showSpotlight();
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

  return (
    <>
        {isDefinitionShowing ? (
            <div className="definition-container">

                  <div className="line1 cookiedefinition">"koekje"</div>
                  <div className="line2 cookiedefinition">derived from the DUTCH language.</div>
                  <div className="line3">
                    <div id="coo" className="cookiedefinition">coo</div>
                    <span className="dot"></span>
                    <div id="kie" className="cookiedefinition">kie</div>
                  </div>
                  <div className="line4a cookiedefinition">=</div>
                  <div className="line4b cookiedefinition">"little _ cake"</div>
            </div>
        ): null}
    </>
  )
}

export default Definition