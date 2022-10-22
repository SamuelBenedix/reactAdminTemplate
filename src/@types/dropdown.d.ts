import React from "react";
export interface DropdownProps {
 variant: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link';
 size?: 'small' | 'medium' | 'large';
 children: React.ReactNode;
 isSplit?: boolean;
 icon?: string;
 isRounded?: boolean;
 isOutline?: boolean;
 isIcon?: boolean;
 isBlock?: boolean;
 text: React.ReactNode;
}