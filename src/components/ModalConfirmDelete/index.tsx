import React from "react";
import { Button } from "../Form/Button";
import * as S from "./styles";

interface IModalConfirmDeleteProps {
  handleClose: () => void;
  handleDelete: () => void;
}

export function ModalConfirmDelete({
  handleClose,
  handleDelete,
}: IModalConfirmDeleteProps) {
  return (
    <S.Overlay>
      <S.Content>
        <S.Icon name="questioncircle" size={100} />
        <S.Title>Deseja mesmo deletar essa cor?</S.Title>
        <S.Description>
          Essa ação é irreversível e não poderá ser desfeita
        </S.Description>

        <S.Buttons>
          <Button title="Cancelar" onPress={handleClose} variant="secondary" />
          <Button title="Confirmar" onPress={handleDelete} variant="primary" />
        </S.Buttons>
      </S.Content>
    </S.Overlay>
  );
}
