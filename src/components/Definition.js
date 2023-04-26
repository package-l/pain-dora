import { useSplash } from './SplashProvider';
import { useEffect } from 'react';
import '../styles/Definition.scss';


const sleep = (ms = 1000) => new Promise((resolve) => setTimeout(resolve, ms));

const Definition = () => {
    const { isDefinitionShowing,  hideDefinition, showSpotlight } = useSplash();

    useEffect(() => {
        (async () => {
          // Simulating some background work
          await sleep(12000);//10500 12000
          // As soon as the background work finishes, hide this page and display the spotlight page
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
        ): null }
        {/*isSpotlightShowing ? (
          <div>Call spotlight here?</div>
        ): <div>Call spotlight not here?</div>*/}
    </>
  )
}

export default Definition