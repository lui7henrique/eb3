import React, { createContext, ReactNode, useContext, useState } from "react";
import { api } from "../services/api";

import * as Haptics from "expo-haptics";

type MeasureResponse = {
  measure: number;
};

export type Measure = number | undefined;

type MeasureProviderType = {
  loadMeasure: () => Promise<void>;
  measure: Measure;
  setMeasure: (arg0: Measure) => void;
  isLoading: boolean;
};

type MeasureProviderProps = {
  children: ReactNode;
};

const MeasureContext = createContext({} as MeasureProviderType);

export function MeasureProvider({ children }: MeasureProviderProps) {
  const [measure, setMeasure] = useState<Measure>();
  const [isLoading, setIsLoading] = useState(false);

  const loadMeasure = async (): Promise<void> => {
    setIsLoading(true);
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);

    try {
      const { data } = await api.get<MeasureResponse>("/measure");
      setMeasure(data.measure);
    } catch (err) {
      alert(err);
    } finally {
      console.log("finally");
    }
  };

  return (
    <MeasureContext.Provider
      value={{ loadMeasure, measure, setMeasure, isLoading }}
    >
      {children}
    </MeasureContext.Provider>
  );
}

export function useMeasure() {
  const context = useContext(MeasureContext);
  return context;
}
