import React from 'react';
import { styDropdownHeader } from './styles';

interface DropdownHeaderProps {
  children: React.ReactNode;
}

const DropdownHeader = (props: DropdownHeaderProps) => {
  const { children } = props;
  return <div className={styDropdownHeader}>{children}</div>;
};

export default DropdownHeader;
