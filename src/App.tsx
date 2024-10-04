import React from "react";
import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router-dom";

import "./assets/css/style.css";
import "./assets/css/validnavs.css";
import { publicRoutes } from "./routes";
import { LanguageMiddleware } from "./routes/middlewares";

const App = () => {
  const { i18n } = useTranslation();

  const supportedLngs = i18n.options.supportedLngs || ["en"];

  return (
    <React.Fragment>
      <Routes>
        {publicRoutes.map((route, index) => (
          <React.Fragment key={index}>
            <Route
              path={route.path}
              element={
                <LanguageMiddleware>{route.component}</LanguageMiddleware>
              }
            />
            {supportedLngs.map((lng) => (
              <Route
                key={`${index}-${lng}`}
                path={`/${lng}/${route.path.replace("/", "")}`}
                element={
                  <LanguageMiddleware>{route.component}</LanguageMiddleware>
                }
              />
            ))}
          </React.Fragment>
        ))}
      </Routes>
    </React.Fragment>
  );
};

export default App;
