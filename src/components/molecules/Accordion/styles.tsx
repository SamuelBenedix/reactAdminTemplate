import { css } from '@emotion/css';

export const styContainer = css`
  background-color: blue;
`;

export const styNavLink = css`
  color: #fff;
  font-weight: 700;
  position: relative;
  background-color: transparent;
  border: 1px solid transparent;
  cursor: pointer;

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
`;
