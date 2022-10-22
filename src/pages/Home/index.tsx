import React from 'react';
import { Button, Dropdown } from '../../components';
import { styTest } from './styles';

const Home = () => {
  return (
    <React.Fragment>
      <div className={styTest}></div>
      <Dropdown variant="primary" text="Dropdown" isUp size="large">
        <Dropdown.Header children="title" />
        <Dropdown.Item onClick={() => {}} children="test" />
      </Dropdown>
      <Button
        onClick={() => {}}
        icon="trash"
        isIcon
        variant="primary"
        children="test"
      />
      <div className={styTest}></div>
    </React.Fragment>
  );
};

export default Home;
