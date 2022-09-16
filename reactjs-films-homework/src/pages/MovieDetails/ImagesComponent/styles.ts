import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  imageWrapper: {
   paddingTop: '10px'
  },

  imageItem: {
    borderRadius: '5px'
  },

  image: {
    objectFit: 'cover',
    width: '100%',
    height: '200px',
    borderRadius: '5px'
  }
}))