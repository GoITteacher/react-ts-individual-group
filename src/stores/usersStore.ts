import type { User8 } from "./../types/users";
import { create } from "zustand";

interface ExampleStore {
  users: User8[];

  setUser: (user: User8) => void;
}
export const useUser8Store = create<ExampleStore>()((setStore) => {
  return {
    users: [],
    setUser: (newUser) => {
      setStore((store) => {
        return {
          users: [...store.users, newUser],
        };
      });
    },
  };
});
