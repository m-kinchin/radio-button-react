import * as React from 'react';

import RadioButton from './radio-button';
import RadioGroup from './radio-group';
import { DefaultProps, MainState } from '../types';

class App extends React.Component<DefaultProps, MainState> {
  
  constructor(props: DefaultProps) {
    super(props);
    this.state = {
      value: 'ALL'
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(value: string) {
    this.setState({value});
  }

  render() {
    return (
      <div>
        <RadioGroup onChange={this.onChange} value={this.state.value}>
          <RadioButton value="NOT ALL">Show something</RadioButton>
          <RadioButton value="NOTHING">Show nothing</RadioButton>
          <RadioButton value="ALL">Show all</RadioButton>
        </RadioGroup>
        <div>{this.state.value}</div>
      </div>
    );
  }
}

export default App;
