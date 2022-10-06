import '../styles/marker.css';

const Marker = (props) => {
  const { marX, marY } = props;

  return (
    <div
      className="marker-container"
      style={{ left: marX + '%', top: marY + '%' }}
    >
      <p>X</p>
    </div>
  );
};

export default Marker;
