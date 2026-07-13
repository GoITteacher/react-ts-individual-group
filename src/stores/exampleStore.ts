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

// export const useMyStore = create<BankAccountStore>()((setStore)=>{
//   return {
//     balance: number;
//   accountID: string;
//   transactions: Transaction[];
//   users: User[];

//   deposit: (money: number) =>{
//     setStore(store=>{
//       return {}
//     })
//   }

//   }
// })

// export const useBankAccountStore = create<BankAccountStore>()((setStore) => {
//   return {
//     balance: 0,
//     accountId: "",
//     transaction: [],
//     users: [],

//     deposit: (money: number) => {
//       setStore((store) => {
//         return {};
//       });
//     },

//     withdraw: (money) => {
//       setStore((store) => {
//         return {};
//       });
//     },

//     setAccountId: (newId) => {
//       setStore((store) => {
//         return {};
//       });
//     },

//     addTransaction: (transaction) => {
//       setStore((store) => {
//         return {};
//       });
//     },

//     addUser: (user) => {
//       setStore((store) => {
//         return {};
//       });
//     },

//     removeUser: () => {
//       setStore((store) => {
//         return {};
//       });
//     },
//   };
// });
