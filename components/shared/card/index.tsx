import styled, { css } from "styled-components";
import Image from "next/image";
import { FC, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Button } from "../button";
import { BasketItemProps } from "@/store/slices/basketSlice";
import {
  Content,
  Count,
  Decrement,
  Gramm,
  Increment,
  Link,
  OldPrice,
  Price,
  Title,
  Wrapper,
} from "./styled";

interface Props {
  id: number;
  name: string;
  description: string;
  price: number;
  gramm: number;
  kkal: number;
  img: string;
  oldPrice: number;
  basketItem?: BasketItemProps;
  onAddItem: (item: BasketItemProps) => void;
  onIncrement: (item: BasketItemProps) => void;
  onDecrement: (item: BasketItemProps) => void;
  onSelectProduct: (id: number) => void;
}

export const Card: FC<Props> = ({
  description,
  id,
  img,
  name,
  price,
  oldPrice,
  onAddItem,
  gramm,
  kkal,
  basketItem,
  onDecrement,
  onIncrement,
  onSelectProduct,
}) => {
  return (
    <Wrapper>
      <Content>
        <Link onClick={() => onSelectProduct(id)}>
          <Image width={193} height={168} alt="" src={img} />
        </Link>

        <div>
          {oldPrice ? (
            <>
              <OldPrice>{oldPrice} ₽</OldPrice>
              <Price> {price} ₽</Price>
            </>
          ) : (
            <Price> {price} ₽</Price>
          )}
        </div>
        <Title>{name}</Title>
        <Gramm>
          грамм {gramm} / ккал {kkal}
        </Gramm>

        {!basketItem?.count ? (
          <Button
            onClick={() =>
              onAddItem({
                description: description,
                gramm: gramm,
                id: id,
                Img: img,
                kkal: kkal,
                name: name,
                price: +price,
                oldPrice: oldPrice,
              })
            }
            fullWidth
            renderIcon={<AddIcon />}
          >
            Добавить
          </Button>
        ) : (
          <Button
            style={{
              jsContent: "space-between",
            }}
            fullWidth
          >
            <Decrement onClick={() => onDecrement(basketItem)}>
              <RemoveIcon />
            </Decrement>
            <Count>{basketItem?.count}</Count>
            <Increment onClick={() => onIncrement(basketItem)}>
              <AddIcon />
            </Increment>
          </Button>
        )}
      </Content>
    </Wrapper>
  );
};
