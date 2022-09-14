import { Box } from '@mui/material';
import { useStyles } from './styles';

type GenresPropsType = {
  genres: string[];
};

export const Genres = ({ genres }: GenresPropsType) => {
  const classes = useStyles();

  return (
    <>
      {genres.map((genre: string) => (
        <Box component="span" key={genre} className={classes.genreTag}>
          {genre}
        </Box>
      ))}
    </>
  );
};
