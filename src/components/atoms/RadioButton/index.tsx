import React, { useState, useEffect } from 'react';
import { RadioButtonProps } from '../../../@types/radiobutton';
import { Colors } from '../../../utils';
import { styLabel, styWrapper, styInput } from './styles';

const RadioButton = (props: RadioButtonProps) => {
  const { label, id, isDisabled, variant, ...rest } = props;
  const [typeColor, setTypeColor] = useState({
    backgroundColor: '',
    backgroundColorHover: '',
  });

  useEffect(() => {
    setTypeColor(Colors[variant]);
  }, [variant]);

  return (
    <div className={styWrapper}>
      <input
        className={styInput(typeColor)}
        type="radio"
        id={id}
        disabled={isDisabled}
        {...rest}
      />
      <label className={styLabel} htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
