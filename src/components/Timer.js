import React, { useEffect, useState, memo } from 'react';

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
    <div className="timer-container">
      <p>{formatTime(seconds)}</p>
    </div>
  );
};

export default memo(Timer);
