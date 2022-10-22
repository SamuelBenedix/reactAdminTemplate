import { cx } from '@emotion/css';
import React from 'react';
import { styDropdownMenu, styDropdownMenuShow } from './styles';

interface DropdownMenuProps {
  children: React.ReactNode;
  isOpen: boolean;
  elementPosition: boolean;
  size?: string;
}

const DropdownMenu = (props: DropdownMenuProps) => {
  const { children, isOpen, elementPosition, size = 'medium' } = props;

  return (
    <div
      className={
        isOpen
          ? cx(styDropdownMenu, styDropdownMenuShow(elementPosition, size))
          : styDropdownMenu
      }
    >
      {children}
    </div>
  );
};

export default DropdownMenu;
