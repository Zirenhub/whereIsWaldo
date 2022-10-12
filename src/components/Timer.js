import React, { useEffect, useState, memo } from 'react';
import formatTime from '../utils/formatTime';

const Timer = (props) => {
  const { isEveryoneFound, setSeconds, seconds } = props;

  const tick = () => {
    setSeconds(seconds + 1);
  };

  let interval;

  useEffect(() => {
    if (!isEveryoneFound) {
      interval = setInterval(() => tick(), 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [tick]);

  return (
    <div className="timer-container">
      <p>{formatTime(seconds)}</p>
    </div>
  );
};

export default memo(Timer);
