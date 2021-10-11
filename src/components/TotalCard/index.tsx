import React from "react";
import { formatToBRL } from "../../utils/formatToBRL";
import * as S from "./styles";

interface ITotalCardProps {
  measure?: number;
  color?: {
    name: string;
    price: number;
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
            ? `R$${formatToBRL(measure * color.price)}`
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
