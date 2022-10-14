import '../styles/gameover.css';
import formatTime from '../utils/formatTime';
import getLeaderboard from '../utils/getLeaderboard';
import { UserAuth } from '../context/AuthContext';
import { useEffect, useState } from 'react';
import addUserToLeaderboard from '../utils/addUserToLeaderboard';

const GameOver = (props) => {
  const [leaderboard, setLeaderboard] = useState(null);
  const [isUserSignedIn, setIsUserSignedIn] = useState(null);

  const { time, handleCloseModal } = props;

  const { user } = UserAuth();

  useEffect(() => {
    if (user) {
      const token = user.uid;
      const userName = user.displayName;
      addUserToLeaderboard(token, time, userName);
      setIsUserSignedIn(true);
    } else {
      setIsUserSignedIn(false);
    }
  }, []);

  useEffect(() => {
    console.log('trying to get leaderboard');
    const fetchCharacters = () => {
      getLeaderboard()
        .then((data) => {
          setLeaderboard(data);
        })
        .catch((error) => console.log(error));
    };
    fetchCharacters();
  }, []);

  return (
    <div className="modal-container">
      <div className="game-over-container">
        <div className="modal-header">
          <p>Congratulations</p>
          <div className="close-modal">
            <button onClick={handleCloseModal}>x</button>
          </div>
        </div>
        <div className="modal-content">
          <div className="modal-score">
            {!isUserSignedIn && (
              <p>Sign in to be included in the Leaderboard</p>
            )}
            <p>Your time: {formatTime(time)}</p>
          </div>
          <div className="leaderboard-container">
            {leaderboard &&
              leaderboard.map((person) => {
                return (
                  <div className="person-container" key={person.key}>
                    <p>{person.name}</p>
                    <p>{person.time}</p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <div className="modal-background"></div>
    </div>
  );
};

export default GameOver;
