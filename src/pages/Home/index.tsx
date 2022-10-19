import React from 'react';
import { Button } from '../../components/atoms';

const Home = () => {
  return (
    <div>
      <Button type="primary" text="Add New Small" isSplit icon="add" isSmall />
      <Button type="primary" text="Add New  Big" isSplit icon="add" />
    </div>
  );
};

export default Home;
