import '../styles/gameover.css';
import formatTime from '../utils/formatTime';

const GameOver = (props) => {
  const { time, handleCloseModal } = props;

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
            <p>Sign in to be included in the Leaderboard</p>
            <p>Your time: {formatTime(time)}</p>
          </div>
          <div>
            <p>Details go here</p>
          </div>
        </div>
      </div>
      <div className="modal-background"></div>
    </div>
  );
};

export default GameOver;
