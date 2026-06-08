import axios from "axios";
import type { User } from "../types/users";

export async function fetchUsers() {
  const baseURL = "https://jsonplaceholder.typicode.com";
  const endPoint = "/users";
  const url = baseURL + endPoint;

  const res = await axios.get<User[]>(url);
  return res.data;
}
