import { Grid } from '@mui/material';
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
  return (
    <Grid container className={classes.recommendationsWrapper} columnSpacing={6}>
      {recommendations.map((card) => (
        <Grid xl={12 / 5} item>
          <MovieCard {...card} imageHeight="400px" />
        </Grid>
      ))}
    </Grid>
  );
};
