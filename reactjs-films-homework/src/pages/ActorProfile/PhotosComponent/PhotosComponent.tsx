import { Box, Grid } from '@mui/material';
import { useStyles } from './styles';

type PhotosComponentPropsType = {
  images: string[];
};

export const PhotosComponent = ({ images }: PhotosComponentPropsType) => {
  const classes = useStyles();

  return (
    <Grid className={classes.imageWrapper} spacing={3} container>
      {images.map((imageSrc, index) => (
        <Grid xl={2} className={classes.imageItem} item key={index}>
          <Box className={classes.image} component="img" src={imageSrc} />
        </Grid>
      ))}
    </Grid>
  );
};
