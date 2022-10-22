import React from 'react';
import { IconProps } from '../../../@types/icon';
import { IcTrash } from '../../../assets';

const IconOnly = (props: IconProps) => {
  const { icon, icColor } = props;

  const Icon = () => {
    switch (icon) {
      case 'add':
        return <div>test</div>;
      case 'trash':
        return <IcTrash stroke="none" fill={icColor} alt="trash" />;
      default:
        return <IcTrash stroke="none" fill={icColor} alt="trash" />;
    }
  };
  return <Icon />;
};

export default IconOnly;
