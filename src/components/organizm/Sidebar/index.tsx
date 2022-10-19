import React from 'react';
import { Accordion } from '../../molecules';
import { styNavBar, stySidebarBrand } from './styles';

const Sidebar = () => {
  return (
    <ul className={styNavBar}>
      <div className={stySidebarBrand}>SB Admin</div>
      <Accordion />
    </ul>
  );
};

export default Sidebar;
