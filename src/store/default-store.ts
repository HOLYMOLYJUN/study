import { create } from "zustand";

type TDarkMode = "dark" | "light";

interface IUseDefaultStore {
  darkMode: TDarkMode;
  setDarkMode: (mode: TDarkMode) => void;
}

export const useDefaultStore = create<IUseDefaultStore>((set) => ({
  darkMode: "light",
  setDarkMode: (mode) => set({ darkMode: mode }),
}));

