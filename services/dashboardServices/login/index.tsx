import { http } from "@/services";

export const fetchLoginToken = async (email: string, password: string) => {
  return await http.post<{ token: string }>("/Account/login", {
    email: email,
    password: password,
  });
};
