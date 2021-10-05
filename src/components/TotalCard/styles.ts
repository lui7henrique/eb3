import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export const Container = styled.View`
  background: ${({ theme }) => theme.colors.shape};
  padding: 24px 24px;
  height: ${RFPercentage(20)}px;
  width: 100%;
  position: absolute;
  bottom: 0;
  color: ${({ theme }) => theme.colors.text};
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text``;

export const Icon = styled(MaterialIcons)`
  color: ${({ theme }) => theme.colors.primary};
`;

export const Body = styled.View``;

export const Total = styled.Text`
  font-size: ${RFValue(30)}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`;

export const Footer = styled.View``;

export const Support = styled.Text`
  color: ${({ theme }) => theme.colors.support};
`;
