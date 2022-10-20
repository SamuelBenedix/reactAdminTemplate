import { injectGlobal } from '@emotion/css';

injectGlobal`
  * {
    box-sizing: border-box;
  }

  button{
    display: inline-block;
    color: #fff;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    border-radius: 0.1875rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
 
`;
