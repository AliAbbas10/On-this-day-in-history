import React, { useRef, useEffect } from 'react';


const EyesComponent = () => {
  const eyeRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!eyeRef.current) return;

      const rect = eyeRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = event.clientX - centerX;
      const deltaY = event.clientY - centerY;
      const angle = Math.atan2(deltaY, deltaX);

      const eyeBall = eyeRef.current.querySelector('.eyeBall');
      eyeBall.style.transform = `translate(${Math.cos(angle) * 5}px, ${Math.sin(angle) * 5}px)`;
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="eyeContainer">
      <div className="eye" ref={eyeRef}>
        <div className="eyeBall"></div>
      </div>
    </div>
  );
};

export default EyesComponent;