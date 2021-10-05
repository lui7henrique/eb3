import * as S from "./styles";
import { TextInputProps } from "react-native";
import React from "react";

type Props = TextInputProps;

export function Input({ ...rest }: Props) {
  return <S.Container {...rest}></S.Container>;
}
