import React from 'react';
import { useInterval } from '../hooks/use-interval';
import { secondsToTime } from '../utils/seconds-to-time';

interface Props {
  defaultPomodoroTimer: number;
}

export function PomodoroTimer(props: Props) {
  const [mainTime, setMainTime] = React.useState(props.defaultPomodoroTimer);

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000);

  return <div>Olá, mundo! {secondsToTime(mainTime)}</div>;
}
