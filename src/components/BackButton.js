import { Link } from 'react-router-dom';

const BackButton = () => {
  return (
    <div className="back-button">
      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
};

export default BackButton;
