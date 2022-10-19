import React from 'react';
import { CardProps } from '../../../@types/card';
import { styCard, styCardBody, styCardHeader } from './styles';

const Card = (props: CardProps) => {
  const { header, children } = props;
  return (
    <div className={styCard}>
      <div className={styCardHeader}>{header}</div>
      <div className={styCardBody}>{children}</div>
    </div>
  );
};

export default Card;
