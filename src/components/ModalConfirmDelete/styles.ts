import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

export const Overlay = styled.View`
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
`;

export const Content = styled.View`
  width: 100%;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 5px;
  padding: 24px;
  z-index: 25;
  align-items: center;
`;

export const Icon = styled(AntDesign)`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${RFValue(16)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.text};
  font-weight: bold;
`;

export const Description = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${RFValue(16)}px;
  text-align: center;
`;

export const Buttons = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
