import React from "react";

export interface InputProps {
 isHorizontal?: boolean;
 type: 'password' | 'text' | 'email' | 'select' | 'file' | 'textarea';
 label: string;
 children?: React.ReactNode;
 rows?: number;
 size?: 'small' | 'medium' | 'large';
}