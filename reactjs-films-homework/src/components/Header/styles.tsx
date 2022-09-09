import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  container: {
    maxWidth: '1860px',
  },

  logo: {
    cursor: 'pointer',
  },

  picker: {
    padding: '3px 10px',
    border: '1px solid white',
    fontWeight: '700',
  },

  input: {
    marginLeft: 10,
    flex: 1,
  },

  paperActive: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '400px',
    marginLeft: '40px',
    transition: 'all 1s',
    '@media (max-width:1200px)': {
      margin: '10px',
      width: '300px',
    },
  },
}));
