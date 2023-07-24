import { http } from "@/services";
import { CategoryGetDto } from "@/services/category/types";

export const getAllCategoryAdmin = async () => {
  return await http.get<CategoryGetDto[]>("/Category/getAllAdmin");
};
export const getOneCategory = async (id: number) => {
  return await http.get<CategoryGetDto>(`/Category/getOneAdmin/${id}`);
};
export const createParentCategory = async (formData: any) => {
  return await http.post("/Category/createParentCategory", formData);
};

export const deleteParentCategory = async (id: number) => {
  return await http.delete(`/Category/removeParentCategory/${id}`);
};
export const updateParentCategory = async (formData: any) => {
  return await http.put("/Category/parentCategoryUpdate", formData);
};
