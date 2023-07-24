import { BasketItemProps } from "@/store/slices/basketSlice";

export const updatePriceItem = (items: BasketItemProps[], id: number) => {
  const existItem = items.find((item) => item.id === id);
  if (!existItem) return;
  existItem.total = +(existItem.price * (existItem.count as number)).toFixed(2);
};
