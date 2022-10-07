import '../styles/level-one.css';
import image from '../assets/images/2687208.jpg';
import React, { useEffect, useState } from 'react';
import WithMagnifier from './WithMagnifier';
import BackButton from './BackButton';
import Timer from './Timer';
import Magnifier from './Magnifier';
import Marker from './Marker';
import GameOver from './GameOver';

const LevelTwo = (props) => {
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

  const [[marX, marY], setMarker] = useState([0, 0]);
  const [isWaldoFound, setIsWaldoFound] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [modalShow, setModalShow] = useState(false);

  const handleCloseModal = () => setModalShow(false);
  const handleShowModal = () => setModalShow(true);

  const handleClick = (e) => {
    const imgRect = e.currentTarget.getBoundingClientRect();
    const { clientX, clientY } = e;

    const posXpct = ((clientX - imgRect.x) * 100) / imgRect.width;
    const posYpct = ((clientY - imgRect.y) * 100) / imgRect.height;

    setMarker([posXpct, posYpct]);
  };

  useEffect(() => {
    const waldoPosition = [75.768823, 76.286825];

    if (
      (marY === waldoPosition[0] || (marY >= 74.48219 && marY <= 77.025085)) &&
      (marX === waldoPosition[1] || (marX <= 76.829268 && marY >= 74.549311))
    ) {
      setIsWaldoFound(true);
      handleShowModal();
    }

    return () => {
      setIsWaldoFound(false);
    };
  }, [marX, marY]);

  return (
    <div className="main-container">
      <div className="image-container">
        <BackButton />
        <Timer
          isWaldoFound={isWaldoFound}
          setSeconds={setSeconds}
          seconds={seconds}
        />
        <img
          alt="where is waldo level two"
          src={image}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
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
        <Marker marX={marX} marY={marY} />
        {modalShow && (
          <GameOver time={seconds} handleCloseModal={handleCloseModal} />
        )}
      </div>
    </div>
  );
};

export default WithMagnifier(LevelTwo);
