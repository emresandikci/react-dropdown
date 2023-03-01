import { createUseStyles } from 'react-jss';
import { defaultTheme } from 'utils';

export const useDropdownStyles = createUseStyles((theme: typeof defaultTheme) => ({
  dropdown: {
    position: 'relative',
    display: 'inline-block',
    minWidth: theme.maxWidth.md,
  },
  dropdownButton: {
    backgroundColor: theme.colors.white,
    border: `1px solid ${theme.colors.gray[400]}`,
    borderRadius: theme.borderRadius.lg,
    color: theme.colors.gray[700],
    display: 'inline-block',
    fontWeight: theme.fontWeight.medium,
    lineHeight: theme.lineHeight.none,
    padding: `${theme.spacing[2]} ${theme.spacing[4]}`,
    textAlign: 'left',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    minWidth: theme.maxWidth.md,
    cursor: 'pointer',
    '&:hover': {
      borderColor: theme.colors.blue[500],
      color: theme.colors.blue[900],
      boxShadow: `${theme.colors.blue[200]} 0px 0px 0px 3px;`,
    },
  },
  dropdownMenu: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing['1.5'],
    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRadius.xl,
    boxShadow: theme.boxShadow.xl,
    marginTop: theme.spacing[2],
    minWidth: theme.maxWidth.full,
    overflow: 'hidden',
    position: 'absolute',
    top: '100%',
    zIndex: theme.zIndex[10],
    padding: theme.spacing[2],
    maxHeight: 200,
    overflowY: 'auto',
    border: `1px solid ${theme.colors.gray[100]}`,
  },
  dropdownMenuItem: {
    display: 'block',
    padding: `${theme.spacing[2]} ${theme.spacing[4]}`,
    textDecoration: 'none',
    borderRadius: theme.borderRadius.xl,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.colors.blue[50],
    },
  },
  selected: {
    color: theme.colors.blue[500],
    background: theme.colors.blue[50],
    display: 'flex',
    justifyContent: 'space-between',
  },
  hidden: {
    display: 'none!important',
  },
  active: {
    borderColor: theme.colors.blue[500],
    color: theme.colors.blue[900],
    boxShadow: `${theme.colors.blue[200]} 0px 0px 0px 3px;`,
  },
}));
