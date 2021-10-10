import React, { useState, useEffect } from "react";
import { Image, StyleSheet, Text, ScrollView, View } from "react-native";
import HideWithKeyboard from "react-native-hide-with-keyboard";

import * as S from "./styles";
import { TotalCard } from "../../components/TotalCard";
import { Input } from "../../components/Form/Input";
import { Select } from "../../components/Form/Select";

export const colors = [
  {
    name: "Bege",
    value: 850,
  },
  {
    name: "Branco",
    value: 800,
  },
  {
    name: "Cinza Cristal",
    value: 850,
  },
  {
    name: "Preto",
    value: 800,
  },
];

const options = colors.map((color) => {
  return {
    value: color.name,
    label: color.name,
  };
});

export function Home() {
  const [selectedOption, setSelectedOption] = useState<typeof options[0]>();
  const [color, setColor] = useState<typeof colors[0]>();
  const [measure, setMeasure] = useState<number>(0);

  const onPressButton = () => {
    alert("teste");
  };

  useEffect(() => {
    const color = colors.find((color) => color.name === selectedOption?.value);
    setColor(color);
  }, [selectedOption]);

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
          <Input
            placeholder="Insera a medida em M²"
            keyboardType="numeric"
            onChange={(event) => setMeasure(+event.nativeEvent.text)}
          />
          <Select
            options={options}
            selectedOption={selectedOption as typeof options[0]}
            setSelectedOption={setSelectedOption}
          />
        </S.Body>
      </ScrollView>

      <HideWithKeyboard>
        <TotalCard measure={measure} color={color} />
      </HideWithKeyboard>
    </S.Container>
  );
}
