import React from 'react';
import AboutImage from '../images/About.png';

const About = () => {
  return (
    <div style={{ width: '100%', overflow: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: '20%'}}>
      <img
        src={AboutImage}
        alt="About"
        style={{
          width: '50%',
          height: 'auto',
          objectFit: 'cover',
          display: 'block',
        }}
      />
    </div>
  );
};

export default About;