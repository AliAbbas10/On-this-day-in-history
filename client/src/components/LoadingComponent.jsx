import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="loading-spinner"></div>
      <p>Please wait...</p>
      <p>Loading may take a minute</p>
    </div>
  );
};

export default LoadingScreen;