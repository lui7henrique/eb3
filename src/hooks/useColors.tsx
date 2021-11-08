import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, ReactNode, useContext, useState } from "react";
import uuid from "react-native-uuid";
import * as Haptics from "expo-haptics";

export type Color = {
  id: string;
  name: string;
  price: number;
};

type ColorsProviderType = {
  loadData: () => void;
  resetData: () => void;
  colors: Color[];
  selectedColor: Color | undefined;
  handleSelectColor: (id: string) => void;
  addNewColor: (name: string, price: number) => void;
  removeColor: (id: string) => void;
  editColor: (id: string, name?: string, price?: number) => void;
};

type ColorsProviderProps = {
  children: ReactNode;
};

const ColorsContext = createContext({} as ColorsProviderType);

export function ColorsProvider({ children }: ColorsProviderProps) {
  const [colors, setColors] = useState<Color[]>([]);
  const [selectedColor, setSelectedColor] = useState<Color>();
  const dataKey = "@eb3:colors";

  const loadData = async () => {
    const data = await AsyncStorage.getItem(dataKey);
    const newColors: Color[] = data ? JSON.parse(data!) : [];
    setColors(newColors);
  };

  const resetData = async () => {
    AsyncStorage.removeItem(dataKey);
  };

  const addNewColor = async (name: string, price: number) => {
    const data = await AsyncStorage.getItem(dataKey);
    const currentData = data ? JSON.parse(data) : [];

    const newColor = {
      id: String(uuid.v4()),
      name,
      price,
    };

    const dataFormatted = [...currentData, newColor];
    setColors(dataFormatted);
    await AsyncStorage.setItem(dataKey, JSON.stringify(dataFormatted));
  };

  const removeColor = async (id: string) => {
    const data = await AsyncStorage.getItem(dataKey);
    const currentData = data ? JSON.parse(data) : [];

    const dataFormatted = currentData.filter((color: Color) => color.id !== id);
    setColors(dataFormatted);
    await AsyncStorage.setItem(dataKey, JSON.stringify(dataFormatted));
  };

  const editColor = async (id: string, name?: string, price?: number) => {
    const data = await AsyncStorage.getItem(dataKey);
    const currentData = data ? JSON.parse(data) : [];

    const newItem = {
      id,
      name,
      price,
    };
    const itemIndex = currentData.findIndex((item: Color) => item.id === id);
    const dataFormatted = currentData;
    dataFormatted[itemIndex] = newItem;

    setColors(dataFormatted);
    await AsyncStorage.setItem(dataKey, JSON.stringify(dataFormatted));
  };

  const handleSelectColor = (id: string) => {
    const newSelectedColor = colors.find((color) => color.id === id);
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    setSelectedColor(newSelectedColor);
  };

  return (
    <ColorsContext.Provider
      value={{
        loadData,
        colors,
        handleSelectColor,
        selectedColor,
        resetData,
        addNewColor,
        removeColor,
        editColor,
      }}
    >
      {children}
    </ColorsContext.Provider>
  );
}

export function useColors() {
  const context = useContext(ColorsContext);
  return context;
}
