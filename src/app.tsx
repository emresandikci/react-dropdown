import { useAppStyles } from 'app.styles';
import { Dropdown } from 'components';
import { IOption } from 'components/dropdown';

function App() {
  const options: IOption[] = Array.from({ length: 10 }).map((_, index) => ({
    label: `option ${index + 1}`,
    value: index.toString(),
  }));

  const styles = useAppStyles();

  return (
    <div className={styles.app}>
      <Dropdown options={options} />
    </div>
  );
}

export default App;
