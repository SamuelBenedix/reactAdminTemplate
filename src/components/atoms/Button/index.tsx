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

  const [icColorNew, setIcColorNew] = useState('#fff');

  const handleMouseEnter = () => {
    setIcColorNew(typeColor.color);
    console.log(icColorNew);
  };
  const handleMouseLeave = () => {
    setIcColorNew(isOutline ? typeColor.backgroundColor : typeColor.color);
    console.log(icColorNew);
  };

  useEffect(() => {
    switch (type) {
      case 'primary':
        setTypeColor(Colors.primary);
        setIcColorNew(
          isOutline ? Colors.primary.backgroundColor : Colors.primary.color
        );
        break;
      case 'secondary':
        setTypeColor(Colors.secondary);
        setIcColorNew(
          isOutline ? Colors.secondary.backgroundColor : Colors.secondary.color
        );
        break;
      case 'info':
        setTypeColor(Colors.info);
        setIcColorNew(
          isOutline ? Colors.info.backgroundColor : Colors.info.color
        );
        break;
      case 'danger':
        setTypeColor(Colors.danger);
        setIcColorNew(
          isOutline ? Colors.danger.backgroundColor : Colors.danger.color
        );
        break;
      case 'warning':
        setTypeColor(Colors.warning);
        setIcColorNew(
          isOutline ? Colors.warning.backgroundColor : Colors.warning.color
        );
        break;
      case 'success':
        setTypeColor(Colors.success);
        setIcColorNew(
          isOutline ? Colors.success.backgroundColor : Colors.success.color
        );
        break;
      case 'light':
        setTypeColor(Colors.light);
        setIcColorNew(
          isOutline ? Colors.light.backgroundColor : Colors.light.color
        );
        break;
      case 'dark':
        setTypeColor(Colors.dark);
        setIcColorNew(
          isOutline ? Colors.dark.backgroundColor : Colors.dark.color
        );
        break;
      default:
        setTypeColor(Colors.primary);
        setIcColorNew(
          isOutline ? Colors.primary.backgroundColor : Colors.primary.color
        );
        break;
    }
  }, [type, isOutline]);

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
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <IconOnly
          icon={icon}
          color={typeColor}
          isOutline={isOutline}
          icColor={icColorNew}
        />
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
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span className={styBtnIcon}>
          <IconOnly icon={icon} color={typeColor} icColor={icColorNew} />
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
