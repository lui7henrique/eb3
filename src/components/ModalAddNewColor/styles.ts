import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

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
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${RFValue(8)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.text};
  font-weight: bold;
`;

export const Icon = styled(MaterialIcons)`
  color: ${({ theme }) => theme.colors.primary};
`;

export const Body = styled.View``;

export const Total = styled.Text`
  font-size: ${RFValue(30)}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`;

export const Footer = styled.View`
  display: flex;
`;

export const Support = styled.Text`
  color: ${({ theme }) => theme.colors.support};
`;
