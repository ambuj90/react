// "use client";

// import { useState, useRef, useEffect } from "react";
// import { useCurrentFrame, useVideoConfig, spring, interpolate } from 'remotion';
// import { Player } from '@remotion/player';

// // Laser Dots Animation Component
// const LaserDots = ({ isVisible }) => {
//   const frame = useCurrentFrame();
//   const { width, height, fps } = useVideoConfig();

//   if (!isVisible) return null;

//   const xPosition = interpolate(
//     frame,
//     [0, 50, 100, 150],
//     [384, width * 0.5, width * 0.8, 384],
//     { extrapolateRight: 'clamp' }
//   );

//   const yPosition = interpolate(
//     frame,
//     [0, 50, 100, 150],
//     [600, height * 0.2, height * 0.6, 600],
//     { extrapolateRight: 'clamp' }
//   );

//   const opacity = spring({ frame, fps, from: 0, to: 1, durationInFrames: 30 });

//   return (
//     <div
//       style={{
//         position: 'absolute',
//         top: yPosition,
//         left: xPosition,
//         opacity,
//         width: 15,
//         height: 15,
//         borderRadius: '50%',
//         backgroundColor: 'red',
//         boxShadow: '0 0 15px red',
//         transform: `scale(${opacity})`,
//       }}
//     />
//   );
// };

// // Zazu Chasing Animation Component
// const ZazuChase = ({ isVisible }) => {
//   const frame = useCurrentFrame();
//   const { width, height } = useVideoConfig();

//   if (!isVisible) return null;

//   // Slightly delay Zazu's position to give a chasing effect
//   const delayedFrame = Math.max(0, frame - 10); // Delay Zazu's frame by 10 frames

//   const xPosition = interpolate(
//     delayedFrame,
//     [0, 50, 100, 150],
//     [384, width * 0.5, width * 0.8, 384],
//     { extrapolateRight: 'clamp' }
//   );

//   const yPosition = interpolate(
//     delayedFrame,
//     [0, 50, 100, 150],
//     [600, height * 0.2, height * 0.6, 600],
//     { extrapolateRight: 'clamp' }
//   );

//   return (
//     <div
//       style={{
//         position: 'absolute',
//         top: yPosition,
//         left: xPosition,
//         transition: 'transform 0.3s',
//       }}
//     >
//       <img
//         src="./assets/zazu2.png"
//         alt="Zazu Chasing Laser"
//         style={{
//           width: 100,
//           height: 100,
//         }}
//       />
//     </div>
//   );
// };

// // Laser Show Animation Component (Main)
// const LaserShowAnimation = ({ isVisible }) => (
//   <div
//     style={{
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       position: 'relative',
//       width: '100%',
//       height: '100%',
//       backgroundColor: '#000',
//     }}
//   >
//     <LaserDots isVisible={isVisible} />
//     <ZazuChase isVisible={isVisible} />
//   </div>
// );

// // Main Page for Laser Show
// const LaserAnimationPage = () => {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [showChase, setShowChase] = useState(false);
//   const playerRef = useRef(null);

//   const startLaserShow = () => {
//     setIsPlaying(true);
//     setShowChase(true);

//     if (playerRef.current) {
//       playerRef.current.play();
//     }

//     setTimeout(() => {
//       setShowChase(false); // Hide both the laser and Zazu after 2 minutes
//       setIsPlaying(false);
//       if (playerRef.current) {
//         playerRef.current.pause();
//       }
//     }, 120000); // 2 minutes in milliseconds
//   };

//   return (
//     <div className="copynumb" style={{
//       position: 'fixed',
//       top: 0,
//       left: 0,
//       width: '100vw',
//       height: '100vh',
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       justifyContent: 'center',
//       overflow: 'hidden',
//       backgroundColor: '#000',
//     }}>
//       <button onClick={startLaserShow} style={{
//         position: 'absolute',
//         top: '20px',
//         zIndex: 10,
//         padding: '10px 20px',
//         fontSize: '16px',
//         cursor: 'pointer',
//       }}>
//         Start Laser Show
//       </button>
//       <Player
//         ref={playerRef}
//         component={() => <LaserShowAnimation isVisible={showChase} />}
//         durationInFrames={300}
//         compositionWidth={1920}
//         compositionHeight={1000}
//         fps={30}
//         autoPlay={false}
//         loop
//         style={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//         }}
//         isPlaying={isPlaying}
//       />
//     </div>
//   );
// };

// export default LaserAnimationPage;
    