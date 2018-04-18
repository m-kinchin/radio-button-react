import * as React from 'react';

import { RadioButtonProps } from '../types';

import '../styles/radio-button.css';

class RadioButton extends React.Component<RadioButtonProps> {
  className: string;

  constructor(props: RadioButtonProps) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const value = this.props.onButtonClick && this.props.onButtonClick(this.props.value);
    return value;
  }

  getButtonClass(checked?: boolean) {
    return 'button ' + (checked ? 'pressed-button' : '');
  }

  render() { 
    return (
      <div className={this.getButtonClass(this.props.checked)} onClick={this.onClick}>{this.props.children}</div>
    );
  }
}

export default RadioButton;