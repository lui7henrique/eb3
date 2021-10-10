import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
  padding: ${RFValue(24)}px;
`;

export const Logo = styled.Image`
  display: none;
  width: 125px;
  height: 50px;
  margin-bottom: 70px;
`;

export const ScrollView = styled.ScrollView``;

export const Content = styled.View`
  flex: 1;
  background: red;
  height: 100%;
  width: 100%;
`;

export const Buttons = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;
