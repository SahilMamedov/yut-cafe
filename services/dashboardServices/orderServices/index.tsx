import { http } from "@/services";
import { GetOrderItemType, GetOrderType } from "@/types";

export const GetAllOrders = async () => {
  return await http.get<GetOrderType[]>("/Order/getOrderAll");
};

export const UpdateOrderStatus = async (
  orderId: number,
  orderStatus: number
) => {
  return await http.put(
    `/Order/updateOrderStatus?orderId=${orderId}&orderStatus=${orderStatus}`
  );
};

export const GetOrderItemAll = async (orderId: number) => {
  return await http.get<GetOrderItemType[]>(
    `/Order/getOrderItemAll?orderId=${orderId}`
  );
};
