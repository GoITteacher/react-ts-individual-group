import { create } from "zustand";
import type { UserForm } from "../types/usersform";

interface UserFormStore {
  users: UserForm[];

  addUsers: (user: UserForm) => void;
  removeUsers: (userLastName: string) => void;
  clearUsers: () => void;
}

export const useUserFormStore = create<UserFormStore>()((setStore) => {
  return {
    users: [],

    addUsers: (newUser) => {
      setStore((store) => {
        return {
          users: [...store.users, newUser],
        };
      });
    },

    removeUsers: (userLastName) => {
      setStore((store) => {
        return {
          users: store.users.filter((el) => el.lastName !== userLastName),
        };
      });
    },

    clearUsers: () => {
      setStore((store) => {
        return { users: [] };
      });
    },
  };
});
