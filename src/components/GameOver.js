import '../styles/gameover.css';
import formatTime from '../utils/formatTime';
import getLeaderboard from '../utils/getLeaderboard';
import { UserAuth } from '../context/AuthContext';
import { useEffect, useState } from 'react';
import addUserToLeaderboard from '../utils/addUserToLeaderboard';

const GameOver = (props) => {
  const [leaderboard, setLeaderboard] = useState(null);
  const [isUserSignedIn, setIsUserSignedIn] = useState(null);

  const { time, handleCloseModal, levelLeaderboard } = props;

  const { user } = UserAuth();

  useEffect(() => {
    const fetchCharacters = () => {
      getLeaderboard(levelLeaderboard)
        .then((data) => {
          setLeaderboard(data);
        })
        .catch((error) => console.log(error));
    };

    if (user) {
      const userName = user.displayName;
      const userID = user.uid;
      addUserToLeaderboard(userID, time, userName, levelLeaderboard);
      setIsUserSignedIn(true);
    } else {
      setIsUserSignedIn(false);
    }

    fetchCharacters();

    return () => {
      setIsUserSignedIn(null);
      setLeaderboard(null);
    };
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
              leaderboard
                .sort((a, b) => {
                  if (a.time < b.time) return -1;
                  if (a.time > b.time) return 1;
                  return 0;
                })
                .map((person) => {
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
