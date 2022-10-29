import React, { useState, useEffect } from 'react';
import { CheckboxProps } from '../../../@types/checkbox';
import { Colors } from '../../../utils';
import { styForm, styFormInput, styFormLabel, styHelper } from './styles';

const Checkbox = (props: CheckboxProps) => {
  const { label, isDisable, value, variant = 'primary' } = props;
  const [isChecked, setIsChecked] = useState(value);
  const [typeColor, setTypeColor] = useState({
    backgroundColor: '',
  });

  useEffect(() => {
    setTypeColor(Colors[variant]);
  }, [variant]);

  return (
    <div className={styForm}>
      <label className={styFormLabel}>
        <input
          className={styFormInput}
          type="checkbox"
          onChange={() => setIsChecked(!isChecked)}
          checked={isChecked}
          disabled={isDisable}
        />
        <span className={styHelper(isChecked, isDisable, typeColor)} />
        {isChecked ? 'selected' : label}
      </label>
    </div>
  );
};

export default Checkbox;
