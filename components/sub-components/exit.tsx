// ExitScreen.tsx
import React from 'react';

const ExitScreen: React.FC = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        zIndex: 9999, // Use a high z-index to ensure it covers everything
      }}
    />
  );
};

export default ExitScreen;
