import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Grid, Stack, Typography } from '@mui/material';
import { Recommendations } from './Recommendations/Recommendations';
import { MovieCard } from '../../components';
import { MovieCast } from './MovieCast/MovieCast';
import { ImagesComponent } from './ImagesComponent/ImagesComponent';
import { MovieDescription } from './MovieDescription/MovieDescription';
import { RecommendationsType } from './Recommendations/Recommendations';
import { useStyles } from './styles';

export type CastDataType = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
};

export const MovieDetails = () => {
  const classes = useStyles();
  const { id: movieId } = useParams();

  const [isCastExtended, setCastExtended] = useState(false);

  const cast = [
    {
      adult: false,
      gender: 2,
      id: 819,
      known_for_department: 'Acting',
      name: 'Edward Norton',
      original_name: 'Edward Norton',
      popularity: 7.861,
      profile_path: '/5XBzD5WuTyVQZeS4VI25z2moMeY.jpg',
      cast_id: 4,
      character: 'The Narrator',
      credit_id: '52fe4250c3a36847f80149f3',
      order: 0,
    },
    {
      adult: false,
      gender: 2,
      id: 287,
      known_for_department: 'Acting',
      name: 'Brad Pitt',
      original_name: 'Brad Pitt',
      popularity: 20.431,
      profile_path: '/cckcYc2v0yh1tc9QjRelptcOBko.jpg',
      cast_id: 5,
      character: 'Tyler Durden',
      credit_id: '52fe4250c3a36847f80149f7',
      order: 1,
    },
    {
      adult: false,
      gender: 1,
      id: 1283,
      known_for_department: 'Acting',
      name: 'Helena Bonham Carter',
      original_name: 'Helena Bonham Carter',
      popularity: 14.399,
      profile_path: '/mW1NolxQmPE16Zg6zuWyZlFgOwL.jpg',
      cast_id: 6,
      character: 'Marla Singer',
      credit_id: '52fe4250c3a36847f80149fb',
      order: 2,
    },
    {
      adult: false,
      gender: 2,
      id: 7470,
      known_for_department: 'Acting',
      name: 'Meat Loaf',
      original_name: 'Meat Loaf',
      popularity: 2.67,
      profile_path: '/k9tJGdMkzOe17YH2ZCQjNnX5YLz.jpg',
      cast_id: 7,
      character: 'Robert "Bob" Paulson',
      credit_id: '52fe4250c3a36847f80149ff',
      order: 3,
    },
    {
      adult: false,
      gender: 2,
      id: 7499,
      known_for_department: 'Acting',
      name: 'Jared Leto',
      original_name: 'Jared Leto',
      popularity: 7.845,
      profile_path: '/ca3x0OfIKbJppZh8S1Alx3GfUZO.jpg',
      cast_id: 30,
      character: 'Angel Face',
      credit_id: '52fe4250c3a36847f8014a51',
      order: 4,
    },
    {
      adult: false,
      gender: 2,
      id: 7471,
      known_for_department: 'Acting',
      name: 'Zach Grenier',
      original_name: 'Zach Grenier',
      popularity: 2.829,
      profile_path: '/fSyQKZO39sUsqY283GXiScOg3Hi.jpg',
      cast_id: 31,
      character: 'Richard Chesler',
      credit_id: '52fe4250c3a36847f8014a55',
      order: 5,
    },
    {
      adult: false,
      gender: 2,
      id: 7497,
      known_for_department: 'Acting',
      name: 'Holt McCallany',
      original_name: 'Holt McCallany',
      popularity: 4.303,
      profile_path: '/a5ax2ICLrV6l0T74OSFvzssCQyQ.jpg',
      cast_id: 32,
      character: 'The Mechanic',
      credit_id: '52fe4250c3a36847f8014a59',
      order: 6,
    },
    {
      adult: false,
      gender: 2,
      id: 7498,
      known_for_department: 'Acting',
      name: 'Eion Bailey',
      original_name: 'Eion Bailey',
      popularity: 5.407,
      profile_path: '/hKqfGq1sPhZdQOlto0bS3igFZdP.jpg',
      cast_id: 33,
      character: 'Ricky',
      credit_id: '52fe4250c3a36847f8014a5d',
      order: 7,
    },
    {
      adult: false,
      gender: 2,
      id: 7472,
      known_for_department: 'Acting',
      name: 'Richmond Arquette',
      original_name: 'Richmond Arquette',
      popularity: 2.797,
      profile_path: '/qpKZQn71Fwk6Gm1WZHL9IpVmcyO.jpg',
      cast_id: 34,
      character: 'Intern',
      credit_id: '52fe4250c3a36847f8014a61',
      order: 8,
    },
    {
      adult: false,
      gender: 2,
      id: 7219,
      known_for_department: 'Acting',
      name: 'David Andrews',
      original_name: 'David Andrews',
      popularity: 4.348,
      profile_path: '/36LEerIIN7gpG52mM3Ier7YWDbh.jpg',
      cast_id: 35,
      character: 'Thomas',
      credit_id: '52fe4250c3a36847f8014a65',
      order: 9,
    },
    {
      adult: false,
      gender: 1,
      id: 68277,
      known_for_department: 'Acting',
      name: 'Christina Cabot',
      original_name: 'Christina Cabot',
      popularity: 1.672,
      profile_path: '/h1vwbOfITSvDvDq8E9MVvWqMYSr.jpg',
      cast_id: 36,
      character: 'Group Leader',
      credit_id: '52fe4250c3a36847f8014a69',
      order: 10,
    },
    {
      adult: false,
      gender: 2,
      id: 956719,
      known_for_department: 'Acting',
      name: 'Tim DeZarn',
      original_name: 'Tim DeZarn',
      popularity: 2.687,
      profile_path: '/AmY8QpXyWUCOX4SewTVytjqD8rz.jpg',
      cast_id: 37,
      character: 'Inspector Bird',
      credit_id: '52fe4250c3a36847f8014a6d',
      order: 11,
    },
    {
      adult: false,
      gender: 2,
      id: 59285,
      known_for_department: 'Acting',
      name: 'Ezra Buzzington',
      original_name: 'Ezra Buzzington',
      popularity: 2.254,
      profile_path: '/j3kJRKgQdHAMXvJUtPHXJsGGW5X.jpg',
      cast_id: 38,
      character: 'Inspector Dent',
      credit_id: '52fe4250c3a36847f8014a71',
      order: 12,
    },
    {
      adult: false,
      gender: 2,
      id: 17449,
      known_for_department: 'Acting',
      name: 'Bob Stephenson',
      original_name: 'Bob Stephenson',
      popularity: 2.695,
      profile_path: '/AczLnt4baxBT4gqSroSjCqD7S9D.jpg',
      cast_id: 39,
      character: 'Airport Security Officer',
      credit_id: '52fe4250c3a36847f8014a75',
      order: 13,
    },
    {
      adult: false,
      gender: 2,
      id: 56112,
      known_for_department: 'Acting',
      name: 'David Lee Smith',
      original_name: 'David Lee Smith',
      popularity: 3.371,
      profile_path: '/hktppGThiKu30lcGW9CicNuinhc.jpg',
      cast_id: 40,
      character: 'Walter',
      credit_id: '52fe4250c3a36847f8014a79',
      order: 14,
    },
    {
      adult: false,
      gender: 2,
      id: 42824,
      known_for_department: 'Acting',
      name: 'Carl Ciarfalio',
      original_name: 'Carl Ciarfalio',
      popularity: 0.732,
      profile_path: '/yADROfK7uJkmd8p3GyjxH8WZqRL.jpg',
      cast_id: 42,
      character: "Lou's Body Guard",
      credit_id: '52fe4250c3a36847f8014a81',
      order: 15,
    },
    {
      adult: false,
      gender: 2,
      id: 40277,
      known_for_department: 'Writing',
      name: 'Stuart Blumberg',
      original_name: 'Stuart Blumberg',
      popularity: 1.4,
      profile_path: null,
      cast_id: 43,
      character: 'Car Salesman',
      credit_id: '52fe4251c3a36847f8014a85',
      order: 16,
    },
    {
      adult: false,
      gender: 2,
      id: 122805,
      known_for_department: 'Acting',
      name: 'Mark Fite',
      original_name: 'Mark Fite',
      popularity: 1.435,
      profile_path: '/qUbqKE14GAUdRhYqNcGzDkt1yi9.jpg',
      cast_id: 44,
      character: 'Second Man at Auto Shop',
      credit_id: '52fe4251c3a36847f8014a89',
      order: 17,
    },
    {
      adult: false,
      gender: 2,
      id: 35521,
      known_for_department: 'Acting',
      name: 'Matt Winston',
      original_name: 'Matt Winston',
      popularity: 2.556,
      profile_path: '/et38vhCb9y8yGleMRNY2j4nDDyr.jpg',
      cast_id: 45,
      character: 'Seminary Student',
      credit_id: '52fe4251c3a36847f8014a8d',
      order: 18,
    },
    {
      adult: false,
      gender: 1,
      id: 1224996,
      known_for_department: 'Acting',
      name: 'Lauren Sánchez',
      original_name: 'Lauren Sánchez',
      popularity: 1.4,
      profile_path: '/ahOwHtOHrFZUoJDOd7VvF7RPiL.jpg',
      cast_id: 46,
      character: 'Channel 4 Reporter',
      credit_id: '52fe4251c3a36847f8014a91',
      order: 19,
    },
    {
      adult: false,
      gender: 0,
      id: 1219497,
      known_for_department: 'Acting',
      name: 'Thom Gossom Jr.',
      original_name: 'Thom Gossom Jr.',
      popularity: 1.22,
      profile_path: '/plFARWSTQ021TOOC5gpChhiUIVu.jpg',
      cast_id: 41,
      character: 'Detective Stern',
      credit_id: '52fe4250c3a36847f8014a7d',
      order: 20,
    },
    {
      adult: false,
      gender: 2,
      id: 1226835,
      known_for_department: 'Acting',
      name: 'Markus Redmond',
      original_name: 'Markus Redmond',
      popularity: 1.166,
      profile_path: null,
      cast_id: 52,
      character: 'Detective Kevin',
      credit_id: '52fe4251c3a36847f8014aa9',
      order: 21,
    },
  ] as CastDataType[];

  useEffect(() => {
    //TODO write function to load data  movie
  }, [movieId]);

  const handleClickShowAll = () => setCastExtended((oldValue) => !oldValue);

  const images = [
    'https://res.cloudinary.com/rss-collection/image/upload/v1663146316/calendar/lotr1_movie_screencaps.com_1164.0_rmiqpd.webp',
    'https://res.cloudinary.com/rss-collection/image/upload/v1663146316/calendar/lotr1_movie_screencaps.com_1164.0_rmiqpd.webp',
    'https://res.cloudinary.com/rss-collection/image/upload/v1663146316/calendar/lotr1_movie_screencaps.com_1164.0_rmiqpd.webp',
    'https://res.cloudinary.com/rss-collection/image/upload/v1663146316/calendar/lotr1_movie_screencaps.com_1164.0_rmiqpd.webp',
    'https://res.cloudinary.com/rss-collection/image/upload/v1663146316/calendar/lotr1_movie_screencaps.com_1164.0_rmiqpd.webp',
    'https://res.cloudinary.com/rss-collection/image/upload/v1663146316/calendar/lotr1_movie_screencaps.com_1164.0_rmiqpd.webp',
    'https://res.cloudinary.com/rss-collection/image/upload/v1663146316/calendar/lotr1_movie_screencaps.com_1164.0_rmiqpd.webp',
    'https://res.cloudinary.com/rss-collection/image/upload/v1663146316/calendar/lotr1_movie_screencaps.com_1164.0_rmiqpd.webp',
  ];
  const recommendations = [
    { popularity: '5', id: 1235 },
    { popularity: '7', id: 1236 },
    { popularity: '6', id: 1237 },
    { popularity: '8', id: 1238 },
    { popularity: '3', id: 1239 },
  ] as RecommendationsType[];

  return (
    <>
      <Grid columnSpacing={4} container>
        <Grid item xs={12} md={6} xl={2.5} className={classes.imageWrapper}>
          <MovieCard popularity="8" id={1234} imageHeight="400px" isShowDescription={false} />
        </Grid>
        <Grid item xs={12} md={6} xl={9.5}>
          <MovieDescription />
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="h5">Top Billed Cast</Typography>
            <Button className={classes.showAllButton} onClick={handleClickShowAll}>
              Show all
            </Button>
          </Stack>
          <MovieCast isCastExtended={isCastExtended} cast={cast} />
          <Stack className={classes.imagesWrapper}>
            <Typography variant="h6">Images</Typography>
            <ImagesComponent images={images} />
          </Stack>
        </Grid>
      </Grid>
      <Grid>
        <Typography className={classes.recommendationsTitle} variant="h4">
          RECOMMENDATIONS
        </Typography>
        <Recommendations recommendations={recommendations} />
      </Grid>
    </>
  );
};
