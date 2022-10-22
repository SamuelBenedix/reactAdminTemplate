import React from 'react';
import { styDropdownItem } from './styles';

interface DropdownItemProps {
  onClick: (event: React.MouseEvent) => void;
  children: React.ReactNode;
}

const DropdownItem = (props: DropdownItemProps) => {
  const { onClick, children } = props;
  return (
    <button onClick={onClick} className={styDropdownItem}>
      {children}
    </button>
  );
};

export default DropdownItem;
