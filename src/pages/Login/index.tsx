import React, { useState } from "react";
import { StatusBar, Modal } from "react-native";
import { Button } from "../../components/Form/Button";
import { Input } from "../../components/Form/Input";
import { ModalInvalidCredentials } from "../../components/ModalInvalidCredentials";

import * as S from "./styles";

interface ILoginProps {
  handleLogin: () => void;
}

export function Login({ handleLogin }: ILoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [showInvalidCredentials, setShowInvalidCredentials] = useState(false);

  const handleSubmit = () => {
    if (email === "admin@eb3.com" && password === "admin") {
      handleLogin();
    } else {
      setShowInvalidCredentials(true);
    }
  };

  const handleCloseModalInvalidCredentials = () => {
    setShowInvalidCredentials(false);
  };

  return (
    <>
      <StatusBar backgroundColor="#AD033B" />

      <S.Container>
        <S.ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <S.Logo
            source={{
              uri: "https://www.eb3.com.br/assets/images/logo-two.png",
            }}
          />
          <Input
            placeholder="Insira o e-mail"
            textContentType="emailAddress"
            onChange={(event) => setEmail(event.nativeEvent.text)}
          />
          <Input
            placeholder="Insira a senha"
            secureTextEntry={secureTextEntry}
            setSecureTextEntry={setSecureTextEntry}
            type="password"
            onChange={(event) => setPassword(event.nativeEvent.text)}
          />
          <S.Buttons>
            <Button
              onPress={handleSubmit}
              title="Login"
              style={{ justifyContent: "flex-end" }}
            />
          </S.Buttons>
        </S.ScrollView>
      </S.Container>

      <Modal
        animationType="fade"
        transparent={true}
        visible={showInvalidCredentials}
        onRequestClose={() => {
          setShowInvalidCredentials(!showInvalidCredentials);
        }}
      >
        <ModalInvalidCredentials
          handleClose={handleCloseModalInvalidCredentials}
        />
      </Modal>
    </>
  );
}
