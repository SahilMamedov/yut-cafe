import { Button } from "@/components/shared/button";
import { Modal } from "@/components/shared/modal";
import { BasketItemProps } from "@/store/slices/basketSlice";
import { IProduct } from "@/types";
import { FC, useEffect, useState } from "react";
import styled, { DefaultTheme, css } from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Grid } from "@mui/material";
interface Props {
  handleClose: () => void;
  open: boolean;
  product: IProduct;
  basketItem?: BasketItemProps;
  onAddItem: (item: BasketItemProps) => void;
  onIncrement: (item: BasketItemProps) => void;
  onDecrement: (item: BasketItemProps) => void;
}
export const Title = styled.h4<{ theme: DefaultTheme }>`
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  padding-bottom: 10px;
  @media (max-width: 600px) {
    font-size: ${({ theme }) => theme.fontSizes.small};
  }
`;
export const Description = styled.p`
  font-size: 16px;
  line-height: 24px;
  @media (max-width: 600px) {
    font-size: 12px;
    line-height: 17px;
  }
  margin-bottom: 10px;
`;
export const AdditionalInfo = styled.div``;
export const Gramm = styled.span`
  color: #9e9b98;
  font-size: 16px;
`;
export const Kkal = styled.span`
  color: #9e9b98;
  font-size: 16px;
  margin-left: 10px;
`;
export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ButtonStyle = css`
  background: none;
  border: none;
  cursor: pointer;
  color: white;
  font-size: 13px;
`;
export const Increment = styled.button`
  ${ButtonStyle}
`;
export const Decrement = styled.button`
  ${ButtonStyle}
`;
export const Count = styled.button`
  ${ButtonStyle}
  font-weight: 700;
`;
export const Summ = styled.p``;
export const Total = styled.p``;

export const ProductDetail: FC<Props> = ({
  handleClose,
  open,
  product,
  onAddItem,
  onDecrement,
  onIncrement,
  basketItem,
}) => {
  return (
    <Modal onClose={handleClose} open={open}>
      <Title>{product.name}</Title>
      <Description>
        Люля кебаб куриный, люля кебаб говяжий, свиная мякоть, мякоть куриная,
        овощи гриль
      </Description>
      <AdditionalInfo>
        <Gramm>{product.gramm} г</Gramm>
        <Kkal>/ {product.kkal} ккал</Kkal>
      </AdditionalInfo>
      <Grid container alignItems="center" spacing={2} marginTop={2}>
        <Grid item xl={4} lg={4} md={4} sm={5} xs={12}>
          <Button
            onClick={() => {
              if (!basketItem?.count) {
                onAddItem({
                  description: product.description,
                  gramm: product.gramm,
                  id: product.id,
                  Img: product.img,
                  kkal: product.kkal,
                  name: product.name,
                  price: +product.price,
                });
              }
            }}
            style={{
              jsContent: basketItem?.count ? "space-between" : "",
            }}
            fullWidth
            renderIcon={!basketItem?.count ? <AddIcon /> : <></>}
          >
            {!basketItem?.count ? (
              "Добавить"
            ) : (
              <>
                <Decrement onClick={() => onDecrement(basketItem)}>
                  <RemoveIcon />
                </Decrement>
                <Count>{basketItem?.count}</Count>
                <Increment onClick={() => onIncrement(basketItem)}>
                  <AddIcon />
                </Increment>
              </>
            )}
          </Button>
        </Grid>
        <Grid item xl={8} lg={8} md={8} sm={7} xs={12}>
          <SummWrapper>
            <Summ>Сумма</Summ>
            <Total>
              {basketItem?.count ? basketItem.price * +basketItem.count : 0} ₽
            </Total>
          </SummWrapper>
        </Grid>
      </Grid>
    </Modal>
  );
};
export const SummWrapper = styled.div`
  text-align: end;

  @media (max-width: 600px) {
    text-align: center;
  }
`;
