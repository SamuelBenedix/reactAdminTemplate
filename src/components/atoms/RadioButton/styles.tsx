import { css } from '@emotion/css';

export const styLabel = css`
  display: block;
  font-size: 1rem;
  line-height: 1.5;
  color: #6c7293;
`;

export const styWrapper = css`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const styInput = (color: {
  backgroundColor: string;
  backgroundColorHover: string;
}) => css`
  appearance: none;
  border: 2px solid ${color.backgroundColor};
  background-color: #fff;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  transition: all;
  transition-duration: 0s;
  transition-duration: 0.25s;

  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 8px;
    height: 8px;
    margin: 3px;
  }

  &:hover {
    ::after {
      background-color: ${color.backgroundColorHover};
    }
  }

  &:focus {
    outline: 2px solid ${color.backgroundColor};
  }

  &:checked {
    background-color: ${color.backgroundColor};
    ::after {
      background-color: #fff;
    }

    :hover {
      background-color: #fff;
      border: 2px solid ${color.backgroundColorHover};
      ::after {
        background-color: ${color.backgroundColor};
      }
    }
  }

  &:disabled {
    cursor: not-allowed;
    border: 2px solid ${color.backgroundColor};
    background-color: #e1fff4;
    :hover {
      ::after {
        background-color: #cdc3de;
      }
    }
    :checked {
      ::after {
        background-color: ${color.backgroundColor};
      }
      :hover {
        background-color: #cdc3de;
        ::after {
          background-color: ${color.backgroundColorHover};
        }
      }
    }
  }
`;
