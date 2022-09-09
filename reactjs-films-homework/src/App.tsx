import React from 'react';
import { ActorProfile, Main, MovieDetails, NotFoundPage } from './pages';
import { IntlProvider } from 'react-intl';
import { Routes, Route } from 'react-router-dom';
import messages from './shared/localization/messages';
import routes from './shared/constants/routes';
import CssBaseline from '@mui/material/CssBaseline';
import { StyledEngineProvider, ThemeProvider, createTheme } from '@mui/material/styles';
import { Header } from './components';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline enableColorScheme />
        <StyledEngineProvider injectFirst>
          <IntlProvider locale="en" messages={messages.en}>
            <Header />
            <Routes>
              <Route path={routes.MAIN} element={<Main />} />
              <Route path={routes.ACTOR_PROFILE} element={<ActorProfile />} />
              <Route path={routes.MOVIE_DETAILS} element={<MovieDetails />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </IntlProvider>
        </StyledEngineProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
