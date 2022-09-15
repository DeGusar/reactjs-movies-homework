import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles (() => ({
  ul: {
    '& .MuiPaginationItem-root': {
       '&.Mui-selected': {
         background: 'green',
         color: 'white',
       },
    },
  },

  selectedButton: {
    color: 'black',
    textTransform: 'none',
    backgroundColor: 'white',
    border: '1px solid white',
  },

  gridContainer: {
    padding: '20px 0'
  },

  button: {
    backgroundColor: 'black',
    textTransform: 'none',
    border: '1px solid white',
    '&:active': {
      backgroundColor: 'white',
      color: 'black'
    },
    '&:hover': {
      backgroundColor: 'white',
      color: 'black',
    }
  },
  movieCard: {
    cursor: 'pointer'
  }
}))