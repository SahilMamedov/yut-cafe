import { useAppSelector, useActionCreators } from "@/store/hooks";
import { basketSelector } from "@/store/selectors";
import { BasketItemProps, basketActions } from "@/store/slices/basketSlice";


export const useBasket = () => {
  const actions = useActionCreators(basketActions);
  const { items } = useAppSelector(basketSelector);
  const handleAddItem = (item: BasketItemProps) => {
    actions.addItem(item);
  };
  const handleIncrement = (item: BasketItemProps) => {
    actions.increment(item);
  };
  const handleDecrement = (item: BasketItemProps) => {
    if (!item || item.count === 1) {
      item && actions.removeProduct(item);
      return;
    }

    actions.decrement(item);
  };
  const handleRemove =(item:BasketItemProps)=>{
    actions.removeProduct(item)
   
  }

  return { handleDecrement, handleIncrement, handleAddItem, items,handleRemove };
};
