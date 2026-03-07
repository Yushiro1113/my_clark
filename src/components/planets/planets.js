import { useState } from 'react';
import './Planets.css';
import planets from './data/data';

export default function Planets() {
  const [activePlanet, setActivePlanet] = useState(0);

  const tabButtonHandler = (planetNum) => {
    setActivePlanet(planetNum);
  };

  const tabButtons = () => {
    return (
      <div className='tabButtons'>
        <button onClick={() => tabButtonHandler(0)} type='button'>Planet 1</button>
        <button onClick={() => tabButtonHandler(1)} type='button'>Planet 2</button>
        <button onClick={() => tabButtonHandler(2)} type='button'>Planet 3</button>
      </div>
    );
  };

  const leftImages = () => {
    return (
      <div>
        {activePlanet === 0 && <img alt='mercury' className='planet' src={planets.mercury} />}
        {activePlanet === 1 && <img alt='venus' className='planet' src={planets.venus} />}
        {activePlanet === 2 && <img alt='earth' className='planet' src={planets.earth} />}
      </div>
    );
  };

  const rightDescriptions = () => {
    return (
      <div className='descriptions'>
        {activePlanet === 0 && (
          <>
            <div className='description_title'>Mercury</div>
            <div className='description_list'>
              <ul>
                <li>Closest planet to the Sun</li>
                <li>Smallest planet in our solar system</li>
                <li>Has a heavily cratered surface due to its lack of an atmosphere to protect it from impacts</li>
              </ul>
            </div>
          </>
        )}

        {activePlanet === 1 && (
          <>
            <div className='description_title'>Venus</div>
            <div className='description_list'>
              <ul>
                <li>Second planet from the Sun</li>
                <li>Similar in size and composition to Earth</li>
                <li>Has a thick, toxic atmosphere that traps heat and creates a runaway greenhouse effect, making it the hottest planet in our solar system</li>
              </ul>
            </div>
          </>
        )}

        {activePlanet === 2 && (
          <>
            <div className='description_title'>Earth</div>
            <div className='description_list'>
              <ul>
                <li>Third planet from the Sun</li>
                <li>Only known planet with an atmosphere that can support life</li>
                <li>Has a dynamic surface with continents, oceans, and active geological processes like volcanoes and earthquakes</li>
              </ul>
            </div>
          </>
        )}
      </div>
    );
  };

  return (
    <div className='planets_section'>
      {tabButtons()}
      <div className='main'>
        {leftImages()}
        {rightDescriptions()}
      </div>
    </div>
  );
};