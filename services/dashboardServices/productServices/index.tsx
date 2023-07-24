import { http } from "@/services";
import { ProductGetDto } from "@/services/product/types";

export const getAllProductAdmin = async () => {
  return await http.get<ProductGetDto[]>("/Product/getAllAdmin");
};
export const getOneProduct = async (id: number) => {
  return await http.get<ProductGetDto>(`Product/adminGetOne/${id}`);
};
export const createProduct = async (formData: any) => {
  return await http.post("/product", formData);
};

export const deleteProduct = async (id: number) => {
  return await http.delete(`/Product/${id}`);
};
export const updateProduct = async (formData: any) => {
  return await http.put("/Product", formData);
};
