import React from "react";
import "./App.css";
import { ActorProfile, Main, MovieDetails, NotFoundPage } from "./pages";
import { IntlProvider } from "react-intl";
import { Routes, Route } from "react-router-dom";
import messages from "./shared/localization/messages";
import routes from "./shared/constants/routes";

function App() {
  return (
    <>
      <IntlProvider locale="en" messages={messages.en}>
        <Routes>
          <Route path={routes.MAIN} element={<Main />} />
          <Route path={routes.ACTOR_PROFILE} element={<ActorProfile />} />
          <Route path={routes.MOVIE_DETAILS} element={<MovieDetails />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </IntlProvider>
    </>
  );
}

export default App;
