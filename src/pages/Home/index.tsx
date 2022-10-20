import React from 'react';
import { Button } from '../../components';

const Home = () => {
  return (
    <React.Fragment>
      <Button type="primary" children="Primary" isRounded />
      <Button type="secondary" children="Primary" size="small" isBlock />
      <Button type="success" children="Primary" isOutline isBlock />
      <Button type="danger" children="Primary" isOutline size="small" />
      <Button
        type="warning"
        children="Primary"
        size="large"
        isBlock
        isRounded
      />
      <Button type="info" children="Primary" size="small" />
      <Button type="light" children="Primary" />
      <Button type="dark" children="Primary" isOutline />
      <Button type="link" children="Primary" />
      <Button children="Primary" type="danger" isIcon icon="trash" />
      <Button type="dark" isIcon icon="trash" isOutline>
        test
      </Button>

      <Button isSplit type="danger" isIcon icon="trash" isOutline>
        test
      </Button>
    </React.Fragment>
  );
};

export default Home;
