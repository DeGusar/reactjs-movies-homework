import { Box, Grid } from '@mui/material';
import { useStyles } from './styles';

type ImagesComponentPropsType = {
  images: string[];
};

export const ImagesComponent = ({ images }: ImagesComponentPropsType) => {
  const classes = useStyles();

  return (
    <Grid className={classes.imageWrapper} spacing={3} container>
      {images.map((imageSrc, index) => (
        <Grid xl={3} className={classes.imageItem} item key={index}>
          <Box className={classes.image} component="img" src={imageSrc} />
        </Grid>
      ))}
    </Grid>
  );
};
