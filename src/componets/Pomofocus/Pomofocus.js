import React, { useState, useEffect } from 'react';

function Pomofocus() {
  const [workMinutes, setWorkMinutes] = useState('25');
  const [restMinutes, setRestMinutes] = useState('5');
  const [longRestMinutes, setLongRestMinutes] = useState('30');
  const [pomodoroCount, setPomodoroCount] = useState('4');
  const [currentMinute, setCurrentMinute] = useState(workMinutes * 60);
  const [currentPomodoro, setCurrentPomodoro] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useEffect(() => {
    if (isTimerRunning) {
      const timerId = setInterval(() => {
        setCurrentMinute(currentMinute - 1);
      }, 1000);
      return () => clearInterval(timerId);
    }
  }, [currentMinute, isTimerRunning]);

  const toggleTimer = () => {
    setIsTimerRunning(!isTimerRunning);
    if (!isTimerRunning) {
      setCurrentMinute(workMinutes * 60);
    }
  };

  const resetTimer = () => {
    setIsTimerRunning(false);
    setCurrentMinute(workMinutes * 60);
    setCurrentPomodoro(0);
  };

  const getNextMinute = () => {
    if (currentPomodoro === parseInt(pomodoroCount, 10) - 1) {
      return parseInt(longRestMinutes, 10) * 60;
    } else if (currentMinute === 1) {
      return parseInt(restMinutes, 10) * 60;
    } else {
      return parseInt(workMinutes, 10) * 60;
    }
  };

  const handleMinuteEnd = () => {
    if (currentMinute === 1) {
      setCurrentPomodoro(currentPomodoro + 1);
    }
    setCurrentMinute(getNextMinute());
  };

  const formatMinute = (minute) => {
    const pad = (num, size) => ('000' + num).slice(size * -1);
    const minutes = Math.floor(minute / 60);
    const seconds = minute % 60;
    return `${pad(minutes, 1)}:${pad(seconds, 2)}`;
  };

  return (
    <div>
      <h1>Pomofocus</h1>
      <div>
        <label>
          Work time (minutes):
          <input
            type="number"
            min="1"
            step="1"
            value={workMinutes}
            onChange={(e) => setWorkMinutes(e.target.value)}
          />
        </label>
        <br />
        <label>
          Short rest time (minutes):
          <input
            type="number"
            min="1"
            step="1"
            value={restMinutes}
            onChange={(e) => setRestMinutes(e.target.value)}
          />
        </label>
        <br />
        <label>
          Long rest time (minutes):
          <input
            type="number"
            min="1"
            step="1"
            value={longRestMinutes}
            onChange={(e) => setLongRestMinutes(e.target.value)}
          />
        </label>
        <br />
        <label>
          Pomodoro count:
          <input
            type="number"
            min="1"
            step="1"
            value={pomodoroCount}
            onChange={(e) => setPomodoroCount(e.target.value)}
          />
        </label>
        <br />
        <button onClick={toggleTimer}>
          {isTimerRunning ? 'Pause' : 'Start'}
        </button>
        <button onClick={resetTimer}>Reset</button>
      </div>
      <div>
        {formatMinute(currentMinute)}
        <br />
        {currentPomodoro}/{pomodoroCount}
      </div>
      {currentMinute === 1 && (
        <div>Time's up! Take a {currentPomodoro === parseInt(pomodoroCount, 10) - 1 ? 'long' : 'short'} rest.</div>
      )}
    </div>
  );
}

export { Pomofocus };
