import React, { useState } from "react";
import { TouchableWithoutFeedback, Modal } from "react-native";

import { Button } from "../Form/Button";
import { Input } from "../Form/Input";
import { Option } from "../Form/Select";
import { ModalConfirmDelete } from "../ModalConfirmDelete";

import * as S from "./styles";

interface IModalManageOptionProps {
  option: Option;
  options: Option[];
  handleClose: () => void;
}

export function ModalManageOption({
  handleClose,
  option,
  options,
}: IModalManageOptionProps) {
  const [confirmDelete, setConfirmDelete] = useState(false);

  const handleOpenModalConfirmDelete = () => {
    setConfirmDelete(true);
  };

  const handleCloseModalConfirmDelete = () => {
    setConfirmDelete(false);
  };

  const handleDeleteOption = () => {
    const newOptions = options.filter((o) => o.name !== option.name);
    handleClose();
    handleCloseModalConfirmDelete();
  };

  return (
    <>
      <S.Overlay>
        <S.Content>
          <S.Header>
            <S.Title>Editar opção</S.Title>
            <TouchableWithoutFeedback onPress={handleClose}>
              <S.Icon name="close" size={30} />
            </TouchableWithoutFeedback>
          </S.Header>
          <Input defaultValue={option.name} placeholder="Insira o nome" />
          <Input
            defaultValue={String(option.price)}
            placeholder="Insira o preço por M²"
          />
          <S.Footer>
            <TouchableWithoutFeedback onPress={handleOpenModalConfirmDelete}>
              <S.TrashIcon name="trash" size={40} />
            </TouchableWithoutFeedback>
            <Button
              title="Salvar"
              onPress={() => alert("oi")}
              variant="primary"
            />
          </S.Footer>
        </S.Content>
      </S.Overlay>
      <Modal
        animationType="fade"
        transparent={true}
        visible={confirmDelete}
        onRequestClose={() => {
          setConfirmDelete(!confirmDelete);
        }}
      >
        <ModalConfirmDelete
          handleClose={handleCloseModalConfirmDelete}
          handleDelete={handleDeleteOption}
        />
      </Modal>
    </>
  );
}
