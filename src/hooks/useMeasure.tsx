import React, { createContext, ReactNode, useContext, useState } from "react";
import Toast from "react-native-toast-message";

import { api } from "../services/api";

import * as Haptics from "expo-haptics";

type MeasureResponse = Array<{
  created_at: string;
  value: string;
}>;

export type Measure = number | undefined;

type MeasureProviderType = {
  loadMeasure: () => Promise<void>;
  measure: Measure;
  setMeasure: (arg0: Measure) => void;
  isLoading: boolean;
  setIsLoading: (arg0: boolean) => void;
};

type MeasureProviderProps = {
  children: ReactNode;
};

const MeasureContext = createContext({} as MeasureProviderType);

const toastStyle = {
  backgroundColor: "#AD033B",
};

export function MeasureProvider({ children }: MeasureProviderProps) {
  const [measure, setMeasure] = useState<Measure>();
  const [isLoading, setIsLoading] = useState(false);

  const loadMeasure = async (): Promise<void> => {
    setIsLoading(true);
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);

    try {
      const { data } = await api.get<MeasureResponse>("/medicao/data");
      setMeasure(+data[0].value);
      setIsLoading(false);

      Toast.show({
        type: "success",
        text1: `Medida recebida com sucesso: ${data[0].value} m²`,
      });
    } catch (err) {
      Toast.show({
        type: "success",
        text1: `Error: ${err}`,
      });
    }
  };

  return (
    <MeasureContext.Provider
      value={{ loadMeasure, measure, setMeasure, isLoading, setIsLoading }}
    >
      {children}
    </MeasureContext.Provider>
  );
}

export function useMeasure() {
  const context = useContext(MeasureContext);
  return context;
}
