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
        <button onClick={() => tabButtonHandler(0)} type='button'>Stussy</button>
        <button onClick={() => tabButtonHandler(1)} type='button'>Gallery dept</button>
        <button onClick={() => tabButtonHandler(2)} type='button'>Chrome Hearts</button>
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
            <div className='description_title'>Stussy</div>
            <div className='description_list'>
              <ul>
                <li>Stüssy is an American streetwear brand founded in the early 1980s in Laguna</li>
                <li>Beach, California, by Shawn Stussy, originally emerging from the surf culture</li>
                <li>before expanding into skate and hip-hop scenes. The brand's identity centers</li>
                <li>on Shawn's handwritten signature logo, which he first scrawled on surfboards in</li>
                <li>1979 and later screen-printed on T-shirts and caps to promote his boards.</li>
              </ul>
            </div>
          </>
        )}

        {activePlanet === 1 && (
          <>
            <div className='description_title'>Gallery Dept.</div>
            <div className='description_list'>
              <ul>
                <li>Gallery Dept. is a unisex clothing brand based in Los Angeles, California,</li>
                <li>founded in 2017 (with some sources citing 2016) by artist and designer Josué</li>
                <li>Thomas.  The brand is known for its avant-garde approach that blends</li>
                <li>streetwear with vintage Americana, transforming old garments into unique pieces</li>
                <li>through hand-painting, distressing, and re-purposing techniques.</li>
              </ul>
            </div>
          </>
        )}

        {activePlanet === 2 && (
          <>
            <div className='description_title'>Chrome Hearts</div>
            <div className='description_list'>
              <ul>
                <li>Chrome Hearts is a luxury American lifestyle brand founded in 1988 in</li>
                <li>Hollywood, Los Angeles, by Richard Stark, John Bowman, and master</li>
                <li>silversmith Leonard Kamhout.  Originally established to create high-quality</li>
                <li>leather jackets for bikers, the brand is now renowned for its handcrafted sterling</li>
                <li>silver jewelry, leather goods, eyewear, furniture, and clothing, blending Gothic,</li>
                <li>punk, and biker aesthetics.</li>
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