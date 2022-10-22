import React, { useState, useEffect } from 'react';
import {
  styBtnBackground,
  styBtnIconSplit,
  styBtnIcon,
  styBtn,
  styBtnFw,
  styBtnIc,
  styBtnBlock,
  styBtnGroup,
} from './styles';
import { cx } from '@emotion/css';
import { Colors } from '../../../utils';
import { ButtonProps } from '../../../@types/button';
import IconOnly from './iconOnly';

const Button = (props: ButtonProps) => {
  const {
    variant,
    children,
    isSplit,
    icon,
    isBlock = false,
    isRounded = false,
    isOutline = false,
    isDropdown = false,
    size = 'medium',
    isIcon,
    onClick,
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
    setTypeColor(Colors[variant]);
    setIcColor(
      isOutline ? Colors[variant].backgroundColor : Colors[variant]['color']
    );
    setIsLoading(true);
  }, [variant, isOutline]);

  if (isSplit) {
    if (isDropdown) {
      return (
        <React.Fragment>
          {isLoading && (
            <div className={styBtnGroup}>
              <button
                aria-label="dropdown"
                className={cx(
                  styBtn(isRounded, size),
                  styBtnBackground(typeColor, isOutline, variant),
                  styBtnIconSplit
                )}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <span>{children}</span>
              </button>
              <button
                onClick={onClick}
                className={cx(
                  styBtn(isRounded, size),
                  styBtnBackground(typeColor, isOutline, variant),
                  styBtnIconSplit
                )}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <span />
              </button>
            </div>
          )}
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        {isLoading && (
          <button
            onClick={onClick}
            className={cx(
              styBtn(isRounded, size),
              styBtnBackground(typeColor, isOutline, variant),
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
            aria-label={!isDropdown ? 'dropdown' : ''}
            onClick={onClick}
            className={
              !isDropdown
                ? cx(
                    styBtn(isIcon, size),
                    styBtnBackground(typeColor, isOutline, variant),
                    styBtnIc
                  )
                : cx(
                    styBtn(false, size),
                    styBtnBackground(typeColor, isOutline, variant)
                  )
            }
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
          onClick={onClick}
          type="button"
          className={
            isBlock
              ? cx(
                  styBtn(isRounded, size, true),
                  styBtnBackground(typeColor, isOutline, variant),
                  styBtnBlock
                )
              : cx(
                  styBtn(isRounded, size, isDropdown),
                  styBtnBackground(typeColor, isOutline, variant),
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
