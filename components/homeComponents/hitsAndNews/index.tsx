import {
  Wrapper,
  Price,
  ProductName,
  StyledButton,
  SubTitle,
  Title,
  SliderBox,
  OldPrice,
  PriceBox,
  StyledBox,
} from "./styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IProduct } from "@/types";
import Image from "next/image";
import Slider from "react-slick";
import { BasketItemProps } from "@/store/slices/basketSlice";
import { useMemo } from "react";

interface Props {
  products: IProduct[];
  onAddItem: (item: BasketItemProps) => void;
  basketItem?: BasketItemProps[];
}
const showCheckSlide = (count: number) => {
  if (count === 1) {
    return count;
  } else if (count === 2) {
    return count;
  } else {
    return 4;
  }
};
export const HitsAndNews: React.FC<Props> = ({
  products,
  onAddItem,
  basketItem,
}) => {
  var settings = useMemo(
    () => ({
      dots: true,
      infinite: false,
      speed: 1000,
      slidesToShow: 4,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToScroll: 4,
      style: {
        position: "static",
      },
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1275,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 730,

          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            style: {
              marginLeft: "80px",
            },
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            style: { marginLeft: "25px" },
          },
        },

        {
          breakpoint: 424,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            style: { marginLeft: "0px" },
          },
        },
      ],
    }),
    []
  );
  return (
    <Wrapper>
      <Title>ХИТЫ И НОВИНКИ</Title>
      <SubTitle>Популярное</SubTitle>
      <Slider {...settings}>
        {products.map((p) => (
          <StyledBox key={p.id}>
            <Image
              style={{ borderRadius: 8 }}
              src={p.img}
              alt=""
              width={280}
              height={230}
            />
            <SliderBox>
              <ProductName>{p.name}</ProductName>
              <PriceBox>
                {p.oldPrice ? (
                  <>
                    <OldPrice>{p.oldPrice} ₽</OldPrice>
                    <Price> {p.price} ₽</Price>
                  </>
                ) : (
                  <Price> {p.price} ₽</Price>
                )}
              </PriceBox>

              <StyledButton
                onClick={
                  basketItem?.find((x) => x.id === p.id)
                    ? undefined
                    : () =>
                        onAddItem({
                          description: p.description,
                          gramm: p.gramm,
                          id: p.id,
                          Img: p.img,
                          kkal: p.kkal,
                          name: p.name,
                          price: +p.price,
                          oldPrice: Number(p.oldPrice),
                        })
                }
              >
                {basketItem?.find((x) => x.id === p.id)
                  ? "Добавлен"
                  : "ЗАКАЗАТЬ"}
              </StyledButton>
            </SliderBox>
          </StyledBox>
        ))}
      </Slider>
    </Wrapper>
  );
};
