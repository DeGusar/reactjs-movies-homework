import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  imageWrapper: {
    pointerEvents: 'none'
  },

   showAllButton: {
    textTransform: 'none',
    color: "white",
    border: '1px solid white',
    padding: '2px 8px',
    '&:hover': {
      backgroundColor: 'white',
      color: 'black',
    }
  },

  imagesWrapper: {
    paddingTop: '40px'
  },

  recommendationsTitle: {
    marginTop: '30px'
  },

  recommendationsWrapper: {
    marginTop: '30px'
  }
}))