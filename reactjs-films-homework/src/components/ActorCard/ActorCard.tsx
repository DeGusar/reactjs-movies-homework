import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useStyles } from './styles';

type ActorCardProps = {
  isDescription?: boolean;
  character: string;
  actorName: string;
  imageHeight: string;
  id: number;
};

export const ActorCard = ({
  isDescription = true,
  character,
  actorName,
  imageHeight,
  id,
}: ActorCardProps) => {
  const classes = useStyles({ imageHeight });
  const navigate = useNavigate();
  const handleClick = () => navigate(`/person/${id}`);

  return (
    <>
      <Box className={classes.imageWrapper}>
        <Box
          component="img"
          src="https://res.cloudinary.com/rss-collection/image/upload/v1662977903/calendar/413-4138963_unknown-person-unknown-person-png_va69je.jpg"
          className={classes.actorImage}
          onClick={handleClick}
        />
      </Box>

      {isDescription && (
        <>
          <Typography>{actorName}</Typography>
          <Typography>{`"${character}"`}</Typography>
        </>
      )}
    </>
  );
};
