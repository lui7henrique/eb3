import React from "react";
import { Image, StyleSheet, Text, ScrollView, View } from "react-native";
import HideWithKeyboard from "react-native-hide-with-keyboard";

import * as S from "./styles";
import { TotalCard } from "../../components/TotalCard";
import { Input } from "../../components/Form/Input";

export function Home() {
  const onPressButton = () => {
    alert("vai o tchola");
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
            <S.AddNewColor onPress={onPressButton}>Nova cor</S.AddNewColor>
          </S.UserWrapper>
        </S.Header>
        <S.Body>
          <Input placeholder="Inserir medida" />
          <Input placeholder="Selecionar a cor de madeira" />
        </S.Body>
      </ScrollView>

      <HideWithKeyboard>
        <TotalCard />
      </HideWithKeyboard>
    </S.Container>
  );
}
