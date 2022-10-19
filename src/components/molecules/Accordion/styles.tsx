import { css } from '@emotion/css';

export const styNavItem = css`
  position: relative;
`;

export const styNavLink = css`
  color: rgba(255, 255, 255, 0.8);
  font-weight: 700;
  position: relative;
  background-color: transparent;
  border: 1px solid transparent;
  cursor: pointer;

  &:hover {
    color: #fff;
  }

  @media (min-width: 768px) {
    display: block;
    width: 100%;
    text-align: left;
    padding: 1rem;
    width: 14rem;
  }

  @media (min-width: 768px) &&::after {
    content: '\f105';
  }

  span {
    font-size: 0.65rem;
    display: block;
    @media (min-width: 768px) {
      font-size: 0.85rem;
      display: inline;
    }
  }
`;

export const styCollapse = css`
  position: absolute;
  left: calc(6.5rem + 1.5rem / 2);
  z-index: 1;
  display: none;

  @media (min-width: 768px) {
    position: relative;
    left: 0;
    z-index: 1;
    top: 0;
    animation: none;
  }

  @media (min-width: 768px) {
    margin: 0 1rem;
  }
`;

export const styCollapseShow = css`
  display: block;
`;

export const styCollapseInner = css`
  padding: 0.5rem 0.5rem;
  min-width: 10rem;
  font-size: 0.85rem;
  margin: 0 0 1rem 0;
  background-color: #fff;
  border-radius: 0.35rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  position: relative;
  display: block;
  opacity: 0;
  transition: all 2s linear;

  @media (min-width: 768px) {
    border-radius: 2;
    box-shadow: none;
  }
`;

export const styCollapseInnerShow = css`
  opacity: 1;
  transition: all 2s linear;
`;

export const styCollapseHeader = css`
  margin: 0;
  white-space: nowrap;
  padding: 0.5rem 1.5rem;
  text-transform: uppercase;
  font-weight: 800;
  font-size: 0.65rem;
  color: #b7b9cc;
`;
