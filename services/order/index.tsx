import { CehckPropsType, ReturnPropsType } from "@/components/checkout/types";
import { http } from "@/services";

export const fetchCheckOrder = async (updateObject: CehckPropsType) => {
  return await http.post<ReturnPropsType>("/Order/checkOrder", updateObject);
};
export const fetchCreateOrder = async (obj: ReturnPropsType) => {
  return await http.post("/Order/CreateOrder", obj);
};
