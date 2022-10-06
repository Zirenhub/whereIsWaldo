const Magnifier = (props) => {
  const { y, x, image, imgWidth, imgHeight } = props;

  const magnifierHeight = 100;
  const magnifierWidth = 100;
  const zoomLevel = 1.5;

  return (
    <div
      style={{
        position: 'absolute',
        pointerEvents: 'none',
        height: `${magnifierHeight}px`,
        width: `${magnifierWidth}px`,
        top: `${y - magnifierHeight / 2}px`,
        left: `${x - magnifierWidth / 2}px`,
        opacity: '1', // reduce opacity so you can verify position
        border: '1px solid lightgray',
        backgroundColor: 'white',
        backgroundImage: `url('${image}')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: `${imgWidth * zoomLevel}px ${imgHeight * zoomLevel}px`,
        backgroundPositionX: `${-x * zoomLevel + magnifierWidth / 2}px`,
        backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`,
      }}
    ></div>
  );
};

export default Magnifier;
