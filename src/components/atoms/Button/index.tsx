import React, { useState, useEffect } from 'react';
import {
  styBtnBackground,
  styBtnIconSplit,
  styBtnIcon,
  styBtnSmall,
  styBtn,
  styBtnFw,
  styBtnLink,
  styBtnIc,
} from './styles';
import { cx } from '@emotion/css';
import { Colors } from '../../../utils';
import { ButtonProps } from '../../../@types/button';
import IconOnly from './iconOnly';

const Button = (props: ButtonProps) => {
  const {
    type,
    text,
    isSplit,
    icon,
    isSmall,
    isLink,
    isRounded = false,
    isOutline = false,
    isIcon,
  } = props;
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
      case 'light':
        setTypeColor(Colors.light);
        break;
      case 'dark':
        setTypeColor(Colors.dark);
        break;
      default:
        setTypeColor(Colors.primary);
        break;
    }
  }, [type]);

  if (isLink) {
    return (
      <button
        type="button"
        className={cx(styBtn(isRounded), styBtnFw, styBtnLink)}
      >
        {text}
      </button>
    );
  }

  if (isIcon) {
    return (
      <button
        className={cx(
          styBtn(isIcon),
          styBtnBackground(typeColor, isOutline),
          styBtnIc
        )}
        type="button"
      >
        <IconOnly icon={icon} color={typeColor} isOutline={isOutline} />
      </button>
    );
  }

  if (isSplit) {
    return (
      <button
        className={
          isSmall
            ? cx(
                styBtn(isRounded),
                styBtnBackground(typeColor, isOutline),
                styBtnIconSplit,
                styBtnSmall
              )
            : cx(
                styBtn(isRounded),
                styBtnBackground(typeColor, isOutline),
                styBtnIconSplit
              )
        }
      >
        <span className={styBtnIcon}>
          <IconOnly icon={icon} color={typeColor} />
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
          ? cx(styBtnBackground(typeColor, isOutline), styBtnSmall)
          : cx(
              styBtn(isRounded),
              styBtnBackground(typeColor, isOutline),
              styBtnFw
            )
      }
    >
      {text}
    </button>
  );
};

export default Button;
