// vendors
import React, { useState, useEffect } from "react";
import { ScrollView, Modal, StatusBar } from "react-native";
import HideWithKeyboard from "react-native-hide-with-keyboard";

// hooks
import { useMeasure } from "../../hooks/useMeasure";
import { useColors } from "../../hooks/useColors";

// components
import { TotalCard } from "../../components/TotalCard";
import { Input } from "../../components/Form/Input";
import { Select } from "../../components/Form/Select";

// modals
import { ModalAddNewColor } from "../../components/ModalAddNewColor";
import { ModalColorSuccessfully } from "../../components/ModalColorSuccessfully";
import { ModalLoadingMeasure } from "../../components/ModalLoadingMeasure";

// styles
import * as S from "./styles";

export function Home() {
  const { colors, loadData, selectedColor } = useColors();
  const { measure, setMeasure, isLoading, setIsLoading } = useMeasure();

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

  const handleCloseModalLoadingMeasure = () => {
    setIsLoading(false);
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
                  uri: "https://i.imgur.com/oN3c53c.png",
                }}
              />
              <S.AddNewColor onPress={handleOpenModal}>Nova cor</S.AddNewColor>
            </S.UserWrapper>
          </S.Header>

          <S.Body>
            <Input
              placeholder="Insira a medida em M²"
              keyboardType="number-pad"
              onChange={(event) => setMeasure(+event.nativeEvent.text)}
              value={measure ? String(measure) : undefined}
              hasNetworkIcon
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

        <Modal
          animationType="fade"
          transparent={true}
          visible={isLoading}
          onRequestClose={() => {
            setIsLoading(!isLoading);
          }}
        >
          <ModalLoadingMeasure handleClose={handleCloseModalLoadingMeasure} />
        </Modal>
      </S.Container>
    </>
  );
}
