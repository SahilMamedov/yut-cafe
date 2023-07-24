import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface initialStateTypes {
  selectedCategoryId: string;
}
const initialState: initialStateTypes = {
  selectedCategoryId: "",
};

const categorySlices = createSlice({
  name: "categorySlice",
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<string>) {
      state.selectedCategoryId = action.payload;
    },
  },
});
export const { actions: categoryActions, reducer: categorySlice } =
  categorySlices;
