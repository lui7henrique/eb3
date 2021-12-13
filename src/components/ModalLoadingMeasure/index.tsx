import React from "react";
import { ActivityIndicator } from "react-native";

import { Button } from "../Form/Button";

import * as S from "./styles";

interface IModalLoadingMeasureProps {
  handleClose: () => void;
}

export function ModalLoadingMeasure({
  handleClose,
}: IModalLoadingMeasureProps) {
  return (
    <>
      <S.Overlay>
        <S.Content>
          <ActivityIndicator size="large" color="#AD033B" />
          <S.Title>Conectando ao ESP32...</S.Title>
          <Button title="CANCELAR" onPress={handleClose} variant="primary" />
        </S.Content>
      </S.Overlay>
    </>
  );
}
