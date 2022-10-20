import React from 'react';
import { Accordion, Card, Sidebar, SubMenu, Button } from '../../components';

const Home = () => {
  return (
    <React.Fragment>
      <Button type="primary" text="Primary" isRounded />
      <Button type="secondary" text="Primary" />
      <Button type="success" text="Primary" isOutline />
      <Button type="danger" text="Primary" isOutline />
      <Button type="warning" text="Primary" />
      <Button type="info" text="Primary" />
      <Button type="light" text="Primary" />
      <Button type="dark" text="Primary" isOutline />
      <Button text="Primary" isLink />
      <Button text="Primary" type="danger" isIcon icon="trash" />
      <Button text="Primary" type="danger" isIcon isOutline icon="trash" />
    </React.Fragment>
  );
};

export default Home;
