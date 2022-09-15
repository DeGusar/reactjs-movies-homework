import { Stack, Typography } from '@mui/material';
import { useStyles } from './styles';

type ActorDescriptionPropsType = {
  name: string;
  birthday: string;
  biography: string;
  place_of_birth: string;
};

export const ActorDescription = ({
  name,
  place_of_birth,
  birthday,
  biography,
}: ActorDescriptionPropsType) => {
  const classes = useStyles();

  return (
    <>
      <Stack className={classes.descriptionItem}>
        <Typography variant="h4">{name}</Typography>
      </Stack>
      <Stack className={classes.descriptionItem}>
        <Typography variant="body2">Birthday:</Typography>
        <Typography variant="body1">{birthday}</Typography>
      </Stack>
      <Stack className={classes.descriptionItem}>
        <Typography variant="body2">Place of birth:</Typography>
        <Typography variant="body1">{place_of_birth}</Typography>
      </Stack>
      <Stack className={classes.descriptionItem}>
        <Typography variant="body2">Biography:</Typography>
        <Typography variant="body1">{biography}</Typography>
      </Stack>
    </>
  );
};
