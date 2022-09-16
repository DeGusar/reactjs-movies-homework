import { makeStyles } from "@mui/styles";

type PropsType = {
  imageHeight: string
}

export const useStyles = makeStyles((props: PropsType) => ({
  imageWrapper: (props: PropsType) => ({
    height: `${props.imageHeight}`,
    position: 'relative',
    backgroundColor: 'rgb(232,232,232)',
    borderRadius: '5px',
    marginBottom: '5px'
     }),

  actorImage: {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
    borderRadius: '5px'
  },
}))