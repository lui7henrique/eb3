import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, Modal } from "react-native";
import HideWithKeyboard from "react-native-hide-with-keyboard";

import * as S from "./styles";
import { TotalCard } from "../../components/TotalCard";
import { Input } from "../../components/Form/Input";
import { Select } from "../../components/Form/Select";
import { ModalAddNewColor } from "../../components/ModalAddNewColor";

export const colors = [
  {
    name: "Bege",
    price: 850,
  },
  {
    name: "Branco",
    price: 800,
  },
  {
    name: "Cinza Cristal",
    price: 850,
  },
  {
    name: "Preto",
    price: 800,
  },
];

export function Home() {
  const [selectedOption, setSelectedOption] = useState<typeof colors[0]>();
  const [showModalAddColor, setShowModalAddColor] = useState(false);
  const [measure, setMeasure] = useState<number>(0);

  const handleOpenModal = () => {
    setShowModalAddColor(true);
  };

  const handleCloseModal = () => {
    setShowModalAddColor(false);
  };

  return (
    <S.Container style={{ flex: 1 }}>
      <ScrollView>
        <S.Header>
          <S.UserWrapper>
            <S.UserProfile
              source={{
                uri: "https://avatars.githubusercontent.com/u/70612836?v=4",
              }}
            />
            <S.AddNewColor onPress={handleOpenModal}>Nova cor</S.AddNewColor>
          </S.UserWrapper>
        </S.Header>
        <S.Body>
          <Input
            placeholder="Insira a medida em M²"
            keyboardType="numeric"
            onChange={(event) => setMeasure(+event.nativeEvent.text)}
          />
          <Select
            options={colors}
            selectedOption={selectedOption as typeof colors[0]}
            setSelectedOption={setSelectedOption}
          />
        </S.Body>
      </ScrollView>

      <HideWithKeyboard>
        <TotalCard measure={measure} color={selectedOption} />
      </HideWithKeyboard>

      <Modal
        animationType="fade"
        transparent={true}
        visible={showModalAddColor}
        onRequestClose={() => {
          setShowModalAddColor(!showModalAddColor);
        }}
      >
        <ModalAddNewColor handleClose={handleCloseModal} colors={colors} />
      </Modal>
    </S.Container>
  );
}
