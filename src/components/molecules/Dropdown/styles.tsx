import { css } from '@emotion/css';

export const styDropdown = (isUp: boolean) => css`
  display: inline-block;
  position: relative;

  button:first-child:not([aria-label='dropdown'])::after {
    display: inline-block;
    margin-left: 0.255em;
    vertical-align: 0.255em;
    content: '';
    border-top: ${isUp ? '0' : '.3em solid'};
    border-right: 0.3em solid transparent;
    border-bottom: ${isUp ? '.3em solid' : '0'};
    border-left: 0.3em solid transparent;
  }

  button:last-child:not([aria-label='dropdown']) span::after {
    display: inline-block;
    margin-left: 0.255em;
    vertical-align: 0.255em;
    content: '';
    border-top: ${isUp ? '0' : '.3em solid'};
    border-right: 0.3em solid transparent;
    border-bottom: ${isUp ? '.3em solid' : '0'};
    border-left: 0.3em solid transparent;
  }
`;

export const styDropdownMenu = css`
  position: absolute;

  top: 100%;
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

export const styDropdownMenuShow = css`
  position: absolute;
  will-change: transform;
  top: 5px;
  left: 0px;

  visibility: visible;
  transition: visibility 1s, opacity 0.5s linear;
  opacity: 1;

  transform: translate3d(0px, 29px, 0px);
  display: block;
`;

export const styDropdownHeader = css`
  display: block;
  padding: 0.2rem 1.5rem;
  margin-bottom: 0;
  font-size: 0.7rem;
  color: #fff;
  white-space: nowrap;
`;
