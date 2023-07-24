import {
  BgImageBox,
  ClientComment,
  ClientName,
  ClientSay,
  Container,
  ImgBox,
  ReviewsLine,
  ReviewsTitle,
  StyledBox,
  Wrapper,
} from "./styled";
import Image from "next/image";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export const ReviewsComponents = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Wrapper>
      <Container>
        <Container>
          <BgImageBox>
            <Image
              alt=""
              width={100}
              height={400}
              sizes="100%"
              src="https://radiustheme.com/demo/wordpress/redchili/wp-content/themes/redchili/assets/img/banner.jpg"
            />
          </BgImageBox>
        </Container>
        <Container>
          <ReviewsTitle>Наш Клиент</ReviewsTitle>
          <ClientSay>
            <ReviewsLine />
            Что говорят наши клиенты
            <ReviewsLine />
          </ClientSay>
          <Slider {...settings}>
            <StyledBox>
              <ImgBox>
                <Avatar
                  alt="Remy Sharp"
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  sx={{ width: 90, height: 90 }}
                />
              </ImgBox>
              <Rating
                readOnly
                name="size-small"
                defaultValue={5}
                size="small"
              />
              <ClientComment>
                Я рекомендую Ресторан Уют всем, кто хочет насладиться отличной
                едой и приятной атмосферой. Это место, где можно расслабиться,
                наслаждаться вкусом и получить истинное удовольствие от
                гастрономического опыта.
              </ClientComment>
              <ClientName>Олег Абрамов</ClientName>
            </StyledBox>
            <StyledBox>
              <ImgBox>
                <Avatar
                  alt="Remy Sharp"
                  src="https://img.freepik.com/free-photo/man-wearing-t-shirt-gesturing_23-2149393645.jpg"
                  sx={{ width: 90, height: 90 }}
                />
              </ImgBox>
              <Rating
                readOnly
                name="size-small"
                defaultValue={5}
                size="small"
              />
              <ClientComment>
                Ресторан Уют оставило у меня самые приятные впечатления.
                Внимательный и дружелюбный персонал сделал все возможное, чтобы
                мое посещение было комфортным. Блюда были превосходными и поданы
                с изыском.
              </ClientComment>
              <ClientName>Егор Попов</ClientName>
            </StyledBox>
            <StyledBox>
              <ImgBox>
                <Avatar
                  alt="Remy Sharp"
                  src="https://images.healthshots.com/healthshots/en/uploads/2020/12/08182549/positive-person.jpg"
                  sx={{ width: 90, height: 90 }}
                />
              </ImgBox>
              <Rating
                readOnly
                name="size-small"
                defaultValue={5}
                size="small"
              />
              <ClientComment>
                Не могу не похвалить Ресторан Уют за их европейские деликатесы.
                Великолепный выбор блюд, прекрасно сочетающихся вкусы и высокое
                качество приготовления. Это действительно место для гурманов!
              </ClientComment>
              <ClientName>Татьяна Новикова</ClientName>
            </StyledBox>
          </Slider>
        </Container>
      </Container>
    </Wrapper>
  );
};
