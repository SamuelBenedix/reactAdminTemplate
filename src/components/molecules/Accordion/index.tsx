import React, { useState } from 'react';
import { SubMenu } from '../../atoms';
import { cx } from '@emotion/css';
import {
  styNavLink,
  styNavItem,
  styCollapse,
  styCollapseInner,
  styCollapseHeader,
  styCollapseShow,
  styCollapseInnerShow,
} from './styles';

const Accordion = () => {
  const [active, setActive] = useState(false);

  const onClick = () => setActive(!active);

  return (
    <li className={styNavItem}>
      <button
        onClick={onClick}
        className={styNavLink}
        data-toggle="collapse"
        data-target="test"
        aria-expanded="true"
        aria-controls="test"
      >
        <span>Component</span>
      </button>
      <div
        id="test"
        className={active ? cx(styCollapse, styCollapseShow) : styCollapse}
        data-parent="#accordionSidebar"
        aria-labelledby="headingTwo"
      >
        <div
          className={
            active
              ? cx(styCollapseInner, styCollapseInnerShow)
              : styCollapseInner
          }
        >
          <h6 className={styCollapseHeader}>Custom Component</h6>
          <SubMenu />
          <SubMenu />
        </div>
      </div>
    </li>
  );
};

export default Accordion;
