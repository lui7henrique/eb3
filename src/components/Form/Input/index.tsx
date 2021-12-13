import React from "react";
import { TouchableWithoutFeedback } from "react-native";
import * as S from "./styles";
import { TextInputProps } from "react-native";

import { useMeasure } from "../../../hooks/useMeasure";

interface Props extends TextInputProps {
  type?: "password";
  setSecureTextEntry?: (arg0: boolean) => void;
  hasNetworkIcon?: boolean;
}

export function Input({
  type,
  setSecureTextEntry,
  hasNetworkIcon,
  ...rest
}: Props) {
  const { loadMeasure } = useMeasure();

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
      {hasNetworkIcon && (
        <TouchableWithoutFeedback onPress={loadMeasure}>
          <S.NetworkIcon
            name="wifi"
            size={20}
            onPress={() => setSecureTextEntry && setSecureTextEntry(true)}
          />
        </TouchableWithoutFeedback>
      )}
    </S.Container>
  );
}
