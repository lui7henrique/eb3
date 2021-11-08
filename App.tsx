import React, { useState } from "react";
import { StatusBar, Text } from "react-native";
import { ThemeProvider } from "styled-components";

import theme from "./src/global/styles/theme";
import { ColorsProvider } from "./src/hooks/useColors";
import { Home } from "./src/pages/Home";
import { Login } from "./src/pages/Login";

export default function App() {
  const [isLogged, setIsLogged] = useState(false);

  const handleLogin = () => {
    setIsLogged(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <ColorsProvider>
        <StatusBar backgroundColor="#AD033B" />
        {!isLogged ? <Login handleLogin={handleLogin} /> : <Home />}
      </ColorsProvider>
    </ThemeProvider>
  );
}
