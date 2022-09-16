import { Box, Typography } from '@mui/material';
import { useStyles } from './styles';

type ActorCardProps = {
  isShowDescription?: boolean;
  character?: string;
  name: string;
  imageHeight: string;
  id: number;
};

export const ActorCard = ({
  isShowDescription = true,
  character,
  name,
  imageHeight,
}: ActorCardProps) => {
  const classes = useStyles({ imageHeight });

  return (
    <>
      <Box className={classes.imageWrapper}>
        <Box
          component="img"
          src="https://res.cloudinary.com/rss-collection/image/upload/v1662977903/calendar/413-4138963_unknown-person-unknown-person-png_va69je.jpg"
          className={classes.actorImage}
        />
      </Box>

      {isShowDescription && (
        <>
          <Typography data-testid="actor-name">{name}</Typography>
          <Typography data-testid="actor-character">{`"${character}"`}</Typography>
        </>
      )}
    </>
  );
};
