import React from 'react';
import { IcProps } from '../../@types/ic';

const icCheck = (props: IcProps) => {
  const { fill = '#fff', alt, stroke } = props;

  return (
    <span role={alt}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="check_24px">
          <path
            id="icon/navigation/check_24px"
            d="M7.32923 13.2292L3.85423 9.75417L2.6709 10.9292L7.32923 15.5875L17.3292 5.58751L16.1542 4.41251L7.32923 13.2292Z"
            fill={fill}
            stroke={stroke}
          />
        </g>
      </svg>
    </span>
  );
};

export default icCheck;
