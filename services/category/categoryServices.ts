import { http } from "@/services";
import { CategoryGetDto } from "./types";

export const getAllCategory = async () => {
  return await http.get<CategoryGetDto[]>("/category");
};


