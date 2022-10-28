import React, { useState } from 'react';
import { CheckboxProps } from '../../../@types/checkbox';
import { styForm, styFormInput, styFormLabel, styHelper } from './styles';

const Checkbox = (props: CheckboxProps) => {
  const { label, isDisable, value } = props;
  const [isChecked, setIsChecked] = useState(value);
  

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
        <span className={styHelper(isChecked, isDisable)} />
        {isChecked ? 'selected' : label}
      </label>
    </div>
  );
};

export default Checkbox;
