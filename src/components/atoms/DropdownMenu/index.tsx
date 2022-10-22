import { cx } from '@emotion/css';
import React from 'react';
import { styDropdownMenu, styDropdownMenuShow } from './styles';

interface DropdownMenuProps {
  children: React.ReactNode;
  isOpen: boolean;
}

const DropdownMenu = (props: DropdownMenuProps) => {
  const { children, isOpen } = props;

  return (
    <div
      className={
        isOpen ? cx(styDropdownMenu, styDropdownMenuShow) : styDropdownMenu
      }
    >
      {children}
    </div>
  );
};

export default DropdownMenu;
