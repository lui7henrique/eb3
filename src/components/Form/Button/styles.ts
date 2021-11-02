import styled from "styled-components/native";

export const Container = styled.TouchableOpacity<{
  variant: "primary" | "secondary";
}>`
  background: ${({ variant, theme }) =>
    variant === "primary" ? theme.colors.primary : "transparent"};

  padding: 18px;
  border-radius: 5px;
`;

export const Title = styled.Text<{
  variant: "primary" | "secondary";
}>`
  color: ${({ theme, variant }) =>
    variant === "primary" ? theme.colors.white : theme.colors.primary};
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
`;
