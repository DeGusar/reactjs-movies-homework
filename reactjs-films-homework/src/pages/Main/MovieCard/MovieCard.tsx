import { Box, Paper, Stack, Typography } from '@mui/material';
import { useStyles } from './styles';

type MovieCardProps = {
  movieRating: String;
};

export const MovieCard = ({ movieRating }: MovieCardProps) => {
  const classes = useStyles();
  console.log(movieRating);

  return (
    <>
      <Paper className={classes.cardWrapper} elevation={0}>
        <Paper className={+movieRating > 7 ? classes.highRating : classes.lowRating}>
          {movieRating}
        </Paper>
      </Paper>
      <Typography className={classes.title}>MovieTitle</Typography>
      <Stack>
        <Typography className={classes.genre}>Genre</Typography>
      </Stack>
    </>
  );
};
