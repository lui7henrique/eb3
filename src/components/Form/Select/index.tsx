import React, { useState } from "react";
import {
  TouchableWithoutFeedback,
  ScrollView,
  Modal,
  Text,
} from "react-native";

import { ModalManageOption } from "../../ModalManageOption";

import * as S from "./styles";

import { formatToBRL } from "../../../utils/formatToBRL";
import { useColors } from "../../../hooks/useColors";

export type Option = {
  id: string;
  name: string;
  price: number;
};

interface ISelectProps {}

export function Select({}: ISelectProps) {
  const { selectedColor, colors, handleSelectColor } = useColors();
  const [selectOptionsIsOpen, setSelectOptionsIsOpen] = useState(false);
  const [managedOption, setManagedOption] = useState<Option>();
  const [showModalManageOption, setShowModalManageOption] = useState(false);

  const handleOpenOptions = () => {
    setSelectOptionsIsOpen(!selectOptionsIsOpen);
  };

  const handleOpenOptionManager = (option: Option) => {
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
            {selectedColor
              ? `${selectedColor.name} (R$${formatToBRL(selectedColor.price)})`
              : "Selecione uma cor"}
          </S.SelectedValue>

          {selectOptionsIsOpen ? (
            <S.Icon name="expand-less" size={25} />
          ) : (
            <S.Icon name="expand-more" size={25} />
          )}
        </S.Select>
      </TouchableWithoutFeedback>

      {selectOptionsIsOpen && (
        <S.SelectOptions>
          <ScrollView>
            {colors.map((color, index) => {
              return (
                <TouchableWithoutFeedback
                  onPress={() => handleSelectColor(color.id)}
                  onLongPress={() => handleOpenOptionManager(color)}
                  key={index}
                >
                  <S.Option isActive={selectedColor?.id === color.id}>
                    <S.ColorName isActive={selectedColor?.id === color.id}>
                      {color.name}
                    </S.ColorName>
                    <S.ColorPrice
                      isActive={selectedColor?.id === color.id}
                    >{`R$${formatToBRL(color.price)}`}</S.ColorPrice>
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
          option={managedOption!}
          handleClose={handleCloseModalManageOption}
          options={colors}
        />
      </Modal>
    </>
  );
}
