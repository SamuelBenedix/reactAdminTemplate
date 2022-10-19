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
      <button onClick={onClick} className={styNavLink}>
        <span>Component</span>
      </button>
      <div className={active ? cx(styCollapse, styCollapseShow) : styCollapse}>
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
