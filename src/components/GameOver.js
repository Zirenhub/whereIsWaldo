import '../styles/gameover.css';

const GameOver = (props) => {
  const { time, handleCloseModal } = props;

  const formatTime = (secs) => {
    let hours = Math.floor(secs / 3600);
    let minutes = Math.floor(secs / 60) % 60;
    let seconds = secs % 60;
    return [hours, minutes, seconds]
      .map((v) => ('' + v).padStart(2, '0'))
      .filter((v, i) => v !== '00' || i > 0)
      .join(':');
  };

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
