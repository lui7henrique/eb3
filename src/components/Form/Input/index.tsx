import * as S from "./styles";
import { TextInputProps } from "react-native";
import React from "react";

interface Props extends TextInputProps {
  type?: "password";
  setSecureTextEntry?: (arg0: boolean) => void;
}

export function Input({ type, setSecureTextEntry, ...rest }: Props) {
  return (
    <S.Container>
      <S.Input {...rest}></S.Input>
      {type === "password" && rest.secureTextEntry ? (
        <S.EyeIcon
          name="eye"
          size={25}
          onPress={() => setSecureTextEntry && setSecureTextEntry(false)}
        />
      ) : (
        type === "password" && (
          <S.EyeIcon
            name="eye-with-line"
            size={25}
            onPress={() => setSecureTextEntry && setSecureTextEntry(true)}
          />
        )
      )}
    </S.Container>
  );
}
