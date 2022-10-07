import '../styles/level-one.css';
import image from '../assets/images/2687204.jpg';
import React, { useEffect, useState } from 'react';
import WithMagnifier from './WithMagnifier';
import BackButton from './BackButton';
import Timer from './Timer';
import Magnifier from './Magnifier';
import Marker from './Marker';
import GameOver from './GameOver';

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

  const [[marX, marY], setMarker] = useState([0, 0]);
  const [isFirstWaldoFound, setIsFirstWaldoFound] = useState(false);
  const [areAllWaldosFound, setAreAllWaldosFound] = useState(false);
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
    const firstWaldoPosition = [75.768823, 76.286825];
    if (!isFirstWaldoFound) {
      if (
        (marY === firstWaldoPosition[0] ||
          (marY >= 74.48219 && marY <= 77.025085)) &&
        (marX === firstWaldoPosition[1] ||
          (marX <= 76.829268 && marY >= 74.549311))
      ) {
        setIsFirstWaldoFound(true);
        // handleShowModal();
      }
    }

    // return () => {
    //   setIsFirstWaldoFound(false);
    // };
  }, [marX, marY]);

  return (
    <div className="main-container">
      <div className="image-container">
        <BackButton />
        <Timer
          isWaldoFound={areAllWaldosFound}
          setSeconds={setSeconds}
          seconds={seconds}
        />
        <img
          alt="where is waldo level one"
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
        {isFirstWaldoFound && <Marker marX={marX} marY={marY} position={1} />}

        {/* {modalShow && (
          <GameOver time={seconds} handleCloseModal={handleCloseModal} />
        )} */}
      </div>
    </div>
  );
};

export default WithMagnifier(LevelOne);
