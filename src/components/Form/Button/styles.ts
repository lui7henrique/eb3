import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  background: ${({ theme }) => theme.colors.primary};
  padding: 18px;
  border-radius: 5px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
`;
