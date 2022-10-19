import { css } from '@emotion/css';

export const styNavBar = css`
  background-color: #4e73df;
  background-image: linear-gradient(180deg, #4e73df 10%, #224abe 100%);
  background-size: cover;
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
  overflow-anchor: none;
  width: 6.5rem;
  min-height: 100vh;
  margin: 0;

  @media (min-width: 768px) {
    width: 14rem !important;
  }
`;

export const stySidebarBrand = css`
  color: #fff;
  height: 4.375rem;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 800;
  padding: 1.5rem 1rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
