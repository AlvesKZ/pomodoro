import React from 'react';
import { useInterval } from '../hooks/use-interval';
import { secondsToTime } from '../utils/seconds-to-time';
import { Button } from './button';
import { Timer } from './timer';

interface Props {
  pomodoroTimer: number;
  shortRestTime: number;
  longRestTime: number;
  cycle: number;
}

export function PomodoroTimer(props: Props) {
  const [mainTime, setMainTime] = React.useState(props.pomodoroTimer);

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000);

  return (
    <div className="pomodoro">
      <h2>You are: working</h2>
      <Timer mainTime={mainTime} />

      <div className="controls">
        <Button text="teste" onClick={() => console.log('1')}></Button>
        <Button text="teste" onClick={() => console.log('1')}></Button>
        <Button text="teste" onClick={() => console.log('1')}></Button>
      </div>

      <div className="details">
        <p>Testando: afgjhkhfoahglsh lashfjhalkshfl saalshflhafljha </p>
        <p>Testando: afgjhkhfoahglsh lashfjhalkshfl saalshflhafljha </p>
        <p>Testando: afgjhkhfoahglsh lashfjhalkshfl saalshflhafljha </p>
        <p>Testando: afgjhkhfoahglsh lashfjhalkshfl saalshflhafljha </p>
      </div>
    </div>
  );
}
