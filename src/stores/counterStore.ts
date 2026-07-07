import { create } from "zustand";

interface CounterStore {
  valueCounter1: number;
  setValueCounter1: (newValueCounter1: number) => void;
  valueCounter2: number;
  setValueCounter2: (newValueCounter2: number) => void;
}

export const useCounterStore = create<CounterStore>()((setStore) => {
  return {
    valueCounter1: 0,
    valueCounter2: 0,

    setValueCounter1: (newValueCounter1) => {
      setStore({ valueCounter1: newValueCounter1 });
    },
    setValueCounter2: (newValueCounter2) => {
      setStore({ valueCounter2: newValueCounter2 });
    },
  };
});
