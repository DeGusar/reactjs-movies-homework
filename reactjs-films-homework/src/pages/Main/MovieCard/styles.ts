import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles (() => ({
  cardWrapper: {
    height: '350px',
    position: 'relative',
    backgroundColor: 'rgb(232,232,232)',
    cursor: 'pointer'
  },

  cardImage: {
    objectFit: 'cover',
    width: '100%',
    height: '100%'
  },

  lowRating: {
    position: 'absolute',
    width: '40px',
    height: '22px',
    top: '10px',
    left: '-10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    backgroundColor: 'rgb(170,170,170)'
  },

  highRating: {
    position: 'absolute',
    width: '40px',
    height: '22px',
    top: '10px',
    left: '-10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    backgroundColor: 'rgb(42,125,40)'
  },

  title: {
    paddingTop: '10px',
    color: 'rgb(185,185,185)'
  },
  genre: {
    paddingTop: '5px',
    color: 'rgb(185,185,185)'
  }
}))