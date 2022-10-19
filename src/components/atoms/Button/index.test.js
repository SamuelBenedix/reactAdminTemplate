import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './index.tsx';
import { Colors } from '../../../utils';

describe('Button', () => {
  test('Should render a button with the class of primary with text', () => {
    const { container } = render(<Button type="primary" text="primary" />);

    const primaryButton = screen.getByRole('button');
    expect(primaryButton).toHaveStyle(
      `background-color: ${Colors.primary.normal};`
    );

    const btnText = screen.getByText(/primary/i);
    expect(btnText).toBeInTheDocument();

    expect(container).toBeInTheDocument();
  });

  test('Should render a button with the class of secondary with text', () => {
    const { container } = render(<Button type="secondary" text="secondary" />);
    const secondaryButton = screen.getByRole('button');
    expect(secondaryButton).toHaveStyle(
      `background-color: ${Colors.secondary.normal};`
    );

    const btnText = screen.getByText(/secondary/i);
    expect(btnText).toBeInTheDocument();

    expect(container).toBeInTheDocument();
  });

  test('Should render a button with the class of danger with text', () => {
    const { container } = render(<Button type="danger" text="Danger" />);
    const dangerButton = screen.getByRole('button');
    expect(dangerButton).toHaveStyle(
      `background-color: ${Colors.danger.normal};`
    );

    const btnText = screen.getByText(/danger/i);
    expect(btnText).toBeInTheDocument();

    expect(container).toBeInTheDocument();
  });

  test('Should render a button with the class of info with text', () => {
    const { container } = render(<Button type="info" text="Info" />);

    const infoButton = screen.getByRole('button');
    expect(infoButton).toHaveStyle(`background-color: ${Colors.info.normal};`);

    const btnText = screen.getByText(/info/i);
    expect(btnText).toBeInTheDocument();

    expect(container).toBeInTheDocument();
  });

  test('Should render a button with the class of warning with text', () => {
    const { container } = render(<Button type="warning" text="warning" />);

    const warningButton = screen.getByRole('button');
    expect(warningButton).toHaveStyle(
      `background-color: ${Colors.warning.normal};`
    );

    const btnText = screen.getByText(/warning/i);
    expect(btnText).toBeInTheDocument();

    expect(container).toBeInTheDocument();
  });

  test('Should render a button with the class of success with text', () => {
    const { container } = render(<Button type="success" text="success" />);

    const successButton = screen.getByRole('button');
    expect(successButton).toHaveStyle(
      `background-color: ${Colors.success.normal};`
    );

    const btnText = screen.getByText(/success/i);
    expect(btnText).toBeInTheDocument();

    expect(container).toBeInTheDocument();
  });

  test('Should render a button with the class of primary with text and Icon', () => {
    render(<Button type="primary" text="Add" isSplit icon="add" />);

    const altText = screen.getByAltText('add');
    expect(altText).toBeInTheDocument();
  });
});
