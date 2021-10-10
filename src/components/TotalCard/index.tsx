import React from "react";
import * as S from "./styles";

const formatToBRL = (value: number) => {
  const formattedValue = value
    .toFixed(2) // casas decimais
    .replace(".", ",")
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");

  return formattedValue;
};
interface ITotalCardProps {
  measure?: number;
  color?: {
    name: string;
    value: number;
  };
}

export function TotalCard({ measure, color }: ITotalCardProps) {
  return (
    <S.Container>
      <S.Header>
        <S.Title>Total</S.Title>
        <S.Icon name="attach-money" size={30} />
      </S.Header>
      <S.Body>
        <S.Total>
          {measure && color
            ? `R$${formatToBRL(measure * color.value)}`
            : "R$0,00"}
        </S.Total>
      </S.Body>
      <S.Footer>
        <S.Support>
          {`${measure}m²`} • {color ? color.name : "Nenhuma cor"}
        </S.Support>
      </S.Footer>
    </S.Container>
  );
}
