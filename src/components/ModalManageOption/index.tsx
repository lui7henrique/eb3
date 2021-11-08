import React, { useState } from "react";
import { TouchableWithoutFeedback, Modal } from "react-native";
import { useColors } from "../../hooks/useColors";

import { Button } from "../Form/Button";
import { Input } from "../Form/Input";
import { Option } from "../Form/Select";
import { ModalConfirmDelete } from "../ModalConfirmDelete";

import * as S from "./styles";

interface IModalManageOptionProps {
  option: Option;
  handleClose: () => void;
}

export function ModalManageOption({
  handleClose,
  option,
}: IModalManageOptionProps) {
  const [name, setName] = useState(option.name);
  const [price, setPrice] = useState(option.price);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const { removeColor, editColor } = useColors();

  const handleEditOption = () => {
    editColor(option.id, name, price);
    handleClose();
  };

  const handleOpenModalConfirmDelete = () => {
    setConfirmDelete(true);
  };

  const handleCloseModalConfirmDelete = () => {
    setConfirmDelete(false);
  };

  const handleDeleteOption = async () => {
    removeColor(option.id);
    handleClose();
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
          <Input
            defaultValue={name}
            placeholder="Insira o nome"
            onChange={(event) => setName(event.nativeEvent.text)}
          />
          <Input
            defaultValue={String(price)}
            placeholder="Insira o preço por M²"
            onChange={(event) => setPrice(+event.nativeEvent.text)}
            keyboardType="numeric"
          />
          <S.Footer>
            <TouchableWithoutFeedback onPress={handleOpenModalConfirmDelete}>
              <S.TrashIcon name="trash" size={40} />
            </TouchableWithoutFeedback>
            <Button
              title="Salvar"
              variant="primary"
              onPress={handleEditOption}
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
