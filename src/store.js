import create from "zustand";

export const useUserStore = create((set) => ({
  currentUser: "",

  // dummy login action
  login: (username) =>
    set((_state) => ({ currentUser: username })),

  // dummy register action
  signup: ({ username, password, email }) =>
    set((_state) => ({ currentUser: username })),

  // dummy logout action
  logout: () => set((_state) => ({ currentUser: "" })),
}));
