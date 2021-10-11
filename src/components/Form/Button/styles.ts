import styled from "styled-components/native";

export const Container = styled.TouchableOpacity<{
  variant: "primary" | "secondary";
}>`
  background: ${({ variant, theme }) =>
    variant === "primary" ? theme.colors.primary : theme.colors.success};
  padding: 18px;
  border-radius: 5px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
`;
