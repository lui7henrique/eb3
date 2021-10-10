import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  background: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: ${RFPercentage(15)}px;
`;

export const UserWrapper = styled.View`
  display: flex;
  flex-direction: row;
  padding: 30px 24px;
  margin-top: 10px;
  align-items: center;
  height: 50%;
  width: 100%;
  justify-content: space-between;
`;

export const UserProfile = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;

  border-radius: 50;
`;

export const AddNewColor = styled.Text`
  background-color: ${({ theme }) => theme.colors.primaryDarker};
  display: flex;
  padding: 10px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  border-radius: 5px;

  &:hover {
    background: red;
  }
`;

export const Body = styled.View`
  display: flex;
  flex-direction: column;
  padding: 24px 24px;
  margin-top: -55px;
`;
