import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { ActorCard } from '../../../components';
import { CastDataType } from '../MovieDetails';
import { useStyles } from './styles';
import { useNavigate } from 'react-router-dom';
import { calculateCast } from '../../../shared/helpers';

type MovieCastProps = {
  isCastExtended: boolean;
  cast: CastDataType[];
};

export const MovieCast = ({ isCastExtended, cast }: MovieCastProps) => {
  const classes = useStyles();
  const [castForShowing, setCastForShowing] = useState<CastDataType[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    setCastForShowing(calculateCast(isCastExtended, cast));
  }, [isCastExtended, cast]);

  const handleClick = (id: number) => navigate(`/person/${id}`);

  return (
    <Grid container spacing={4} className={classes.castWrapper}>
      {castForShowing &&
        castForShowing.map((actor) => (
          <Grid
            item
            xl={2}
            className={classes.actorCardWrapper}
            key={actor.id}
            onClick={() => handleClick(actor.id)}
          >
            <ActorCard
              character={actor.character}
              imageHeight="250px"
              name={actor.name}
              id={actor.id}
            />
          </Grid>
        ))}
    </Grid>
  );
};
