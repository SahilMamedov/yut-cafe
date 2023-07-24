import { updatePriceItem } from "@/utils/basketFuctions";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface BasketItemProps {
  id: number;
  name: string;
  description: string;
  price: number;
  gramm: number;
  oldPrice:number;
  kkal: number;
  Img: string;
  count?: number;
  total?: number;

}
interface initialStateTypes {
  items: BasketItemProps[];
  totalItems: number;
}

const initialState: initialStateTypes = {
  items: [],
  totalItems: 0,
};

const basketSlices = createSlice({
  name: "basketSlice",
  initialState,
  reducers: {
    totalItem(state) {
      state.totalItems = +state.items
        .reduce((acc, item) => (acc += item.price * (item.count as number)), 0)
        .toFixed(2);
    },

    addItem(state, action: PayloadAction<BasketItemProps>) {
      const existItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existItem?.count) {
        existItem.count++;
        return;
      }

      state.items.push({ ...action.payload, count: 1 });
      basketSlices.caseReducers.totalItem(state);
    },
    removeProduct(state, action: PayloadAction<BasketItemProps>) {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      basketSlices.caseReducers.totalItem(state);
    },
    increment(state, action: PayloadAction<BasketItemProps>) {
      basketSlices.caseReducers.addItem(state, action);
      updatePriceItem(state.items, action.payload.id);
      basketSlices.caseReducers.totalItem(state);
    },
    decrement(state, action: PayloadAction<BasketItemProps>) {
      const existItem = state.items.find((obj) => obj.id === action.payload.id);
      if (!existItem?.count) return;
      existItem.count--;
      updatePriceItem(state.items, action.payload.id);
      basketSlices.caseReducers.totalItem(state);
    },
  },
});
export const { actions: basketActions, reducer: basketSlice } = basketSlices;
