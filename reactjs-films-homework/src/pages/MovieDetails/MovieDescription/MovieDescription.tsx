import { Stack, Typography } from '@mui/material';
import { calculateMovieDuration } from '../../../shared/helpers';
import { Genres } from '../Genres/Genres';
import { useStyles } from './styles';

const genres = ['Movie', 'Horror', 'Detective'];

export const MovieDescription = () => {
  const classes = useStyles();

  return (
    <>
      <Stack className={classes.descriptionItem}>
        <Typography variant="body2">Title:</Typography>
        <Typography variant="h4">Movie Title</Typography>
      </Stack>
      <Stack className={classes.descriptionItem}>
        <Typography variant="body2">Overview:</Typography>
        <Typography variant="body1">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non animi sint a eveniet vel
          rerum cupiditate est quam nisi magni sequi, laboriosam magnam ex provident repellat
          officiis! Quo, natus nam.
        </Typography>
      </Stack>
      <Stack className={classes.descriptionItem}>
        <Typography variant="body2">Release date:</Typography>
        <Typography variant="body1">2021-05-26</Typography>
      </Stack>
      <Stack className={classes.descriptionItem}>
        <Typography variant="body2">Revenue:</Typography>
        <Typography variant="body1">$ 123456789</Typography>
      </Stack>
      <Stack className={classes.descriptionItem}>
        <Typography variant="body2">Duration:</Typography>
        <Typography variant="body1">{calculateMovieDuration(139)}</Typography>
      </Stack>
      <Stack direction="row" spacing={1} className={classes.descriptionItem}>
        <Genres genres={genres} />
      </Stack>
    </>
  );
};
