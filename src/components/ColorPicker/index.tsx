import React from "react";
import * as S from "./styles";

export const ColorPicker = () => (
  <S.ColorPicker
    onColorSelected={(color) => alert(`Color selected: ${color}`)}
  />
);
