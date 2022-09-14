/* eslint-disable react-hooks/exhaustive-deps */
import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { ActorCard } from '../../../components';
import { CastDataType } from '../MovieDetails';
import { useStyles } from './styles';

type MovieCastProps = {
  isCastExtended: boolean;
  cast: CastDataType[];
};

export const MovieCast = ({ isCastExtended, cast }: MovieCastProps) => {
  const classes = useStyles();
  const [castForShowing, setCastForShowing] = useState<CastDataType[]>([]);

  useEffect(() => {
    if (isCastExtended || cast.length <= 7) {
      setCastForShowing([...cast]);
    } else {
      setCastForShowing(cast.slice(0, 6));
    }
  }, [isCastExtended]);

  return (
    <Grid container spacing={4} className={classes.castWrapper}>
      {castForShowing &&
        castForShowing.map((actor) => (
          <Grid item xl={2} key={actor.id}>
            <ActorCard
              character={actor.character}
              imageHeight="250px"
              actorName={actor.name}
              id={actor.id}
            />
          </Grid>
        ))}
    </Grid>
  );
};
