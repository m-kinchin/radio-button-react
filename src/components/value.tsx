import * as React from 'react';
import { MainState } from '../types';

const Value: React.SFC<MainState> = (props) => {
  return (
    <div>{props.value}</div>
  );
};

export default Value;
