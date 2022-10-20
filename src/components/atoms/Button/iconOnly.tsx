import React from 'react';
import { IconProps } from '../../../@types/icon';
import { IcTrash } from '../../../assets';
// import { IcAddWhite, IcTrash } from '../../../assets';

const IconOnly = (props: IconProps) => {
  const { icon, color, isOutline = false } = props;
  const Icon = () => {
    switch (icon) {
      case 'add':
        return <div>test</div>;
      case 'trash':
        return (
          <IcTrash
            stroke="none"
            fill={isOutline ? color.backgroundColor : color.color}
          />
        );
      default:
        return <div>test</div>;
    }
  };
  return <Icon />;
};

export default IconOnly;
