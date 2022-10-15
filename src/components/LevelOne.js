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
import getCharacters from '../utils/getCharacters';
import checkIfInputValid from '../utils/checkIfInputValid';

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
  const [characters, setCharacters] = useState(null);
  const [isEveryoneFound, setIsEveryoneFound] = useState(false);
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
    console.log('trying to get characters from database');
    const fetchCharacters = () => {
      getCharacters('level-one-locations')
        .then((data) => {
          setCharacters(data);
        })
        .catch((error) => console.log(error));
    };
    fetchCharacters();
  }, []);

  useEffect(() => {
    checkIfInputValid(
      marX,
      marY,
      characters,
      setCharacters,
      'level-one-locations'
    );
  }, [marX, marY]);

  useEffect(() => {
    if (characters) {
      const areAllCharactersFound = characters.every((obj) => obj.found);

      if (areAllCharactersFound) {
        setIsEveryoneFound(true);
        handleShowModal();
      }
    }
  }, [characters]);

  return (
    <div className="main-container">
      <div className="image-container">
        <BackButton />
        <Timer
          isEveryoneFound={isEveryoneFound}
          setSeconds={setSeconds}
          seconds={seconds}
        />
        <SearchingFor everyone={characters} />
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
        {characters &&
          characters.map((character) => {
            if (character.found) {
              return (
                <Marker
                  key={`${character.name}`}
                  marX={character.position[0]}
                  marY={character.position[1]}
                  position={character.name}
                />
              );
            }
          })}
        {modalShow && (
          <GameOver
            time={seconds}
            handleCloseModal={handleCloseModal}
            levelLeaderboard={'level-one-leaderboard'}
          />
        )}
      </div>
    </div>
  );
};

export default WithMagnifier(LevelOne);
