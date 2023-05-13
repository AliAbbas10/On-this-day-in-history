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

      const ovalWidth = rect.width / 2;
      const ovalHeight = rect.height / 2;

      const eyeBall = eyeRef.current.querySelector('.eyeBall');
      const eyeBallRadiusX = eyeBall.clientWidth / 2;
      const eyeBallRadiusY = eyeBall.clientHeight / 2;

      const aspectRatio = ovalWidth / ovalHeight;

      const x = Math.cos(angle) * (ovalWidth - eyeBallRadiusX) * aspectRatio;
      const y = Math.sin(angle) * (ovalHeight - eyeBallRadiusY);

      const normalizedX = x / (ovalWidth - eyeBallRadiusX) / aspectRatio;
      const normalizedY = y / (ovalHeight - eyeBallRadiusY);
      const normalizedDistance = Math.sqrt(normalizedX * normalizedX + normalizedY * normalizedY);

      if (normalizedDistance < 1) {
        eyeBall.style.transform = `translate(${deltaX - eyeBallRadiusX}px, ${deltaY - eyeBallRadiusY}px)`;
      } else {
        eyeBall.style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="eye" ref={eyeRef}>
      <div className="eyeBall"></div>
    </div>
  );
};

export default EyesComponent;