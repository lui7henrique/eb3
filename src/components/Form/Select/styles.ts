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

export const ManageOptions = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const ManageOptionsButton = styled.TouchableWithoutFeedback``;

export const ManageOptionsText = styled.Text`
  opacity: 0.3;
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
  max-height: ${RFValue(225)}px;
  overflow: hidden;
`;

export const Option = styled.View<{ isActive: boolean }>`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 18px;
  background: ${({ isActive, theme }) =>
    isActive ? theme.colors.primary : theme.colors.shape};
`;

export const ColorName = styled.Text<{ isActive: boolean }>`
  color: ${({ isActive, theme }) =>
    isActive ? theme.colors.white : theme.colors.text};
  font-weight: ${({ isActive }) => (isActive ? 700 : 500)};
  font-size: ${RFValue(14)}px;
`;

export const ColorPrice = styled.Text<{ isActive: boolean }>`
  font-size: ${RFValue(11)}px;
  color: ${({ theme }) => theme.colors.support};
  font-weight: bold;
  color: ${({ isActive, theme }) =>
    isActive ? theme.colors.white : theme.colors.text};
`;
