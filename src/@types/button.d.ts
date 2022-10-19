
export interface ButtonProps {
 type: 'primary' | 'secondary' | 'info' | 'warning' | 'danger' | 'success';
 text: string;
 isSplit?: boolean;
 icon?: string;
}