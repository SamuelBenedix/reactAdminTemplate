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
  const {
    children,
    text,
    variant,
    isOutline,
    size,
    isSplit,
    isIcon,
    icon,
    isUp = false,
  } = props;

  const [active, setActive] = useState(false);
  const [elementPosition, setElementPosition] = useState(false);
  const dropdownRef = useRef<any>(null);

  const onMouseDown = useCallback(
    (e: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setActive(false);
      }
    },
    [dropdownRef, setActive]
  );

  const onScroll = () => {
    let offsetTop = dropdownRef.current.getBoundingClientRect().top;
    console.log(offsetTop);
    if (offsetTop < 400) {
      setElementPosition(true);
    } else {
      setElementPosition(false);
    }
  };

  useEffect(() => {
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mousedown', onMouseDown);
    };
  }, [onMouseDown]);

  const onClick = () => {
    setActive(!active);
  };

  return (
    <div ref={dropdownRef} className={styDropdown(isUp)}>
      <Button
        variant={variant}
        isOutline={isOutline}
        children={text}
        onClick={onClick}
        size={size}
        isSplit={isSplit}
        isDropdown
        isIcon={isIcon}
        icon={icon}
      />
      <DropdownMenu
        isOpen={active}
        elementPosition={elementPosition}
        size={size}
      >
        {children}
      </DropdownMenu>
    </div>
  );
};

Dropdown.displayName = 'Dropdown';
Dropdown.Header = DropdownHeader;
Dropdown.Item = DropdownItem;

export default Dropdown;
