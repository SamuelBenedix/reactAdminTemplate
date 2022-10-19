import React from 'react';
import { SubMenu } from '../../atoms';
import { styContainer, styNavLink } from './styles';

const Accordion = () => {
  return (
    <div className={styContainer}>
      <button className={styNavLink}>
        <span>Component</span>
      </button>
      <div>
        <h6>Custom Component</h6>
        <SubMenu />
        <SubMenu />
      </div>
    </div>
  );
};

export default Accordion;
