import React from 'react';
import { Checkbox } from '../../components';
import { styTest } from './styles';

const Home = () => {
  return (
    <React.Fragment>
      <div className={styTest}>
        <Checkbox
          label="test"
          isChecked={false}
          isDisable={false}
          value={false}
        />
        <Checkbox
          label="test2"
          isChecked={true}
          isDisable={true}
          value={true}
        />
        <Checkbox
          label="test2"
          isChecked={true}
          isDisable={true}
          value={false}
        />
      </div>
    </React.Fragment>
  );
};

export default Home;
