import { ProductCompantDto } from "@/services/productCompany/types";
import { FC, useState } from "react";
import { CompanyCard } from "./companyCard";
import Grid from "@mui/material/Grid";
import { WrapperStyle } from "./companyCard/styled";
import { BasketItemProps } from "@/store/slices/basketSlice";

interface Props {
  productCompany: ProductCompantDto[];
  items: BasketItemProps[];
  onAddItem: (item: BasketItemProps) => void;
  onIncrement: (item: BasketItemProps) => void;
  onDecrement: (item: BasketItemProps) => void;
}

export const ProductCompany: FC<Props> = ({
  productCompany,
  onIncrement,
  onDecrement,
  onAddItem,
  items,
}) => {
  return (
    <Grid container pt={3}>
      {productCompany?.map((item) => (
        <Grid key={item.id} style={WrapperStyle} xl={3} lg={4} md={4} sm={6} xs={12}>
          <CompanyCard
            onAddItem={onAddItem}
            onDecrement={onDecrement}
            onIncrement={onIncrement}
            basketItem={items.find((x) => x.id === item.id)}
            key={item.id}
            {...item}
          />
        </Grid>
      ))}
    </Grid>
  );
};
