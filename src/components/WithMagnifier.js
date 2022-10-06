import React, { useState } from 'react';

const WithMagnifier = (OriginalComponent) => {
  const NewComponent = () => {
    const [[x, y], setXY] = useState([0, 0]);
    const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
    const [showMagnifier, setShowMagnifier] = useState(false);
    const [[marX, marY], setMarker] = useState([0, 0]);

    const handleMouseMove = (e) => {
      const elem = e.currentTarget;
      const { top, left } = elem.getBoundingClientRect();

      const x = e.pageX - left - window.pageXOffset;
      const y = e.pageY - top - window.pageYOffset;
      setXY([x, y]);
    };

    const handleMouseLeave = () => {
      setShowMagnifier(false);
    };

    const handleMouseEnter = (e) => {
      const elem = e.currentTarget;
      const { width, height } = elem.getBoundingClientRect();
      setSize([width, height]);
      setShowMagnifier(true);
    };

    const handleClick = (e) => {
      const imgRect = e.currentTarget.getBoundingClientRect();
      const { clientX, clientY } = e;

      const posXpct = ((clientX - imgRect.x) * 100) / imgRect.width;
      const posYpct = ((clientY - imgRect.y) * 100) / imgRect.height;

      setMarker([posXpct, posYpct]);
    };

    return (
      <OriginalComponent
        handleMouseEnter={handleMouseEnter}
        handleMouseMove={handleMouseMove}
        x={x}
        y={y}
        imgHeight={imgHeight}
        imgWidth={imgWidth}
        showMagnifier={showMagnifier}
        handleMouseLeave={handleMouseLeave}
        handleClick={handleClick}
        marX={marX}
        marY={marY}
      />
    );
  };
  return NewComponent;
};

export default WithMagnifier;
