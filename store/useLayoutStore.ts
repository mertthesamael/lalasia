import { create } from "zustand";

type LayoutStore = {
  mobileOpen: boolean;
  handleMobileOpen: (val: boolean) => void;
};

export const useLayoutStore = create<LayoutStore>()((set) => ({
  mobileOpen: false,
  handleMobileOpen: (val) => set((state) => ({ mobileOpen: val })),
}));
