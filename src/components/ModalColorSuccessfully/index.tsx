import React from "react";
import { Button } from "../Form/Button";
import * as S from "./styles";

interface IModalColorSuccessfully {
  message: string;
  handleClose: () => void;
}

export function ModalColorSuccessfully({
  message,
  handleClose,
}: IModalColorSuccessfully) {
  return (
    <S.Overlay>
      <S.Content>
        <S.Icon name="check-circle" size={120} />
        <S.Title>{message}</S.Title>
        <Button title="OK" onPress={handleClose} variant="primary" />
      </S.Content>
    </S.Overlay>
  );
}
