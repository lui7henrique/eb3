import React, { useState } from "react";
import { TouchableWithoutFeedback } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from "react-native-uuid";

import { useColors } from "../../hooks/useColors";

import { Button } from "../Form/Button";
import { Input } from "../Form/Input";

import * as S from "./styles";

interface IModalAddNewColorProps {
  handleClose: () => void;
  setShowModalAddColorSuccessfully: (arg0: boolean) => void;
}

export function ModalAddNewColor({
  handleClose,
  setShowModalAddColorSuccessfully,
}: IModalAddNewColorProps) {
  const { colors, addNewColor } = useColors();
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  const handleSubmit = async () => {
    try {
      if (name.trim() && price > 0) {
        addNewColor(name, price);
        setShowModalAddColorSuccessfully(true);
        handleClose();
      }
    } catch (error) {
      console.log(error);
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
