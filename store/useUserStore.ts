import { TUser } from "@/types/User";
import { JsonValue } from "@prisma/client/runtime/library";
import { create } from "zustand";

type UserStore = {
  user: TUser;
  handleUser: (user: TUser) => void;
};

export const useUserStore = create<UserStore>()((set) => ({
  user: null,
  handleUser: (newUser) => set((state) => ({ user: newUser })),
}));
