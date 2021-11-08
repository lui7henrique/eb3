import React, { useState, useEffect } from "react";
import { ScrollView, Modal, StatusBar } from "react-native";
import HideWithKeyboard from "react-native-hide-with-keyboard";

import { TotalCard } from "../../components/TotalCard";
import { Input } from "../../components/Form/Input";
import { Select } from "../../components/Form/Select";
import { ModalAddNewColor } from "../../components/ModalAddNewColor";
import { ModalColorSuccessfully } from "../../components/ModalColorSuccessfully";

import { useColors } from "../../hooks/useColors";

import * as S from "./styles";

export function Home() {
  const { colors, loadData, selectedColor } = useColors();

  const [measure, setMeasure] = useState<number>(0);
  const [showModalAddColor, setShowModalAddColor] = useState(false);
  const [showModalAddColorSuccessfully, setShowModalAddColorSuccessfully] =
    useState(false);

  const handleOpenModal = () => {
    setShowModalAddColor(true);
  };

  const handleCloseModal = () => {
    setShowModalAddColor(false);
  };

  const handleCloseModalColorAddSuccessfully = () => {
    setShowModalAddColorSuccessfully(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <StatusBar backgroundColor="#AD033B" />

      <S.Container style={{ flex: 1 }}>
        <ScrollView>
          <S.Header>
            <S.UserWrapper>
              <S.UserProfile
                source={{
                  uri: "https://github.com/lui7henrique.png",
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
            <Select />
          </S.Body>
        </ScrollView>

        <HideWithKeyboard>
          <TotalCard measure={measure} color={selectedColor} />
        </HideWithKeyboard>

        <Modal
          animationType="fade"
          transparent={true}
          visible={showModalAddColor}
          onRequestClose={() => {
            setShowModalAddColor(!showModalAddColor);
          }}
        >
          <ModalAddNewColor
            handleClose={handleCloseModal}
            setShowModalAddColorSuccessfully={setShowModalAddColorSuccessfully}
          />
        </Modal>

        <Modal
          animationType="fade"
          transparent={true}
          visible={showModalAddColorSuccessfully}
          onRequestClose={() => {
            setShowModalAddColorSuccessfully(!showModalAddColorSuccessfully);
          }}
        >
          <ModalColorSuccessfully
            message="Cor adicionada com sucesso"
            handleClose={handleCloseModalColorAddSuccessfully}
          />
        </Modal>
      </S.Container>
    </>
  );
}
