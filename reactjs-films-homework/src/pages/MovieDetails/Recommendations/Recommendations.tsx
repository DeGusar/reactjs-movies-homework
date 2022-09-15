import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { MovieCard } from '../../../components';
import { useStyles } from './styles';

export type RecommendationsType = {
  popularity: string;
  id: number;
};

type RecommendationsPropsType = {
  recommendations: RecommendationsType[];
};

export const Recommendations = ({ recommendations }: RecommendationsPropsType) => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Grid container className={classes.recommendationsWrapper} columnSpacing={6}>
      {recommendations.map((card) => (
        <Grid xl={12 / 5} key={card.id} item>
          <MovieCard {...card} onClick={() => navigate(`/movie/${card.id}`)} imageHeight="400px" />
        </Grid>
      ))}
    </Grid>
  );
};
