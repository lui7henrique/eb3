import React, { useState } from "react";
import * as S from "./styles";

import { Text, TouchableWithoutFeedback, ScrollView } from "react-native";
import { formatToBRL } from "../../../utils/formatToBRL";

type Color = {
  name: string;
  value: number;
};

interface ISelectProps {
  options: Color[];
  selectedOption: Color;
  setSelectedOption: (arg0: Color) => void;
}

export function Select({
  options,
  selectedOption,
  setSelectedOption,
}: ISelectProps) {
  const [selectOptionsIsOpen, setSelectOptionsIsOpen] = useState(false);

  const handleOpenOptions = () => {
    setSelectOptionsIsOpen(!selectOptionsIsOpen);
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={handleOpenOptions}>
        <S.Select>
          <S.SelectedValue>
            {selectedOption ? selectedOption.name : "Selecione uma cor"}
          </S.SelectedValue>

          {selectOptionsIsOpen ? (
            <S.Icon name="expand-less" size={30} />
          ) : (
            <S.Icon name="expand-more" size={30} />
          )}
        </S.Select>
      </TouchableWithoutFeedback>

      {selectOptionsIsOpen && (
        <S.SelectOptions>
          <ScrollView>
            {options.map((option) => {
              return (
                <TouchableWithoutFeedback
                  onPress={() => setSelectedOption(option)}
                >
                  <S.Option>
                    <S.ColorName
                      isActive={option === selectedOption ? true : false}
                    >
                      {option.name}
                    </S.ColorName>
                    <S.ColorPrice>{`R$${formatToBRL(
                      option.value
                    )}`}</S.ColorPrice>
                  </S.Option>
                </TouchableWithoutFeedback>
              );
            })}
          </ScrollView>
        </S.SelectOptions>
      )}
    </>
  );
}
