import { View, Text } from "react-native";
import ToastMessage, {
  BaseToast,
  ErrorToast,
} from "react-native-toast-message";
import React from "react";

const toastConfig = {
  success: (props: any) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: "#12A454" }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 15,
        fontWeight: "400",
      }}
    />
  ),

  error: (props: any) => (
    <ErrorToast
      {...props}
      style={{ borderLeftColor: "#12A454" }}
      text1Style={{
        fontSize: 17,
      }}
      text2Style={{
        fontSize: 15,
      }}
    />
  ),
};

export const Toast = () => {
  return <ToastMessage config={toastConfig} position="top" topOffset={5} />;
};
