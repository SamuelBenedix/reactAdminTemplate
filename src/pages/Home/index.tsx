import React from 'react';
import { Dropdown } from '../../components';

const Home = () => {
  return (
    <React.Fragment>
      <Dropdown
        variant="primary"
        text="Dropdown"
        size="large"
        isSplit
        icon="trash"
      >
        <Dropdown.Header children="title" />
        <Dropdown.Item onClick={() => {}} children="test" />
      </Dropdown>
      <Dropdown variant="primary" text="Dropdown" size="medium">
        <Dropdown.Header children="title" />
        <Dropdown.Item onClick={() => {}} children="test" />
      </Dropdown>
      <Dropdown variant="primary" text="Dropdown" isOutline size="small">
        <Dropdown.Header children="title" />
        <Dropdown.Item onClick={() => {}} children="test" />
      </Dropdown>
    </React.Fragment>
  );
};

export default Home;
