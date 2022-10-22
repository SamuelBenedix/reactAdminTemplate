import { css } from '@emotion/css';

export const styDropdownMenu = css`
  position: absolute;

  top: 90%;
  left: 0;
  z-index: 1000;

  visibility: hidden;
  opacity: 0;

  float: left;
  min-width: 10rem;
  padding: 0.5rem 0;
  margin: 0.125rem 0 0;
  font-size: 1rem;
  color: #fff;
  text-align: left;
  list-style: none;
  background-color: #191c24;
  background-clip: padding-box;
  border: 1px solid #2c2e33;
  border-radius: 0.25rem;

  right: auto;
  bottom: auto;
`;

export const styDropdownMenuShow = (
  elementPosition: boolean,
  size: string
) => css`
  margin-top: 0.75rem;
  font-size: 0.875rem;
  box-shadow: none;

  position: absolute;
  will-change: transform;

  visibility: visible;
  transition: visibility 1s, opacity 0.5s linear;
  opacity: 1;

  transform: translate3d(
    5px,
    ${!elementPosition ? (size === 'large' ? '-130px' : '-100px') : '0px'},
    0px
  );

  display: block;
`;
