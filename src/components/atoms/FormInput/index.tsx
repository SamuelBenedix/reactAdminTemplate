import React, { useState } from 'react';
import { InputProps } from '../../../@types/input';
import {
  styLabel,
  styForm,
  styInput,
  styFormFile,
  styCustomFileLabel,
} from './styles';

const FormInput = (props: InputProps) => {
  const {
    isHorizontal = false,
    type,
    label,
    children,
    rows,
    size = 'medium',
  } = props;
  const inputRef = React.useRef<any>(null);
  const [file, setFile] = useState('Upload File');

  const onChange = (event: any) => {
    const fileUploaded = event.target.files[0];
    setFile(fileUploaded.name);
  };

  if (type === 'file') {
    return (
      <div className={styForm(isHorizontal)}>
        <label htmlFor={label} className={styLabel(isHorizontal)}>
          {label}
        </label>
        <div className={styFormFile(isHorizontal)}>
          <input
            ref={inputRef}
            id={label}
            className={styInput(isHorizontal, type, size)}
            type={type}
            placeholder={label}
            onChange={onChange}
          />
          <label
            onClick={() => {
              inputRef.current.click();
            }}
            className={styCustomFileLabel}
          >
            {file}
          </label>
        </div>
      </div>
    );
  }

  if (type === 'select') {
    return (
      <div className={styForm(isHorizontal)}>
        <label htmlFor={label} className={styLabel(isHorizontal)}>
          {label}
        </label>
        <select id={label} className={styInput(isHorizontal, type, size)}>
          {children}
        </select>
      </div>
    );
  }

  if (type === 'textarea') {
    return (
      <div className={styForm(isHorizontal)}>
        <label htmlFor={label} className={styLabel(isHorizontal)}>
          {label}
        </label>
        <textarea
          rows={rows}
          id={label}
          className={styInput(isHorizontal, type, size)}
          placeholder={label}
        />
      </div>
    );
  }

  return (
    <div className={styForm(isHorizontal)}>
      <label htmlFor={label} className={styLabel(isHorizontal)}>
        {label}
      </label>
      <input
        id={label}
        className={styInput(isHorizontal, type, size)}
        type={type}
        placeholder={label}
      />
    </div>
  );
};

export default FormInput;
