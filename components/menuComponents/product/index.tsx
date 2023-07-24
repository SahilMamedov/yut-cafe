import { Flex } from "@/components/shared/flex";
import { Grid } from "@mui/material";
import { FC } from "react";
import { Card } from "@/components/shared/card";
import { ProductGetDto } from "@/services/product/types";
import { BasketItemProps, basketActions } from "@/store/slices/basketSlice";
import { useActionCreators, useAppSelector } from "@/store/hooks";
import styled from "styled-components";
import { useRouter } from "next/router";

interface Props {
  products: ProductGetDto[];
  items: BasketItemProps[];
  onAddItem: (item: BasketItemProps) => void;
  onIncrement: (item: BasketItemProps) => void;
  onDecrement: (item: BasketItemProps) => void;
  onSelectProduct: (id: number) => void;
}

export const Product: FC<Props> = ({
  products,
  onAddItem,
  onDecrement,
  onIncrement,
  onSelectProduct,
  items,
}) => {
  return (
    <>
      <Flex>
        <Grid container spacing={2}>
          {products.map((item) => (
            <Grid key={item.id} item xl={3} lg={4} md={4} sm={6} xs={12}>
              <Card
                {...item}
                onSelectProduct={onSelectProduct}
                onAddItem={onAddItem}
                basketItem={items.find((x) => x.id === item.id)}
                onDecrement={onDecrement}
                onIncrement={onIncrement}
              />
            </Grid>
          ))}
        </Grid>
      </Flex>
    </>
  );
};
