import React, { useState } from 'react';
import { Checkbox, RadioButton, RadioButtonGroup } from '../../components';
import { styTest } from './styles';

const Home = () => {
  const drinks = [
    {
      label: 'Coffee',
      name: 'drink-types',
    },
    {
      label: 'Tea',
      name: 'drink-types',
    },
  ];
  const [selectedValue, setSelectedValue] = useState<String>(drinks[0].label);

  function drinkSelectionHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setSelectedValue(event.target.value);
  }

  return (
    <React.Fragment>
      <div className={styTest}>
        <RadioButtonGroup
          label="Select your drink:"
          options={drinks}
          onChange={drinkSelectionHandler}
          variant="primary"
        />

        <RadioButtonGroup
          label="Select your drink:"
          options={drinks}
          onChange={drinkSelectionHandler}
          variant="danger"
        />

        <Checkbox
          label="check"
          isChecked={false}
          value={false}
          isDisable={false}
          variant="danger"
        />
      </div>
    </React.Fragment>
  );
};

export default Home;
