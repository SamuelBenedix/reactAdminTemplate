import { css } from '@emotion/css';

export const styForm = css`
  min-height: 18px;
  padding-left: 1.25rem;

  position: relative;
  display: block;
`;

export const styFormLabel = css`
  display: block;
  padding-left: 0.625rem;
  font-size: 0.875rem;
  line-height: 1.5;
  color: #6c7293;
  vertical-align: top;
  margin-bottom: 0;
`;

export const styFormInput = css`
  position: absolute;
  top: 0;
  left: 0;
  margin-left: 0;
  margin-top: 0;
  z-index: 1;
  cursor: pointer;
  opacity: 0;
  filter: alpha(opacity=0);

  box-sizing: border-box;
  padding: 0;

  outline: none;
  outline-width: 0;
  outline-color: transparent;
  outline-style: none;

  &:focus {
  }
`;

export const styHelper = (isChecked: boolean, isDisable: boolean) => css`
  &:before {
    content: '';
    width: 16px;
    height: 16px;
    border-radius: 1px;
    border: ${isChecked ? '0' : '2'}px solid
      ${isDisable ? '#2c2e33' : ' #0090e7'};
    transition: all;
    transition-duration: 0s;
    transition-duration: 0.25s;
    position: absolute;
    top: 2px;
    left: 0;
    background: ${isChecked && isDisable
      ? '#2c2e33'
      : isChecked
      ? '#0090e7'
      : 'transparent'};

    opacity: ${isDisable ? '.3' : '1'};
  }

  &:after {
    transition: all;
    transition-duration: 0s;
    transition-duration: 0.25s;
    opacity: ${isChecked ? '1' : '0'};
    filter: alpha(opacity= ${isChecked ? '100' : '0'});
    transform: scale(${isChecked ? '1' : '0'});
    content: '\\2714';
    font-size: 1rem;
    font-weight: 700;
    color: #fff;
    position: absolute;
    left: 3px;
    top: -3px;
  }
`;
