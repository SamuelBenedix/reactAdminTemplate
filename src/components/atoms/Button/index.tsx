import React, { useState, useEffect } from 'react';
import {
  styButton,
  styBtnBackground,
  styBtnIconSplit,
  styBtnIcon,
  styBtnSmall,
} from './styles';
import { cx } from '@emotion/css';
import { Colors } from '../../../utils';
import { ButtonProps } from '../../../@types/button';
import IconOnly from './iconOnly';

const Button = (props: ButtonProps) => {
  const { type, text, isSplit, icon, isSmall } = props;
  const [typeColor, setTypeColor] = useState(Colors.primary);

  useEffect(() => {
    switch (type) {
      case 'primary':
        setTypeColor(Colors.primary);
        break;
      case 'secondary':
        setTypeColor(Colors.secondary);
        break;
      case 'info':
        setTypeColor(Colors.info);
        break;
      case 'danger':
        setTypeColor(Colors.danger);
        break;
      case 'warning':
        setTypeColor(Colors.warning);
        break;
      case 'success':
        setTypeColor(Colors.success);
        break;
      default:
        setTypeColor(Colors.primary);
        break;
    }
  }, [type]);

  if (isSplit) {
    return (
      <button
        className={
          isSmall
            ? cx(
                styButton,
                styBtnBackground(typeColor),
                styBtnIconSplit,
                styBtnSmall
              )
            : cx(styButton, styBtnBackground(typeColor), styBtnIconSplit)
        }
      >
        <span className={styBtnIcon}>
          <IconOnly icon={icon} />
        </span>
        <span>{text}</span>
      </button>
    );
  }

  return (
    <button
      type="button"
      className={
        isSmall
          ? cx(styBtnBackground(typeColor), styBtnSmall)
          : cx(styButton, styBtnBackground(typeColor))
      }
    >
      {text}
    </button>
  );
};

export default Button;
