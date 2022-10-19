import { css } from '@emotion/css';
import { Colors } from '../../../utils';

export const styButton = css`
  display: inline-block;
  font-weight: 400;
  color: #858796;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.35rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  margin: 0;
  overflow: visible;
  cursor: pointer;

  &:focus:not(:focus-visible) {
    outline: 0;
  }

  &:not(:disabled) {
    cursor: pointer;
  }
`;

export const styBtnBackground = (color: {
  normal: string;
  hover: string;
  boxShadow: string;
  borderColor: string;
}) => css`
  background-color: ${color.normal};
  border-color: ${color.normal};
  color: ${Colors.light.normal};

  &:hover {
    text-decoration: none;
    background-color: ${color.hover};
    color: ${Colors.light.normal};
    border-color: ${color.borderColor};
  }

  &:focus,
  &.focus {
    color: ${Colors.light.normal};
    background-color: ${color.hover};
    border-color: ${color.borderColor};
    box-shadow: 0 0 0 0.2rem ${color.boxShadow};
  }
`;

export const styBtnIconSplit = css`
  padding: 0;
  overflow: hidden;
  display: inline-flex;
  align-items: stretch;
  justify-content: center;
  span {
    display: inline-flex;
    padding: 0.375rem 0.75rem;
  }
`;

export const styBtnIcon = css`
  background: rgba(0, 0, 0, 0.15);
`;
