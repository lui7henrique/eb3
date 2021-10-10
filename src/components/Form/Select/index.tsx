import React, { useState } from "react";
import * as S from "./styles";

import { Text, TouchableWithoutFeedback, ScrollView } from "react-native";

type Color = {
  value: string;
  label: string;
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
            {selectedOption ? selectedOption.label : "Selecione uma cor"}
          </S.SelectedValue>
          <S.Icon name="expand-more" size={30} />
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
                  <S.SelectOption>
                    <S.ColorName
                      isActive={option === selectedOption ? true : false}
                    >
                      {option.value}
                    </S.ColorName>
                  </S.SelectOption>
                </TouchableWithoutFeedback>
              );
            })}
          </ScrollView>
        </S.SelectOptions>
      )}
    </>
  );
}
