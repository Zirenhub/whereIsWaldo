const isCharacterWithinRadius = (x, y, charX, charY) => {
  const tempX = parseFloat(x.toFixed(6));
  const tempY = parseFloat(y.toFixed(6));
  const radiusXPlus = charX + 1;
  const radiusXMinus = charX - 1;
  const radiusYPlus = charY + 1.7;
  const radiusYMinus = charY - 1.7;

  if (
    (tempY === charY || (tempY >= radiusYMinus && tempY <= radiusYPlus)) &&
    (tempX === charX || (tempX <= radiusXPlus && tempX >= radiusXMinus))
  ) {
    return true;
  }
  return false;
};

export default isCharacterWithinRadius;
