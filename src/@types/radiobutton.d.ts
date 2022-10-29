import { InputHTMLAttributes } from "react";

export interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
 label: string;
 id: string;
 key: string;
 isDisabled?: boolean;
 variant: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
}

export interface IOption {
 label: string;
 name?: string;
 isDisabled?: boolean;
}

export interface IOptionGroup {
 label: string;
 options: IOption[];
 variant: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
 onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}