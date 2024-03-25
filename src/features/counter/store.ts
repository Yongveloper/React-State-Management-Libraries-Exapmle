import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface ICountStore {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export const useCountStore = create<ICountStore>()(
  devtools((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
  }))
);
