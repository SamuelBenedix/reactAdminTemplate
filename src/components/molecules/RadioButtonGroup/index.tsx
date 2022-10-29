import { IOption, IOptionGroup } from '../../../@types/radiobutton';
import { RadioButton } from '../../atoms';
import { styLegend, styFieldSet, styWrapper } from './styles';

const RadioButtonGroup = ({
  label,
  options,
  onChange,
  variant,
}: IOptionGroup) => {
  function renderOptions() {
    return options.map(({ label, name, isDisabled }: IOption, index) => {
      const shortenedOptionLabel = label.replace(/\s+/g, '');
      const optionId = `radio-option-${shortenedOptionLabel}`;

      return (
        <RadioButton
          value={label}
          label={label}
          variant={variant}
          key={optionId}
          id={optionId}
          name={name}
          isDisabled={isDisabled}
          defaultChecked={index === 0}
          onChange={onChange}
        />
      );
    });
  }

  return (
    <div className={styFieldSet}>
      <div className={styLegend}>{label}</div>
      <div className={styWrapper}>{renderOptions()}</div>
    </div>
  );
};
export default RadioButtonGroup;
