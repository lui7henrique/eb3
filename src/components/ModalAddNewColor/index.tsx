import React, { useState, useEffect } from "react";
import { TouchableWithoutFeedback, Modal } from "react-native";
import { formatToBRL } from "../../utils/formatToBRL";
import { colors } from "../../pages/Home";
import { Button } from "../Form/Button";
import { Input } from "../Form/Input";
import { ColorPicker } from "../ColorPicker";
import * as S from "./styles";
import { ModalColorAddSuccessfully } from "../ModalColorAddSuccessfully";

interface ITotalCardProps {
  handleClose: () => void;
  setShowModalAddColorSuccessfully: (arg0: boolean) => void;
  colors: typeof colors;
}

export function ModalAddNewColor({
  handleClose,
  colors,
  setShowModalAddColorSuccessfully,
}: ITotalCardProps) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  const handleSubmit = () => {
    const color = {
      name,
      price,
    };

    if (name.trim() && price > 0) {
      colors.push(color);
      setShowModalAddColorSuccessfully(true);
      handleClose();
    }
  };

  return (
    <S.Overlay>
      <S.Content>
        <S.Header>
          <S.Title>Adicionar cor</S.Title>
          <TouchableWithoutFeedback onPress={handleClose}>
            <S.Icon name="close" size={30} />
          </TouchableWithoutFeedback>
        </S.Header>
        <S.Body>
          <Input
            placeholder="Insira o nome"
            onChange={(event) => setName(event.nativeEvent.text)}
          />
          <Input
            placeholder="Insira o preço por M²"
            onChange={(event) => setPrice(+event.nativeEvent.text)}
            keyboardType="numeric"
          />
        </S.Body>
        <S.Footer>
          <Button title="Adicionar" onPress={handleSubmit} />
        </S.Footer>
      </S.Content>
    </S.Overlay>
  );
}
