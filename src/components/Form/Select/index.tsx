import React, { useState } from "react";
import { TouchableWithoutFeedback, ScrollView, Modal } from "react-native";
import * as Haptics from "expo-haptics";

import { formatToBRL } from "../../../utils/formatToBRL";

import * as S from "./styles";
import { ModalManageOption } from "../../ModalManageOption";

export type Option = {
  name: string;
  price: number;
};

interface ISelectProps {
  options: Option[];
  selectedOption: Option;
  setSelectedOption: (arg0: Option) => void;
}

export function Select({
  options,
  selectedOption,
  setSelectedOption,
}: ISelectProps) {
  const [selectOptionsIsOpen, setSelectOptionsIsOpen] = useState(false);
  const [managedOption, setManagedOption] = useState<Option>(options[0]);
  const [showModalManageOption, setShowModalManageOption] = useState(false);

  const handleOpenOptions = () => {
    setSelectOptionsIsOpen(!selectOptionsIsOpen);
  };

  const handleSelectOption = (option: Option) => {
    setSelectedOption(option);
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
  };

  const handleOpenOptionManager = (option: Option) => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    setManagedOption(option);
    setShowModalManageOption(true);
  };

  const handleCloseModalManageOption = () => {
    setShowModalManageOption(false);
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={handleOpenOptions}>
        <S.Select>
          <S.SelectedValue>
            {selectedOption
              ? `${selectedOption.name} (R$${formatToBRL(
                  selectedOption.price
                )})`
              : "Selecione uma cor"}
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
            {options.map((option, index) => {
              return (
                <TouchableWithoutFeedback
                  onPress={() => handleSelectOption(option)}
                  onLongPress={() => handleOpenOptionManager(option)}
                  key={index}
                >
                  <S.Option isActive={selectedOption === option ? true : false}>
                    <S.ColorName
                      isActive={option === selectedOption ? true : false}
                    >
                      {option.name}
                    </S.ColorName>
                    <S.ColorPrice
                      isActive={option === selectedOption ? true : false}
                    >{`R$${formatToBRL(option.price)}`}</S.ColorPrice>
                  </S.Option>
                </TouchableWithoutFeedback>
              );
            })}
          </ScrollView>
        </S.SelectOptions>
      )}
      <Modal
        animationType="fade"
        transparent={true}
        visible={showModalManageOption}
        onRequestClose={() => {
          setShowModalManageOption(!showModalManageOption);
        }}
      >
        <ModalManageOption
          option={managedOption}
          handleClose={handleCloseModalManageOption}
          options={options}
        />
      </Modal>
    </>
  );
}
