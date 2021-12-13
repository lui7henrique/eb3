import styled from "styled-components/native";
import { ActivityIndicator } from "react-native";
import { Entypo } from "@expo/vector-icons";
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

export const Icon = styled(ActivityIndicator)`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 16px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.text};
  font-weight: bold;
  margin: ${RFValue(16)}px 0;
`;
