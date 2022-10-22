import React from 'react';
import { styDivider, styDividerDropdown } from './styles';

interface DividerProps {
  type?: 'normal' | 'dropdown';
}

const Divider = (props: DividerProps) => {
  const { type } = props;

  return (
    <hr className={type === 'dropdown' ? styDividerDropdown : styDivider} />
  );
};

export default Divider;
