import { css } from '@emotion/css';
import { Colors } from '../../../utils';

export const styBtn = (
  isRounded: boolean,
  size: string,
  isLink?: boolean
) => css`
  font-size: 0.9375rem;
  line-height: 1;
  font-weight: 500;

  box-shadow: none;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;

  padding: ${size === 'large'
    ? '1rem 3rem'
    : size === 'small'
    ? '.25rem .5rem'
    : '.375rem .75rem'};

  border-radius: ${isRounded ? '50px' : '0.1875rem'};
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:not(:disabled) {
    cursor: pointer;
  }

  &:hover {
    text-decoration: ${isLink ? 'underline' : 'none'};
  }
`;

export const styBtnFw = css`
  min-width: 150px;
`;

export const styBtnBlock = css`
  display: block;
  width: 100%;
`;

export const styBtnBackground = (
  color: {
    backgroundColor: string;
    backgroundColorHover: string;
    borderColorHover: string;
    color?: string;
  },
  isOutline: boolean
) => css`
  background-color: ${isOutline ? 'transparent' : color.backgroundColor};
  border-color: ${color.backgroundColor};
  color: ${isOutline ? color.backgroundColor : color.color};

  &:hover {
    text-decoration: none;
    background-color: ${color.backgroundColorHover};
    color: ${color.color};
    border-color: ${color.borderColorHover};
  }

  &:focus,
  &.focus {
    color: ${Colors.light.backgroundColor};
    background-color: ${color.backgroundColorHover};
    border-color: ${color.borderColorHover};
  }
`;

export const styBtnLink = css`
  background-color: transparent;
  font-weight: 500;
  color: #007bff;
  text-decoration: none;

  &:hover {
    color: #0056b3;
    text-decoration: underline;
  }
`;

export const styBtnIc = css`
  width: 42px;
  height: 42px;
  padding: 0;
`;

export const styBtnIconSplit = css`
  padding: 0;
  display: inline-flex;
  align-items: stretch;
  justify-content: center;
  span {
    display: inline-block;
    padding: 0.375rem 0.75rem;
  }
`;

export const styBtnIcon = (isOutline: boolean) => css`
  background: ${!isOutline && 'rgba(0, 0, 0, 0.15)'};
  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
`;

export const styBtnSmall = css`
  border-radius: 0.1rem;
  span {
    display: inline-block;
    padding: 0.25rem 0.5rem;
  }
`;
