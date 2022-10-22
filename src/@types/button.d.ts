import React from "react";
export interface ButtonProps {
 type: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link';
 size?: 'small' | 'medium' | 'large';
 children: React.ReactNode;
 isSplit?: boolean;
 icon?: string;
 isRounded?: boolean;
 isOutline?: boolean;
 isIcon?: boolean;
 isBlock?: boolean;
 onClick?: (event: React.MouseEvent) => void;
}