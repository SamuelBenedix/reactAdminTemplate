import { css } from '@emotion/css';

export const styForm = (isHorizontal: boolean) => css`
  margin-bottom: 1rem;

  ${isHorizontal &&
  `
   display: flex;
   flex-wrap: wrap;
   margin-right: -.75rem;
   margin-left: -.75rem;
   `}
`;

export const styLabel = (isHorizontal: boolean) => css`
  font-size: 0.875rem;
  line-height: 1;
  vertical-align: top;
  display: inline-block;
  margin-bottom: 0.5rem;
  ${isHorizontal &&
  `
  position: relative;
  width: 100%;
  padding-right: .75rem;
  padding-left: .75rem;

  padding-top: calc(.56rem + 1px);
  padding-bottom: calc(.56rem + 1px);
  margin-bottom: 0;
  @media (min-width: 576px){
    flex: 0 0 25%;
    max-width: 25%;
   }
  `}
`;

export const styInput = (
  isHorizontal: boolean,
  type: string,
  size: string
) => css`
  display: block;
  width: 100%;
  line-height: 1;
  background-clip: padding-box;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  border: 1px solid #2c2e33;
  ${type === 'textarea' ? '' : 'height: calc(2.25rem + 2px)'};
  font-weight: 400;
  font-size: 0.875rem;
  padding: 0.625rem 0.6875rem;
  background-color: #2a3038;
  border-radius: 2px;
  color: #fff;

  outline: none;
  outline-width: 0;
  outline-color: transparent;
  box-shadow: none;
  outline-style: none;

  &:focus {
    border: 1px solid rgba(71, 164, 71, 0.5);
    background-color: #2a3038;
  }

  ${size === 'large'
    ? `
  padding: .94rem .75rem;
  height: calc(2.875rem + 2px);`
    : size === 'small' &&
      `
  padding: .5rem .75rem;
  height: calc(1.8125rem + 2px);
  `}

  ${type === 'textarea' &&
  `
  resize: none;
  overflow-x: hidden;
  margin: 0;
  font-family: inherit;
  overflow: auto;
  height: auto;
  flex-direction: column;
  cursor: auto;
  overflow-wrap: break-word;
  appearance: auto;
  font-style: -webkit-small-control;
  font-variant-caps: -webkit-small-control;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  text-align: start;
  resize: none;
`}

  ${isHorizontal &&
  `
   position: relative;
   width: 100%;
   padding-right: .75rem;
   padding-left: .75rem;
   
   @media (min-width: 576px){
   flex: 0 0 75%;
   max-width: 75%;
   }
`}
`;

export const styFormFile = (isHorizontal: boolean) => css`
  position: relative;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  display: inline-block;
  margin-bottom: 0;

  input {
    visibility: hidden;
  }

  ${isHorizontal &&
  `
     position: relative;
     width: 100%;
     padding-right: .75rem;
     padding-left: .75rem;
     
     @media (min-width: 576px){
     flex: 0 0 75%;
     max-width: 75%;
     }
  `}
`;

export const styCustomFileLabel = css`
  background: #2a3038;
  height: calc(1.5em + 0.75rem + 4px);
  font-weight: 400;
  font-size: 0.875rem;
  padding: 0.625rem 0.6875rem;
  border-radius: 2px;

  line-height: 1;
  vertical-align: center;

  position: absolute;
  top: 0;
  right: 0;
  left: 0;

  color: #495057;

  z-index: 1;
  border-radius: 0 0.25rem 0.25rem 0;

  display: inline-block;
  margin-bottom: 0.5rem;
  &:hover:after {
    color: #fff;
    background-color: #0078c1;
    border-color: #0070b4;
  }
  &::after {
    transition: background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    height: auto;
    color: #fff;
    background-color: #0090e7;
    border-color: #0090e7;
    bottom: 0;
    z-index: 3;
    display: block;
    content: 'Browse';
    border-left: inherit;
    border-radius: 0 0.25rem 0.25rem 0;

    position: absolute;
    top: 0;
    right: 0;
    padding: 0.375rem 0.75rem;
    line-height: 1.5;
  }
`;
