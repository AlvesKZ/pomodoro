import React from 'react';
import { secondsToTMinutes } from '../utils/seconds-to-minutes';

interface Props {
  mainTime: number;
}

export function Timer(props: Props): JSX.Element {
  return <div className="timer">{secondsToTMinutes(props.mainTime)}</div>;
}
