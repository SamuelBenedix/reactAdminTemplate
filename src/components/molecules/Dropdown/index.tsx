import React, { useState, useRef, useEffect, useCallback } from 'react';
import { DropdownProps } from '../../../@types/dropdown';
import {
  DropdownItem,
  DropdownMenu,
  DropdownHeader,
  Button,
} from '../../atoms';
import { styDropdown } from './styles';

const Dropdown = (props: DropdownProps) => {
  const { children, text, variant, isOutline, size, isSplit, icon } = props;

  const [active, setActive] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const onMouseDown = useCallback(
    (e: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setActive(false);
      }
    },
    [dropdownRef, setActive]
  );

  useEffect(() => {
    window.addEventListener('mousedown', onMouseDown);
    return () => window.removeEventListener('mousedown', onMouseDown);
  }, [onMouseDown]);

  const onClick = () => {
    setActive(!active);
  };

  return (
    <div ref={dropdownRef} className={styDropdown}>
      <Button
        variant={variant}
        isOutline={isOutline}
        children={text}
        onClick={onClick}
        size={size}
        isSplit={isSplit}
        isDropdown
        icon={icon}
      />
      <DropdownMenu isOpen={active}>{children}</DropdownMenu>
    </div>
  );
};

Dropdown.displayName = 'Dropdown';
Dropdown.Header = DropdownHeader;
Dropdown.Item = DropdownItem;

export default Dropdown;
