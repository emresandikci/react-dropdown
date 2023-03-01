import { createUseStyles } from 'react-jss';

export const useAppStyles = createUseStyles({
  '@global': {
    body: {
      margin: 0,
      padding: 0,
    },
    '*': {
      boxSizing: 'border-box',
    },
  },
  app: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
});
