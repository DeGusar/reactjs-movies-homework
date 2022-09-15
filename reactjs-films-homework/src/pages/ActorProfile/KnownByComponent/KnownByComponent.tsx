import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { MovieCard } from '../../../components';
import { useStyles } from './styles';

export type KnownByComponentType = {
  popularity: string;
  id: number;
};

type RecommendationsPropsType = {
  knownByMovies: KnownByComponentType[];
};

export const KnownByComponent = ({ knownByMovies }: RecommendationsPropsType) => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Grid container className={classes.knownByWrapper} columnSpacing={6} rowSpacing={3}>
      {knownByMovies.map((movie) => (
        <Grid key={movie.id} xl={12 / 5} item>
          <MovieCard
            {...movie}
            onClick={() => navigate(`/movie/${movie.id}`)}
            imageHeight="400px"
          />
        </Grid>
      ))}
    </Grid>
  );
};
