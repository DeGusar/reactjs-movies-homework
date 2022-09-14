import { Box, Paper, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useStyles } from './styles';

type MovieCardProps = {
  popularity: string;
  id: number;
  imageHeight: string;
  isDescription?: boolean;
};

export const MovieCard = ({
  popularity,
  id,
  imageHeight,
  isDescription = true,
}: MovieCardProps) => {
  const classes = useStyles({ imageHeight });
  const navigate = useNavigate();

  const handleClick = () => navigate(`/movie/${id}`);

  return (
    <>
      <Box className={classes.cardWrapper} onClick={handleClick}>
        <Box
          component="img"
          src="https://kinopoiskapiunofficial.tech/images/posters/kp/328.jpg"
          className={classes.cardImage}
        ></Box>
        <Paper className={Number(popularity) >= 7 ? classes.highRating : classes.lowRating}>
          {popularity}
        </Paper>
      </Box>
      {isDescription && (
        <>
          <Typography className={classes.title}>MovieTitle</Typography>
          <Stack>
            <Typography className={classes.genre}>Genre</Typography>
          </Stack>
        </>
      )}
    </>
  );
};
