import '../styles/level-one.css';
import image from '../assets/images/2687204.jpg';
import React, { useEffect, useState } from 'react';
import WithMagnifier from './WithMagnifier';
import BackButton from './BackButton';
import Timer from './Timer';
import Magnifier from './Magnifier';
import Marker from './Marker';
import GameOver from './GameOver';
import SearchingFor from './SearchingFor';

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
  const [everyone, setEveryone] = useState({
    waldo: {
      position: [16.702014, 84.325651],
      isFound: false,
      key: 1,
    },
    wilma: {
      position: [75.768823, 76.286825],
      isFound: false,
      key: 2,
    },
    odlaw: {
      position: [49.734888, 38.9637],
      isFound: false,
      key: 3,
    },
  });
  const [isEveryoneFound, setIsEveryoneFound] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [modalShow, setModalShow] = useState(false);

  const handleCloseModal = () => setModalShow(false);
  const handleShowModal = () => setModalShow(true);

  const waldo = everyone.waldo;
  const wilma = everyone.wilma;
  const odlaw = everyone.odlaw;

  const handleClick = (e) => {
    const imgRect = e.currentTarget.getBoundingClientRect();
    const { clientX, clientY } = e;

    const posXpct = ((clientX - imgRect.x) * 100) / imgRect.width;
    const posYpct = ((clientY - imgRect.y) * 100) / imgRect.height;

    setMarker([posXpct, posYpct]);
  };

  useEffect(() => {
    if (!waldo.isFound) {
      if (
        (marY === waldo.position[1] ||
          (marY >= 83.66942 && marY <= 85.227968)) &&
        (marX === waldo.position[0] || (marX <= 17.232237 && marX >= 16.224814))
      ) {
        setEveryone((prevState) => ({
          ...prevState,
          waldo: { ...prevState.waldo, isFound: true },
        }));
      }
    }

    if (!wilma.isFound) {
      if (
        (marY === wilma.position[1] ||
          (marY >= 74.48219 && marY <= 77.025085)) &&
        (marX === wilma.position[0] || (marX <= 76.829268 && marX >= 74.549311))
      ) {
        setEveryone((prevState) => ({
          ...prevState,
          wilma: { ...prevState.wilma, isFound: true },
        }));
      }
    }

    if (!odlaw.isFound) {
      if (
        (marY === odlaw.position[1] ||
          (marY >= 38.389499 && marY <= 39.537902)) &&
        (marX === odlaw.position[0] || (marX <= 50.053022 && marX >= 49.469777))
      ) {
        setEveryone((prevState) => ({
          ...prevState,
          odlaw: { ...prevState.odlaw, isFound: true },
        }));
      }
    }
  }, [marX, marY]);

  useEffect(() => {
    if (waldo.isFound && wilma.isFound && odlaw.isFound) {
      setIsEveryoneFound(true);
      handleShowModal();
    }
  }, [waldo.isFound, wilma.isFound, odlaw.isFound]);

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
        {wilma.isFound && (
          <Marker
            marX={wilma.position[0]}
            marY={wilma.position[1]}
            position="Wilma"
          />
        )}
        {odlaw.isFound && (
          <Marker
            marX={odlaw.position[0]}
            marY={odlaw.position[1]}
            position="Odlaw"
          />
        )}

        {modalShow && (
          <GameOver time={seconds} handleCloseModal={handleCloseModal} />
        )}
      </div>
    </div>
  );
};

export default WithMagnifier(LevelOne);
