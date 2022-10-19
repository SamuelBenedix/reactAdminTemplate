import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './index.tsx';
import { Colors } from '../../../utils';

test('Should render button with text', () => {
  const { container, getByText } = render(
    <Button type="primary">Button</Button>
  );

  // eslint-disable-next-line testing-library/prefer-screen-queries
  expect(getByText(/button/i)).toBeInTheDocument();
  expect(container).toBeInTheDocument();
});

test('Should render a button with the class of primary', () => {
  render(<Button type="primary" />);
  const primaryButton = screen.getByRole('button');
  expect(primaryButton).toHaveStyle(
    `background-color: ${Colors.primary.normal};`
  );
});

test('Should render a button with the class of secondary', () => {
  render(<Button type="secondary" />);
  const primaryButton = screen.getByRole('button');
  expect(primaryButton).toHaveStyle(
    `background-color: ${Colors.secondary.normal};`
  );
});
