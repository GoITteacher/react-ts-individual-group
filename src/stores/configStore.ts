import { create } from "zustand";

interface ConfigStore {
  lang: string;

  setLang: (newLang: string) => void;
}

export const useConfigStore = create<ConfigStore>()((setStore) => {
  return {
    lang: "en",

    setLang: (newLang) => {
      setStore({ lang: newLang });
    },
  };
});
