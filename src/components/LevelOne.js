import '../styles/level-one.css';
import image from '../assets/images/2687204.jpg';
import React from 'react';
import WithMagnifier from './WithMagnifier';
import BackButton from './BackButton';
import Timer from './Timer';
import Magnifier from './Magnifier';

const LevelOne = (props) => {
  const {
    handleMouseEnter,
    handleMouseMove,
    x,
    y,
    imgWidth,
    imgHeight,
    showMagnifier,
    handleMouseLeave,
  } = props;

  return (
    <div className="main-container">
      <div className="image-container">
        <BackButton />
        <Timer />
        <img
          alt="where is waldo level one"
          src={image}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        {showMagnifier && (
          <Magnifier
            x={x}
            y={y}
            image={image}
            imgWidth={imgWidth}
            imgHeight={imgHeight}
          />
        )}
      </div>
    </div>
  );
};

export default WithMagnifier(LevelOne);
