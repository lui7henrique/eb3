import React, { useState } from "react";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";

import theme from "./src/global/styles/theme";
import { ColorsProvider } from "./src/hooks/useColors";
import { MeasureProvider } from "./src/hooks/useMeasure";
import { Home } from "./src/pages/Home";
import { Login } from "./src/pages/Login";
import { Toast } from "./src/components/Toast";

export default function App() {
  const [isLogged, setIsLogged] = useState(true);

  const handleLogin = () => {
    setIsLogged(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <ColorsProvider>
        <MeasureProvider>
          <StatusBar backgroundColor="#AD033B" />

          {!isLogged ? <Login handleLogin={handleLogin} /> : <Home />}
          <Toast />
        </MeasureProvider>
      </ColorsProvider>
    </ThemeProvider>
  );
}
