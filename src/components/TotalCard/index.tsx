import React from "react";
import * as S from "./styles";

export function TotalCard() {
  return (
    <S.Container>
      <S.Header>
        <S.Title>Total</S.Title>
        <S.Icon name="attach-money" size={30} />
      </S.Header>
      <S.Body>
        <S.Total>R$ 17.400,00</S.Total>
      </S.Body>
      <S.Footer>
        <S.Support>Medida • Cor </S.Support>
      </S.Footer>
    </S.Container>
  );
}
