import styled from "styled-components/native";
import { TextInput } from "react-native";

export const Container = styled(TextInput)`
  width: 100%;
  padding: 18px;
  background: ${({ theme }) => theme.colors.shape};
  border-radius: 5px;
  margin-bottom: 8px;
`;
