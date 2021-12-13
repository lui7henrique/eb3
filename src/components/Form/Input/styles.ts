import styled from "styled-components/native";
import { TextInput } from "react-native";
import { Entypo, AntDesign } from "@expo/vector-icons";

export const Container = styled.View`
  background: ${({ theme }) => theme.colors.shape};
  padding: 18px;
  border-radius: 5px;
  margin-bottom: 8px;
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const Input = styled(TextInput)`
  width: 100%;
`;

export const EyeIcon = styled(Entypo)`
  color: ${({ theme }) => theme.colors.primary};
  position: absolute;
  right: 0;
  margin: 18px;
  padding: 10px;
`;

export const NetworkIcon = styled(AntDesign)`
  color: ${({ theme }) => theme.colors.primary};
  position: absolute;
  right: 0;
  margin: 18px;
`;
