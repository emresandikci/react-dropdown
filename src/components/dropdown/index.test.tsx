import { render, fireEvent } from '@testing-library/react';
import Dropdown, { IOption } from 'components/dropdown';
import { ThemeProvider } from 'react-jss';
import { defaultTheme } from 'utils';

const options: IOption[] = Array.from({ length: 10 }).map((_, index) => ({
  label: `option ${index + 1}`,
  value: index.toString(),
}));

const renderComponent = (component: JSX.Element) => {
  return render(<ThemeProvider theme={defaultTheme}>{component}</ThemeProvider>);
};

describe('Dropdown', () => {
  test('displays placeholder text when no option is selected', () => {
    const { getByText } = renderComponent(<Dropdown options={options} />);
    expect(getByText('Select an option')).toBeInTheDocument();
  });

  test('calls onChange handler when an option is selected', () => {
    const handleChange = jest.fn();
    const { getByText } = renderComponent(<Dropdown options={options} onChange={handleChange} />);
    const option = options[2];
    fireEvent.click(getByText('Select an option'));
    fireEvent.click(getByText(option.label));
    expect(handleChange).toHaveBeenCalledWith(option);
  });
});
