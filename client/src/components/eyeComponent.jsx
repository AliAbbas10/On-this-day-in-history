import React, { useEffect } from 'react';

const EyesComponent = () => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      const eyes = document.getElementsByClassName('eye');
      const x = (event.clientX * 100) / window.innerWidth + '%';
      const y = (event.clientY * 100) / window.innerHeight + '%';

      for (let i = 0; i < eyes.length; i++) {
        eyes[i].style.left = x;
        eyes[i].style.top = y;
        eyes[i].style.transform = `translate(-${x}, -${y})`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="eye">
      <img
        src={`${process.env.PUBLIC_URL}/eye.png`}
        alt="Left Eye"
        className="leftEye"
      />
      <img
        src={`${process.env.PUBLIC_URL}/eye.png`}
        alt="Right Eye"
        className="rightEye"
      />
    </div>
  );
};

export default EyesComponent;