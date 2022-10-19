import React from 'react';
import { IconProps } from '../../../@types/icon';
import { IcAddWhite, IcTrash } from '../../../assets';

const IconOnly = (props: IconProps) => {
  const { icon } = props;
  const Icon = () => {
    switch (icon) {
      case 'add':
        return <img src={IcAddWhite} alt="add" />;
      case 'trash':
        return <img src={IcTrash} alt="trash" />;
      default:
        return <img src={IcAddWhite} alt="add" />;
    }
  };
  return <Icon />;
};

export default IconOnly;
