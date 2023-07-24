import { http } from "@/services";
import { ProductGetDto } from "./types";
import { IProduct } from "@/types";

export const getAllProduct = async (categoryId: string, page: string) => {
  return await http.get<{ result: ProductGetDto[]; totalCount: number }>(
    `/product?categoryId=${categoryId}&page=${page}&size=6`
  );
 
  
};
export const getOneProduct = async (productId: string) => {


  return await http.get<{ result: IProduct }>(`/product/${productId}`);
  
};

export const getProductPopular= async ()=>{

  return await http.get<{result:IProduct[]}>('/Product/popular')
}
