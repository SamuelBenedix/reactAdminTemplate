import { cx } from '@emotion/css';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { DropdownProps } from '../../../@types/dropdown';
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  DropdownButton,
} from '../../atoms';
import {
  styDropdown,
  styDropdownMenu,
  styDropdownItem,
  styDropdownHeader,
  styDropdownMenuShow,
} from './styles';

const Dropdown = (props: DropdownProps) => {
  const { dropdownId } = props;

  const [active, setActive] = useState(false);
  const dropdownRef = useRef(null);

  const onMouseDown = useCallback(() => {
    if (dropdownRef.current) {
      setActive(false);
    }
  }, [dropdownRef, setActive]);

  useEffect(() => {
    window.addEventListener('mousedown', onMouseDown);
    return () => window.removeEventListener('mousedown', onMouseDown);
  }, [onMouseDown]);

  const onClick = () => {
    setActive(!active);
  };

  return (
    <div ref={dropdownRef} className={styDropdown}>
      <DropdownButton type="primary" children="Dropdown" onClick={onClick} />
      <div
        aria-labelledby={dropdownId}
        id={dropdownId}
        className={
          active ? cx(styDropdownMenu, styDropdownMenuShow) : styDropdownMenu
        }
      >
        <div className={styDropdownHeader}>Dropdown Header</div>
        <button className={styDropdownItem}>Dropdown</button>
        <button className={styDropdownItem}>Dropdown</button>
        <button className={styDropdownItem}>Dropdown</button>
        <button className={styDropdownItem}>Dropdown</button>
      </div>
    </div>
  );
};

export default Dropdown;

Dropdown.displayName = 'Dropdown';
