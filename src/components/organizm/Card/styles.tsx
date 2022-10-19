import { css } from '@emotion/css';

export const styCard = css`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid #e3e6f0;
  border-radius: 0.35rem;
`;

export const styCardHeader = css`
  border-radius: calc(0.35rem - 1px) calc(0.35rem - 1px) 0 0;
  padding: 0.75rem 1.25rem;
  margin-bottom: 0;
  background-color: #f8f9fc;
  border-bottom: 1px solid #e3e6f0;
`;

export const styCardBody = css`
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1.25rem;
`;
