import React from "react";
import { Text, TouchableWithoutFeedback } from "react-native";
import { Button } from "../Form/Button";
import * as S from "./styles";

interface IModalColorAddSuccessfully {
  handleClose: () => void;
}

export function ModalColorAddSuccessfully({
  handleClose,
}: IModalColorAddSuccessfully) {
  return (
    <S.Overlay>
      <S.Content>
        <S.Icon name="check-circle" size={120} />
        <S.Title>Cor adicionada com sucesso!</S.Title>
        <Button title="OK" onPress={handleClose} variant="secondary" />
      </S.Content>
    </S.Overlay>
  );
}
