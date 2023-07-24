import { FC } from "react";
import {
  AddProductBox,
  CardBox,
  CardContent,
  CardImg,
  GrammKkal,
  ProductDesc,
  ProductName,
  ProductOldPrice,
  ProductPrice,
  StyledBox,
} from "./styled";
import Image from "next/image";
import { BasketItemProps } from "@/store/slices/basketSlice";
import { Button } from "@/components/shared/button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Decrement, Increment, Count } from "@/components/shared/card/styled";
interface Props {
  id: number;
  name: string;
  description: string;
  price: number;
  gramm: number;
  kkal: number;
  oldPrice: number;
  img: string;
  basketItem?: BasketItemProps;
  onAddItem: (item: BasketItemProps) => void;
  onIncrement: (item: BasketItemProps) => void;
  onDecrement: (item: BasketItemProps) => void;
}

export const CompanyCard: FC<Props> = ({
  description,
  price,
  oldPrice,
  gramm,
  id,
  img,
  kkal,
  name,
  basketItem,
  onDecrement,
  onIncrement,
  onAddItem,
}) => {
  return (
    <CardBox>
      <CardImg>
        <Image alt="" width={320} height={280} src={img} />
      </CardImg>
      <CardContent>
        <ProductName>{name}</ProductName>
        <ProductDesc>{description}</ProductDesc>
        <GrammKkal>
          <b>Gramm:</b> {gramm}
        </GrammKkal>
        <GrammKkal>
          <b>Kkal:</b> {kkal}
        </GrammKkal>
        <div>
          {oldPrice ? (
            <>
              <ProductOldPrice>{oldPrice} ₽</ProductOldPrice>
              <ProductPrice>{price} ₽</ProductPrice>
            </>
          ) : (
            <ProductPrice>{price} ₽</ProductPrice>
          )}
        </div>
        <AddProductBox>
          <StyledBox>
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
          </StyledBox>
        </AddProductBox>
      </CardContent>
    </CardBox>
  );
};
