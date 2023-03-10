import { useRef, useState } from 'react';
import { useDropdownStyles } from './styles';
import { ReactComponent as IconCaret } from 'assets/icons/caret.svg';
import { useOnClickOutside } from 'hooks';
export interface IOption {
  label: string;
  value: string;
}

export interface IDropdownProps {
  options: IOption[];
  placeholder?: string;
  onChange?: (value: IOption) => void;
}

const Dropdown: React.FC<IDropdownProps> = ({
  options,
  placeholder = 'Select an option',
  onChange,
  ...props
}) => {
  const classes = useDropdownStyles();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<IOption | null>(null);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(dropdownRef, () => setIsOpen(false));

  const handleDropdownClick = () => setIsOpen((state) => !state);

  const handleOptionClick = (option: IOption) => {
    if (onChange) onChange(option);
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className={classes.dropdown} ref={dropdownRef} {...props}>
      <button
        className={`${classes.dropdownButton} ${isOpen ? classes.active : ''}`}
        onClick={handleDropdownClick}
      >
        <span>{selectedOption ? selectedOption.label : placeholder}</span>
        <IconCaret
          className={`${classes.iconCarot} ${isOpen ? classes.iconCarotUp : classes.iconCarotDown}`}
        />
      </button>
      <ul className={`${classes.dropdownMenu} ${!isOpen ? classes.hidden : ''}`}>
        {options.map((option) => (
          <li
            key={option.value}
            className={`${classes.dropdownMenuItem} ${
              option.value === selectedOption?.value && classes.selected
            }`}
            onClick={() => handleOptionClick(option)}
          >
            <span>{option.label} </span>
            {selectedOption?.value === option.value && <span>&#10003;</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
