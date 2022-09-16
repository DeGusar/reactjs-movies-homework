import { Box, Paper, Stack, Typography } from '@mui/material';
import { useStyles } from './styles';

type MovieCardProps = {
  popularity: string;
  id: number;
  imageHeight: string;
  isShowDescription?: boolean;
  onClick?: () => void;
};

export const MovieCard = ({
  popularity,
  id,
  imageHeight,
  isShowDescription = true,
  onClick,
}: MovieCardProps) => {
  const classes = useStyles({ imageHeight });
  const minimalValueOfHighRating = 7;

  return (
    <>
      <Box className={classes.cardWrapper}>
        <Box
          component="img"
          src="https://kinopoiskapiunofficial.tech/images/posters/kp/328.jpg"
          onClick={onClick}
          className={classes.cardImage}
        ></Box>
        <Paper
          className={
            Number(popularity) >= minimalValueOfHighRating ? classes.highRating : classes.lowRating
          }
          data-testid="movie-card-rating"
        >
          {popularity}
        </Paper>
      </Box>
      {isShowDescription && (
        <>
          <Typography data-testid="movie-card-title" className={classes.title}>
            MovieTitle
          </Typography>
          <Stack>
            <Typography data-testid="movie-card-genre" className={classes.genre}>
              Genre
            </Typography>
          </Stack>
        </>
      )}
    </>
  );
};
