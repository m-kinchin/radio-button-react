export interface RadioButtonProps {
  value: string | number | boolean;
  onButtonClick?: (value: string | number | boolean) => void;
  checked?: boolean;
}

export interface RadioGroupProps {
  value: string | number | boolean;
  onChange?: (value: string | number | boolean) => void;
}

export interface MainState {
  value: string | number | boolean;
}

export interface RadioGroupState {
  value: string | number | boolean;
}

export interface DefaultProps {}
