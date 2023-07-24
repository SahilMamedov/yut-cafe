import eventData from "../../mock/events.json";
import {
  EventBox,
  EventDate,
  EventDateBox,
  EventDesc,
  EventTitle,
  EventsContainer,
  EventsImgBox,
  Wrapper,
} from "./styled";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

export const StyledImage = styled(Image)``;
export const EventsComponents = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Wrapper>
      <EventsContainer>
        {eventData.map((item) => (
          <>
            <EventBox>
              <EventDateBox>
                <EventDate>{item.date.split(" ")[0]}</EventDate>
                <EventDate>{item.date.split(" ")[1]}</EventDate>
                <EventDate>{item.date.split(" ")[2]}</EventDate>
              </EventDateBox>

              <EventsImgBox>
                <Slider {...settings}>
                  {item.images.map((img, i) => (
                    <EventsImgBox key={i}>
                      <Image
                        width={100}
                        height={100}
                        sizes="100%"
                        src={img}
                        alt=""
                      />
                    </EventsImgBox>
                  ))}
                </Slider>
              </EventsImgBox>

              <EventTitle>{item.title}</EventTitle>
              <EventDesc>{item.desc}</EventDesc>
            </EventBox>
          </>
        ))}
      </EventsContainer>
    </Wrapper>
  );
};
