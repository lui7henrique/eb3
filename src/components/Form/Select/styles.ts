import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

export const Select = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;

  width: 100%;
  background: ${({ theme }) => theme.colors.shape};
  border-radius: 5px;
  padding: 18px;
`;

export const SelectedValue = styled.Text`
  color: ${({ theme }) => theme.colors.support};
`;

export const OpenSelect = styled.Button``;

export const Icon = styled(MaterialIcons)`
  color: ${({ theme }) => theme.colors.primary};
`;

export const SelectOptions = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: ${({ theme }) => theme.colors.shape};
  margin-top: 8px;
  border-radius: 5px;
  padding: 18px;
  max-height: ${RFValue(200)}px;
  overflow: hidden;
`;

export const SelectOption = styled.Text`
  margin-bottom: ${RFValue(10)}px;
`;

export const ColorName = styled.Text<{ isActive: boolean }>`
  color: ${({ isActive, theme }) =>
    isActive ? theme.colors.primary : theme.colors.text};
  font-weight: ${({ isActive }) => (isActive ? 700 : 500)};
  font-size: ${RFValue(14)}px;
`;
