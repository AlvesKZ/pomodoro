import React from 'react';
import { useInterval } from '../hooks/use-interval';
import { secondsToTime } from '../utils/seconds-to-time';
import { Button } from './button';
import { Timer } from './timer';

interface Props {
  defaultPomodoroTimer: number;
}

export function PomodoroTimer(props: Props) {
  const [mainTime, setMainTime] = React.useState(props.defaultPomodoroTimer);

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000);

  return (
    <div className="pomodoro">
      <h2>You are: working</h2>
      <Timer mainTime={mainTime} />
      <Button text="teste" onClick={() => console.log('1')}></Button>
    </div>
  );
}
