import React from "react";
import { StatusBar, Text } from "react-native";
import { ThemeProvider } from "styled-components";

import theme from "./src/global/styles/theme";
import { Home } from "./src/pages/Home";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar backgroundColor="#FF9B25" />
      <Home />
    </ThemeProvider>
  );
}
