import { create } from 'zustand'

type UserStore = {
  count: number
  inc: () => void
}

export const useUserStore = create<UserStore>()((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
}))

