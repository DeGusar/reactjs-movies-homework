import { Box, Paper, Stack, Typography } from '@mui/material';
import { useStyles } from './styles';

type MovieCardProps = {
  popularity: string;
  id: number;
  imageHeight: string;
  isDescription?: boolean;
  onClick?: () => void;
};

export const MovieCard = ({
  popularity,
  id,
  imageHeight,
  isDescription = true,
  onClick
}: MovieCardProps) => {
  const classes = useStyles({ imageHeight });
  return (
    <>
      <Box className={classes.cardWrapper}>
        <Box
          component="img"
          src="https://kinopoiskapiunofficial.tech/images/posters/kp/328.jpg"
          onClick={onClick}
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
