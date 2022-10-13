import '../styles/marker.css';

const Marker = (props) => {
  const { marX, marY, position } = props;

  return (
    <div
      className="marker-container"
      style={{ left: marX + '%', top: marY + '%' }}
    >
      {position === 'whitebeard' ? <p>Wbeard</p> : <p>{position}</p>}
    </div>
  );
};

export default Marker;
