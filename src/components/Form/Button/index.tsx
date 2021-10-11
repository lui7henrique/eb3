import * as S from "./styles";
import { TouchableOpacityProps } from "react-native";
import React from "react";

interface Props extends TouchableOpacityProps {
  title: string;
  variant?: "primary" | "secondary";
}

export function Button({ title, variant = "primary", ...rest }: Props) {
  return (
    <S.Container {...rest} variant={variant}>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}
