import '../styles/level-one.css';
import image from '../assets/images/OTfytjA.jpeg';
import React, { useEffect, useState } from 'react';
import WithMagnifier from './WithMagnifier';
import BackButton from './BackButton';
import Timer from './Timer';
import Magnifier from './Magnifier';
import Marker from './Marker';
import GameOver from './GameOver';
import SearchingFor from './SearchingFor';

const LevelThree = (props) => {
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
  const [everyone, setEveryone] = useState({
    waldo: {
      position: [42.152704, 18.473476],
      isFound: false,
    },
  });
  const [isEveryoneFound, setIsEveryoneFound] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [modalShow, setModalShow] = useState(false);

  const waldo = everyone.waldo;

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
    console.log(marX, marY);
    if (!waldo.isFound) {
      if (
        (marY === waldo.position[1] ||
          (marY >= 16.786401 && marY <= 20.919736)) &&
        (marX === waldo.position[0] || (marX <= 42.682926 && marX >= 41.35737))
      ) {
        setEveryone((prevState) => ({
          ...prevState,
          waldo: { ...prevState.waldo, isFound: true },
        }));
      }
    }
  }, [marX, marY]);

  useEffect(() => {
    if (waldo.isFound) {
      setIsEveryoneFound(true);
      handleShowModal();
    }
  }, [waldo.isFound]);

  return (
    <div className="main-container">
      <div className="image-container">
        <BackButton />
        <Timer
          isEveryoneFound={isEveryoneFound}
          setSeconds={setSeconds}
          seconds={seconds}
        />
        <SearchingFor everyone={everyone} />
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
        {waldo.isFound && (
          <Marker
            marX={waldo.position[0]}
            marY={waldo.position[1]}
            position="Waldo"
          />
        )}

        {modalShow && (
          <GameOver time={seconds} handleCloseModal={handleCloseModal} />
        )}
      </div>
    </div>
  );
};

export default WithMagnifier(LevelThree);
