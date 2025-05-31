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


// import React from 'react';
// import AboutImage from '../images/About.png';
// import desktopBackground from '../images/desktop/bricks.png'
// import mobileBackground from '../images/mobile/bricksMobile.png'

// const About = () => {
//   return (
//     <div
//       style={{
//         position: 'relative',
//         width: '100vw',
//         height: '100vh',
//         overflow: 'hidden',
//         backgroundImage: `url(${props => props.$isMobile ? mobileBackground : desktopBackground})`,
//         backgroundRepeat: "repeat-y",
//         backgroundPosition: "right bottom",
//       }}
//     >
//       <img
//         src={AboutImage}
//         alt="About"
//         style={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '75%',
//           height: '100%',
//           objectFit: 'cover',
//           zIndex: 10,
//         }}
//       />
//     </div>
//   );
// };

// export default About;
