
export interface ButtonProps {
 type?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
 text: string;
 isSplit?: boolean;
 icon?: string;
 isSmall?: boolean;
 isLink?: boolean;
 isRounded?: boolean;
 isOutline?: boolean;
 isIcon?: boolean;
}