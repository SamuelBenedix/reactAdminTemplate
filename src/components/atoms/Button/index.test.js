import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './index.tsx';
import { Colors } from '../../../utils';

describe('Button', () => {
  test('Should render a button with the class of primary with text', async () => {
    const { container } = render(<Button type="primary" children="primary" />);

    const primaryButton = screen.getByRole('button');
    expect(primaryButton).toHaveStyle(
      `background-color: ${Colors.primary.backgroundColor};
       color: ${Colors.primary.color};
      `
    );

    const btnText = screen.getByText(/primary/i);
    expect(btnText).toBeInTheDocument();

    expect(container).toBeInTheDocument();
  });

  test('Should render a button with the class of secondary with text', () => {
    const { container } = render(
      <Button type="secondary" children="secondary" />
    );
    const secondaryButton = screen.getByRole('button');
    expect(secondaryButton).toHaveStyle(
      `background-color: ${Colors.secondary.backgroundColor};
       color: ${Colors.secondary.color};
       `
    );

    const btnText = screen.getByText(/secondary/i);
    expect(btnText).toBeInTheDocument();

    expect(container).toBeInTheDocument();
  });

  test('Should render a button with the class of danger with text', () => {
    const { container } = render(<Button type="danger" children="Danger" />);
    const dangerButton = screen.getByRole('button');
    expect(dangerButton).toHaveStyle(
      `background-color: ${Colors.danger.backgroundColor};
       color: ${Colors.danger.color};
      `
    );

    const btnText = screen.getByText(/danger/i);
    expect(btnText).toBeInTheDocument();

    expect(container).toBeInTheDocument();
  });

  test('Should render a button with the class of info with text', () => {
    const { container } = render(<Button type="info" children="Info" />);

    const infoButton = screen.getByRole('button');
    expect(infoButton).toHaveStyle(
      `background-color: ${Colors.info.backgroundColor};
       color: ${Colors.info.color};
      `
    );

    const btnText = screen.getByText(/info/i);
    expect(btnText).toBeInTheDocument();

    expect(container).toBeInTheDocument();
  });

  test('Should render a button with the class of warning with text', () => {
    const { container } = render(<Button type="warning" children="warning" />);

    const warningButton = screen.getByRole('button');
    expect(warningButton).toHaveStyle(
      `background-color: ${Colors.warning.backgroundColor};
       color: ${Colors.warning.color};
      `
    );

    const btnText = screen.getByText(/warning/i);
    expect(btnText).toBeInTheDocument();

    expect(container).toBeInTheDocument();
  });

  test('Should render a button with the class of success with text', () => {
    const { container } = render(<Button type="success" children="success" />);

    const successButton = screen.getByRole('button');
    expect(successButton).toHaveStyle(
      `background-color: ${Colors.success.backgroundColor};
       color: ${Colors.success.color};
      `
    );

    const btnText = screen.getByText(/success/i);
    expect(btnText).toBeInTheDocument();

    expect(container).toBeInTheDocument();
  });

  test('Should render a button with the class of link', () => {
    const { container } = render(<Button type="link" children="link" />);

    const successButton = screen.getByRole('button');
    expect(successButton).toHaveStyle(
      `background-color: ${Colors.link.backgroundColor};
       color: ${Colors.link.color};
      `
    );

    const btnText = screen.getByText(/link/i);
    expect(btnText).toBeInTheDocument();

    expect(container).toBeInTheDocument();
  });

  test('Should render a button with the class of primary with text and Icon', () => {
    render(<Button type="primary" children="Add" isSplit icon="trash" />);

    const iconWrapper = screen.getByRole('trash');
    expect(iconWrapper).toBeInTheDocument();
  });

  test('Should render a button with the class of success with text on rounded', () => {
    const { container } = render(
      <Button type="success" children="success" isRounded />
    );

    const successButton = screen.getByRole('button');
    expect(successButton).toHaveStyle(
      `background-color: ${Colors.success.backgroundColor};
       color: ${Colors.success.color};
       border-radius : 50px;
      `
    );

    const btnText = screen.getByText(/success/i);
    expect(btnText).toBeInTheDocument();

    expect(container).toBeInTheDocument();
  });

  test('Should render a button with the class of success with text on big', () => {
    const { container } = render(
      <Button type="success" children="success" size="large" />
    );

    const successButton = screen.getByRole('button');
    expect(successButton).toHaveStyle(
      `background-color: ${Colors.success.backgroundColor};
       color: ${Colors.success.color};
       padding:1rem 3rem;
      `
    );

    const btnText = screen.getByText(/success/i);
    expect(btnText).toBeInTheDocument();

    expect(container).toBeInTheDocument();
  });

  test('Should render a button with the class of success with text on small', () => {
    const { container } = render(
      <Button type="success" children="success" size="small" />
    );

    const successButton = screen.getByRole('button');
    expect(successButton).toHaveStyle(
      `background-color: ${Colors.success.backgroundColor};
       color: ${Colors.success.color};
       padding:.25rem .5rem;
      `
    );

    const btnText = screen.getByText(/success/i);
    expect(btnText).toBeInTheDocument();

    expect(container).toBeInTheDocument();
  });

  test('Should render a button with the class of success with text on medium', () => {
    const { container } = render(
      <Button type="success" children="success" size="medium" />
    );

    const successButton = screen.getByRole('button');
    expect(successButton).toHaveStyle(
      `background-color: ${Colors.success.backgroundColor};
       color: ${Colors.success.color};
       padding:.375rem .75rem;
      `
    );

    const btnText = screen.getByText(/success/i);
    expect(btnText).toBeInTheDocument();

    expect(container).toBeInTheDocument();
  });

  test('Should render a button with the class of success icon', () => {
    const { container } = render(
      <Button type="success" size="large" isIcon icon="trash" />
    );

    const successButton = screen.getByRole('button');
    expect(successButton).toHaveStyle(
      `background-color: ${Colors.success.backgroundColor};
       color: ${Colors.success.color};
      `
    );

    const iconWrapper = screen.getByRole('trash');
    expect(iconWrapper).toBeInTheDocument();

    expect(container).toBeInTheDocument();
  });

  test('Should render a button with the class of success block', () => {
    const { container } = render(
      <Button type="success" size="large" children="success" isBlock />
    );

    const successButton = screen.getByRole('button');
    expect(successButton).toHaveStyle(
      `background-color: ${Colors.success.backgroundColor};
       color: ${Colors.success.color};
       width:100%;
      `
    );

    const btnText = screen.getByText(/success/i);
    expect(btnText).toBeInTheDocument();

    expect(container).toBeInTheDocument();
  });

  test('Should render a button with the class of success block rounded', () => {
    const { container } = render(
      <Button
        type="success"
        size="large"
        children="success"
        isBlock
        isRounded
      />
    );

    const successButton = screen.getByRole('button');
    expect(successButton).toHaveStyle(
      `background-color: ${Colors.success.backgroundColor};
       color: ${Colors.success.color};
       width:100%;
       border-radius:50px;
      `
    );

    const btnText = screen.getByText(/success/i);
    expect(btnText).toBeInTheDocument();

    expect(container).toBeInTheDocument();
  });
});
