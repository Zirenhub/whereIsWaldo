import '../styles/gameover.css';
import formatTime from '../utils/formatTime';
import getLeaderboard from '../utils/getLeaderboard';
import { UserAuth } from '../context/AuthContext';
import { useEffect, useState } from 'react';
import addUserToLeaderboard from '../utils/addUserToLeaderboard';
import SignIn from './SignIn';

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

    const updateUser = () => {
      if (user) {
        const userName = user.displayName;
        const userID = user.uid;

        addUserToLeaderboard(userID, time, userName, levelLeaderboard);

        setIsUserSignedIn(true);
      } else {
        setIsUserSignedIn(false);
      }
    };

    updateUser();
    fetchCharacters();

    return () => {
      setIsUserSignedIn(null);
      setLeaderboard(null);
    };
  }, [user]);

  return (
    <div className="modal-container">
      <div className="game-over-container">
        <div className="modal-header">
          <div className="modal-title">
            <p>Congratulations</p>
          </div>
          <div className="close-modal">
            <button onClick={handleCloseModal}>x</button>
          </div>
        </div>
        <div className="modal-content">
          <div className="modal-score">
            {!isUserSignedIn && (
              <div className="user-not-signed-in">
                <p>Sign in to be included in the Leaderboard</p>
                <SignIn />
              </div>
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
                      <p>{formatTime(person.time)}</p>
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
