import { create } from "zustand";

export const useResources = create((set) => ({
  money: 100,
  people: 100,
  decreaseMoney: (mount) =>
    set((state) => ({ money: state.money === 0 ? 0 : state.money - mount })),
  decreasePeople: (mount) =>
    set((state) => ({ people: state.people === 0 ? 0 : state.people - mount })),
  increaseMoney: (mount) =>
    set((state) => ({
      money: state.money === 100 ? 100 : state.money + mount,
    })),
  increasePeople: (mount) =>
    set((state) => ({
      people: state.people === 100 ? 100 : state.people + mount,
    })),
  setMoney: (value) => set(() => ({ money: value })),
  setPeople: (value) => set(() => ({ people: value })),
}));
