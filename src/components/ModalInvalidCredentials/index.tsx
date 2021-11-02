import React from "react";
import { Button } from "../Form/Button";
import * as S from "./styles";

interface IModalInvalidCredentialsProps {
  handleClose: () => void;
}

export function ModalInvalidCredentials({
  handleClose,
}: IModalInvalidCredentialsProps) {
  return (
    <S.Overlay>
      <S.Content>
        <S.Icon name="error" size={120} />
        <S.Title>Credenciais inválidas!</S.Title>
        <Button
          title="Tentar novamente"
          onPress={handleClose}
          variant="primary"
        />
      </S.Content>
    </S.Overlay>
  );
}
