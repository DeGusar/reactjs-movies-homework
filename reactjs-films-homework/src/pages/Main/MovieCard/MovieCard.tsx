import { Box, Paper, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useStyles } from './styles';
import Image from 'material-ui-image';

type MovieCardProps = {
  popularity: String;
  id: Number;
};

export const MovieCard = ({ popularity, id }: MovieCardProps) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleClick = () => navigate(`/person/${id}`);

  return (
    <>
      <Box className={classes.cardWrapper} onClick={handleClick}>
        <Box
          component="img"
          src="https://kinopoiskapiunofficial.tech/images/posters/kp/328.jpg"
          className={classes.cardImage}
        ></Box>
        <Paper className={Number(popularity) > 7 ? classes.highRating : classes.lowRating}>
          {popularity}
        </Paper>
      </Box>
      <Typography className={classes.title}>MovieTitle</Typography>
      <Stack>
        <Typography className={classes.genre}>Genre</Typography>
      </Stack>
    </>
  );
};
