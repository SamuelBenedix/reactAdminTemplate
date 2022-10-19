import React from 'react';
import { IconProps } from '../../../@types/icon';
import { IcAddWhite } from '../../../assets';

const IconOnly = (props: IconProps) => {
  const { icon } = props;
  const Icon = () => {
    switch (icon) {
      case 'add':
        return <img src={IcAddWhite} alt="icon add" />;
      default:
        return <img src={IcAddWhite} alt="icon add" />;
    }
  };
  return <Icon />;
};

export default IconOnly;
