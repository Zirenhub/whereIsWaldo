import '../styles/level-one.css';
import image from '../assets/images/2687208.jpg';
import React, { useEffect, useState } from 'react';
import WithMagnifier from './WithMagnifier';
import BackButton from './BackButton';
import Timer from './Timer';
import Magnifier from './Magnifier';
import Marker from './Marker';
import GameOver from './GameOver';
import SearchingFor from './SearchingFor';

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
  const [everyone, setEveryone] = useState({
    waldo: {
      position: [56.415694, 42.742427],
      isFound: false,
    },
    tail: {
      position: [9.862142, 51.749777],
      isFound: false,
    },
    wilma: {
      position: [30.646871, 61.606878],
      isFound: false,
    },
    whitebeard: {
      position: [67.656415, 28.976476],
      isFound: false,
    },
    odlaw: {
      position: [43.743372, 30.591001],
      isFound: false,
    },
  });
  const [isEveryoneFound, setIsEveryoneFound] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [modalShow, setModalShow] = useState(false);

  const waldo = everyone.waldo;
  const tail = everyone.tail;
  const wilma = everyone.wilma;
  const whitebeard = everyone.whitebeard;
  const odlaw = everyone.odlaw;

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
          (marY >= 41.722727 && marY <= 43.592177)) &&
        (marX === waldo.position[0] || (marX <= 56.892895 && marX >= 56.150583))
      ) {
        setEveryone((prevState) => ({
          ...prevState,
          waldo: { ...prevState.waldo, isFound: true },
        }));
      }
    }

    if (!tail.isFound) {
      if (
        (marY === tail.position[1] ||
          (marY >= 51.579827 && marY <= 52.259627)) &&
        (marX === tail.position[0] || (marX <= 10.392364 && marX >= 9.437963))
      ) {
        setEveryone((prevState) => ({
          ...prevState,
          tail: { ...prevState.tail, isFound: true },
        }));
      }
    }

    if (!wilma.isFound) {
      if (
        (marY === wilma.position[1] ||
          (marY >= 61.012053 && marY <= 62.456628)) &&
        (marX === wilma.position[0] || (marX <= 31.071049 && marX >= 30.328738))
      ) {
        setEveryone((prevState) => ({
          ...prevState,
          wilma: { ...prevState.wilma, isFound: true },
        }));
      }
    }

    if (!whitebeard.isFound) {
      if (
        (marY === whitebeard.position[1] ||
          (marY >= 28.126726 && marY <= 30.081151)) &&
        (marX === whitebeard.position[0] ||
          (marX <= 68.292682 && marX >= 67.07317))
      ) {
        setEveryone((prevState) => ({
          ...prevState,
          whitebeard: { ...prevState.whitebeard, isFound: true },
        }));
      }
    }

    if (!odlaw.isFound) {
      if (
        (marY === odlaw.position[1] ||
          (marY >= 29.741251 && marY <= 31.440751)) &&
        (marX === odlaw.position[0] || (marX <= 43.955461 && marX >= 43.213149))
      ) {
        setEveryone((prevState) => ({
          ...prevState,
          odlaw: { ...prevState.odlaw, isFound: true },
        }));
      }
    }
  }, [marX, marY]);

  useEffect(() => {
    if (
      waldo.isFound &&
      tail.isFound &&
      wilma.isFound &&
      whitebeard.isFound &&
      odlaw.isFound
    ) {
      setIsEveryoneFound(true);
      handleShowModal();
    }
  }, [
    waldo.isFound,
    tail.isFound,
    wilma.isFound,
    whitebeard.isFound,
    odlaw.isFound,
  ]);

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
        {waldo.isFound && (
          <Marker
            marX={waldo.position[0]}
            marY={waldo.position[1]}
            position="Waldo"
          />
        )}
        {tail.isFound && (
          <Marker
            marX={tail.position[0]}
            marY={tail.position[1]}
            position="Tail"
          />
        )}
        {wilma.isFound && (
          <Marker
            marX={wilma.position[0]}
            marY={wilma.position[1]}
            position="Wilma"
          />
        )}
        {whitebeard.isFound && (
          <Marker
            marX={whitebeard.position[0]}
            marY={whitebeard.position[1]}
            position="Whitebeard"
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

export default WithMagnifier(LevelTwo);
