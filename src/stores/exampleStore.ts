// import { create } from "zustand";

// interface BankAccountStore {
//   balance: number;
//   accountID: string;
//   transactions: Transaction[];
//   users: User[];

//   deposit: (money: number) => void;
//   withdraw: (money: number) => void;

//   setAccountId: (newId: string) => void;

//   addTransaction: (item: Transaction) => void;

//   addUser: (user: User) => void;
//   removeUser: (userId: string) => void;
// }

// export const useBankAccountStore = create<BankAccountStore>()((setStore) => {
//   return {
//     balance: 0,
//     accountID: "",
//     transactions: [],
//     users: [],

//     deposit: (money: number) => {
//       setStore((store) => {
//         return { balance: store.balance + money };
//       });
//     },

//     withdraw: (money: number) => {
//       setStore((store) => {
//         return { balance: store.balance - money };
//       });
//     },

//     setAccountId: (newId: string) => {
//       setStore((store) => {
//         return {
//           accountID: newId,
//         };
//       });
//     },

//     addTransaction: (item: Transaction) => {
//       setStore((store) => {
//         return {
//           transactions: [...store.transactions, item],
//         };
//       });
//     },

//     addUser: (user: User) => {
//       setStore((store) => {
//         return {
//           users: [...store.users, user],
//         };
//       });
//     },

//     removeUser: (userId: string) => {
//       setStore((store) => {
//         return {
//           users: store.users.filter((el) => el._id !== userId),
//         };
//       });
//     },
//   };
// });
