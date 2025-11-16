// src/components/VectorBackground.jsx
import React from 'react';
import VectorImg from '../assets/vector (1).png';

const VectorBackground = () => {
  return (
    <div
      className="vector-bg"
      style={{
        position: 'absolute',
        top: -100,
        left: -100,
        width: '100%',
        height: '100%',
        backgroundImage: `url("${VectorImg}")`,
        backgroundRepeat: 'repeat-y',    // repeat vertically
        backgroundSize: 'cover',        // adjust to your liking
        backgroundPosition: 'center top',
        opacity: 1,                  // subtle overlay; adjust opacity as needed
        zIndex: 11,                     // behind all content
        pointerEvents: 'none'           // avoid interfering with clicks
      }}
    />
  );
};

export default VectorBackground;
