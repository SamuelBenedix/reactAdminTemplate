import React from 'react';
import { Divider } from '../../atoms';
import { Accordion } from '../../molecules';
import { styNavBar, stySidebarBrand } from './styles';

const Sidebar = () => {
  return (
    <ul className={styNavBar}>
      <div className={stySidebarBrand}>SB Admin</div>
      <Accordion />
      <Divider />
      <Accordion />
      <Divider />
    </ul>
  );
};

export default Sidebar;
