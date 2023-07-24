import * as React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import Drawer from "@mui/material/Drawer";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { useEffect, useState } from "react";
import { useAppSelector } from "@/store/hooks";
import {
  CloseBtn,
  EmtpyOrder,
  OrderCountBox,
  OrderHeader,
  OrderItemCount,
  OrderItemImg,
  OrderItemName,
  OrderListWrapper,
  OrderTitle,
  Wrapper,
  OrderItemDelet,
  CheckoutBtnBox,
  CheckOutBtnStyled,
  AddItemBtnStyled,
  StyledCount,
  StyledBox,
} from "./styled";
import { Flex } from "@/components/shared/flex";
import { useBasket } from "@/hooks/useBasket";
import { Button } from "@/components/shared/button";
import { DetailModal } from "../DetailModal";
import { getOneProduct } from "@/services/product/productServices";
import { IProduct } from "@/types";
import { DetailOldPrice, DetailPrice } from "../DetailModal/styled";
import Link from "next/link";
import { Links } from "@/constant";

interface Props {
  openBasket: boolean;
  setOpenBasket: (value: boolean) => void;
}

export const ViewOrders: React.FC<Props> = ({ openBasket, setOpenBasket }) => {
  const [selectedProductId, setSelectedProductId] = useState(0);
  const { handleDecrement, handleIncrement, handleRemove } = useBasket();
  const { items, totalItems } = useAppSelector((state) => state.basket);
  const [product, setProduct] = useState<IProduct>();
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleOpenDetail = (productId: number) => {
    setSelectedProductId(productId);
    setOpenModal(!openModal);
  };

  useEffect(() => {
    const fetchGetOneProduct = async () => {
      if (!selectedProductId) return;
      const { data } = await getOneProduct(selectedProductId.toString());
      setProduct(data.result);
    };

    fetchGetOneProduct();
  }, [selectedProductId]);

  return (
    <div>
      <DetailModal
        openDetailModal={openModal}
        setOpenDetailModal={setOpenModal}
        product={product}
      />

      <Drawer
        anchor={"right"}
        open={openBasket}
        onClose={() => setOpenBasket(false)}
      >
        <StyledBox>
          <Wrapper>
            <OrderHeader>
              <CloseBtn onClick={() => setOpenBasket(false)}>X</CloseBtn>
            </OrderHeader>

            {items.length == 0 ? (
              <EmtpyOrder>
                <Image
                  style={{ marginBottom: 30 }}
                  width={400}
                  height={400}
                  alt=""
                  src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
                />
                <OrderTitle>Корзина пуста. Выберите пункты из меню.</OrderTitle>
              </EmtpyOrder>
            ) : (
              <>
                <OrderTitle>Your Order</OrderTitle>
                {items.map((item) => (
                  <OrderListWrapper key={item.id}>
                    <Flex>
                      <OrderItemImg onClick={() => handleOpenDetail(item.id)}>
                        <Image
                          style={{ borderRadius: 6 }}
                          width={79}
                          height={49}
                          alt=""
                          src={item.Img}
                        />
                      </OrderItemImg>
                      <div>
                        <OrderItemName>{item.name}</OrderItemName>
                        <div>
                          {item.oldPrice ? (
                            <>
                              <DetailOldPrice>{item.oldPrice} ₽</DetailOldPrice>
                              <DetailPrice> {item.price} ₽</DetailPrice>
                            </>
                          ) : (
                            <DetailPrice> {item.price} ₽</DetailPrice>
                          )}
                        </div>
                      </div>
                    </Flex>
                    <OrderCountBox>
                      <OrderItemCount onClick={() => handleIncrement(item)}>
                        <AddIcon />
                      </OrderItemCount>
                      <OrderItemCount>{item.count}</OrderItemCount>
                      <OrderItemCount onClick={() => handleDecrement(item)}>
                        <RemoveIcon />
                      </OrderItemCount>

                      <OrderItemDelet>
                        <Tooltip title="Delete">
                          <IconButton
                            onClick={() => handleRemove(item)}
                            sx={{ color: "rgba(0, 157, 224, 0.96)" }}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </Tooltip>
                      </OrderItemDelet>
                    </OrderCountBox>
                  </OrderListWrapper>
                ))}
              </>
            )}
            {items.length > 0 ? (
              <Link href={Links.CHECKOUT}>
                <CheckoutBtnBox>
                  <Button
                    onClick={() => setOpenBasket(false)}
                    fullWidth
                    style={CheckOutBtnStyled}
                  >
                    <div>
                      <StyledCount>{items.length}</StyledCount>{" "}
                      <span>Оформить заказ</span>
                    </div>
                    <span>{totalItems} ₽</span>
                  </Button>
                </CheckoutBtnBox>
              </Link>
            ) : (
              <Link href={Links.MENU}>
                <CheckoutBtnBox>
                  <Button
                    onClick={() => setOpenBasket(false)}
                    fullWidth
                    style={AddItemBtnStyled}
                  >
                    Перейти в меню
                  </Button>
                </CheckoutBtnBox>
              </Link>
            )}
          </Wrapper>
        </StyledBox>
      </Drawer>
    </div>
  );
};
