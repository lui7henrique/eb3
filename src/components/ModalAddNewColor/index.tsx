import React, { useState } from "react";
import { TouchableWithoutFeedback } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { colors } from "../../pages/Home";
import { Button } from "../Form/Button";
import { Input } from "../Form/Input";

import * as S from "./styles";

interface IModalAddNewColorProps {
  handleClose: () => void;
  setShowModalAddColorSuccessfully: (arg0: boolean) => void;
  colors: typeof colors;
}

export function ModalAddNewColor({
  handleClose,
  colors,
  setShowModalAddColorSuccessfully,
}: IModalAddNewColorProps) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  const handleSubmit = async () => {
    try {
      const dataKey = "@eb3:colors";

      const color = {
        name,
        price,
      };

      if (name.trim() && price > 0) {
        await AsyncStorage.setItem(dataKey, JSON.stringify(color));

        colors.push(color);
        setShowModalAddColorSuccessfully(true);
        handleClose();
      }
    } catch (error) {}
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
