import * as React from 'react';

import {
  RadioGroupProps,
  RadioButtonProps,
  RadioGroupState
} from '../types';

import '../styles/radio-group.css';

class RadioGroup extends React.Component<RadioGroupProps, RadioGroupState> {
  index: number;
  constructor(props: RadioGroupProps) {
    super(props);
    this.state = {
      value: this.props.value
    } as RadioGroupState;

    this.renderChildren = this.renderChildren.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(value: string | number | boolean) {
    if (this.state.value === value) {
      return;
    }
    this.setState({value});
    this.props.onChange && this.props.onChange(value);
  }

  renderChildren(child: React.ReactChild, index: number) {
    const c = child as React.ReactElement<RadioButtonProps>;
    return React.cloneElement(c, {
      onButtonClick: this.onChange,
      key: index,
      checked: c.props.value === this.state.value
    });
  }

  render() {
    return (
      <div>
        <div className="button-group">
          {React.Children.map(this.props.children, (child, index) => this.renderChildren(child, index))}
        </div>
      </div>
    );
  }
}

export default RadioGroup;
