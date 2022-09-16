import { Button, ButtonGroup, Grid, Pagination, Stack } from '@mui/material';
import { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useStyles } from './styles';
import { MovieCard } from '../../components/';
import { useNavigate } from 'react-router-dom';

export const Main = () => {
  const navigate = useNavigate();

  const classes = useStyles();
  const [selectedBtn, setSelectedBtn] = useState(1);
  const movies = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  return (
    <>
      <Stack direction="row" justifyContent="end">
        <ButtonGroup color="inherit" aria-label="outlined primary button group">
          <Button
            value="Popular"
            className={selectedBtn === 1 ? classes.selectedButton : classes.button}
            onClick={() => setSelectedBtn(1)}
          >
            <FormattedMessage id="main-button-popular" />
          </Button>
          <Button
            value="Top rated"
            className={selectedBtn === 2 ? classes.selectedButton : classes.button}
            onClick={() => setSelectedBtn(2)}
          >
            <FormattedMessage id="main-button-top-rated" />
          </Button>
          <Button
            value="Upcoming"
            className={selectedBtn === 3 ? classes.selectedButton : classes.button}
            onClick={() => setSelectedBtn(3)}
          >
            <FormattedMessage id="main-button-upcoming" />
          </Button>
        </ButtonGroup>
      </Stack>
      <Grid rowSpacing={2} columnSpacing={7} className={classes.gridContainer} container>
        {movies.map((elem) => (
          <Grid item key={elem} xs={12} md={6} xl={12 / 5}>
            <MovieCard
              popularity="6"
              id={1234}
              onClick={() => navigate(`/movie/1234`)}
              imageHeight="350px"
            />
          </Grid>
        ))}
      </Grid>
      <Stack direction="row" justifyContent="center">
        <Pagination
          classes={{ root: classes.ul }}
          color="secondary"
          count={5}
          hidePrevButton
          hideNextButton
        />
      </Stack>
    </>
  );
};
