import { useEffect, useRef, useState } from 'react';
import { useDropdownStyles } from './styles';

export interface IOption {
  label: string;
  value: string;
}

export interface IDropdownProps {
  options: IOption[];
  label?: string;
  value?: string;
  placeholder?: string;
  onChange?: (value: IOption) => void;
}

const Dropdown: React.FC<IDropdownProps> = ({
  options,
  placeholder = 'Select an option',
  onChange,
}) => {
  const classes = useDropdownStyles();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<IOption | null>(null);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener('click', (event) => {
      const element = dropdownRef.current;
      if (element && element?.contains(event.target as Node)) return;
      setIsOpen(false);
    });
  }, []);

  const handleDropdownClick = () => setIsOpen((state) => !state);

  const handleOptionClick = (option: IOption) => {
    if (onChange) onChange(option);
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className={classes.dropdown} ref={dropdownRef}>
      <button
        className={`${classes.dropdownButton} ${isOpen ? classes.active : ''}`}
        onClick={handleDropdownClick}
      >
        {selectedOption ? selectedOption.label : placeholder}
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
