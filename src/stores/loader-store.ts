import { create } from "zustand";

type State = {
  isLoading: boolean;
};

type Action = {
  start(): void;
  stop(): void;
};

type Store = State & Action;

export const useLoaderStore = create<Store>()((set) => ({
  isLoading: false,

  start() {
    set(() => ({ isLoading: true }));
  },

  stop() {
    set(() => ({ isLoading: false }));
  },
}));
