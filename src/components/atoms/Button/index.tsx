import React, { useState, useEffect } from 'react';
import {
  styBtnBackground,
  styBtnIconSplit,
  styBtnIcon,
  styBtn,
  styBtnFw,
  styBtnLink,
  styBtnIc,
  styBtnBlock,
} from './styles';
import { cx } from '@emotion/css';
import { Colors } from '../../../utils';
import { ButtonProps } from '../../../@types/button';
import IconOnly from './iconOnly';

const Button = (props: ButtonProps) => {
  const {
    type,
    children,
    isSplit,
    icon,
    isBlock = false,
    isRounded = false,
    isOutline = false,
    size = 'medium',
    isIcon,
  } = props;
  const [typeColor, setTypeColor] = useState({
    color: '',
    backgroundColor: '',
    backgroundColorHover: '',
    borderColorHover: '',
  });

  const [icColor, setIcColor] = useState('#fff');
  const [isLoading, setIsLoading] = useState(false);

  const handleMouseEnter = () => {
    setIcColor(typeColor.color);
  };
  const handleMouseLeave = () => {
    setIcColor(isOutline ? typeColor.backgroundColor : typeColor.color);
  };

  useEffect(() => {
    setTypeColor(Colors[type]);
    setIcColor(
      isOutline ? Colors[type].backgroundColor : Colors[type]['color']
    );
    setIsLoading(true);
  }, [type, isOutline]);

  if (type === 'link') {
    return (
      <React.Fragment>
        {isLoading && (
          <button
            type="button"
            className={cx(
              styBtn(isRounded, size, type === 'link'),
              styBtnFw,
              styBtnLink
            )}
          >
            {children}
          </button>
        )}
      </React.Fragment>
    );
  }

  if (isSplit) {
    return (
      <React.Fragment>
        {isLoading && (
          <button
            className={cx(
              styBtn(isRounded, size),
              styBtnBackground(typeColor, isOutline),
              styBtnIconSplit
            )}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span className={styBtnIcon(isOutline)}>
              <IconOnly icon={icon} icColor={icColor} />
            </span>
            <span>{children}</span>
          </button>
        )}
      </React.Fragment>
    );
  }

  if (isIcon) {
    return (
      <React.Fragment>
        {isLoading && (
          <button
            className={cx(
              styBtn(isIcon, size),
              styBtnBackground(typeColor, isOutline),
              styBtnIc
            )}
            type="button"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <IconOnly icon={icon} icColor={icColor} />
          </button>
        )}
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      {isLoading && (
        <button
          type="button"
          className={
            isBlock
              ? cx(
                  styBtn(isRounded, size),
                  styBtnBackground(typeColor, isOutline),
                  styBtnBlock
                )
              : cx(
                  styBtn(isRounded, size),
                  styBtnBackground(typeColor, isOutline),
                  styBtnFw
                )
          }
        >
          {children}
        </button>
      )}
    </React.Fragment>
  );
};

export default Button;
