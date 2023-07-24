import {
  BasketWrapper,
  Category,
  HeaderWrapper,
  List,
  Location,
  LocationName,
  Phone,
  StyledLink,
  ImageWrapper,
  Content,
  LinkTitle,
  HoveredMenuWrapper,
  TitleMenu,
  MenuList,
  BurgerContent,
  StyledReorderIcon,
} from "./styled";
import Image from "next/image";
import Container from "@mui/material/Container";
import { useEffect, useState } from "react";
import { BurgerMenu } from "@/components/headerComponents/burgerMenu";
import { Links } from "@/constant";
import { useActionCreators, useAppSelector } from "@/store/hooks";
import { basketActions } from "@/store/slices/basketSlice";
import Basket from "@phosphor-icons/react/dist/icons/Basket";
import { basketSelector } from "@/store/selectors";
import Link from "next/link";
import { ViewOrders } from "@/components/menuComponents/viewOrders";

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  const handleClik = () => {
    setOpenDrawer(!openDrawer);
  };

  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const actions = useActionCreators(basketActions);
  const { items, totalItems } = useAppSelector(basketSelector);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      setIsScrolled(scrollTop > 0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HeaderWrapper>
      <Container maxWidth="xl">
        <Content>
          <Location>
            <LocationName>МОСКВА</LocationName>
            <Phone>+7 (985) 177-47-10</Phone>
          </Location>
          <Category>
            <List>
              <StyledLink href={Links.MENU}>
                <LinkTitle>МЕНЮ</LinkTitle>
              </StyledLink>
              <HoveredMenuWrapper>
                <TitleMenu>МЕНЮ</TitleMenu>
                <MenuList>
                  <StyledLink href="">ПОСТНОЕ МЕНЮ</StyledLink>
                  <StyledLink href="">ПОСТНОЕ МЕНЮ</StyledLink>
                  <StyledLink href="">ПОСТНОЕ МЕНЮ</StyledLink>
                </MenuList>
              </HoveredMenuWrapper>
              <StyledLink href={Links.DELIVERY}>
                <LinkTitle>Условия доставки</LinkTitle>
              </StyledLink>
            </List>
            <StyledLink href={Links.BASE}>
              <ImageWrapper>
                <Image
                  alt=""
                  width={isScrolled ? 130 : 163}
                  height={isScrolled ? 110 : 150}
                  src="/assets/image/yut.png"
                />
              </ImageWrapper>
            </StyledLink>
            <List>
              <StyledLink href={Links.EVENTS}>
                <LinkTitle> CОБЫТИЯ</LinkTitle>
              </StyledLink>
              <StyledLink href={Links.REVIEWS}>
                <LinkTitle> ОТЗЫВЫ </LinkTitle>
              </StyledLink>
              <StyledLink href={Links.COMPANY}>
                <LinkTitle> КОМПАНИЯ </LinkTitle>
              </StyledLink>
            </List>
          </Category>
          <BasketWrapper onClick={handleClik}>
            <Basket size={28} />
            {totalItems} ₽
          </BasketWrapper>
        </Content>
        <BurgerContent>
          <StyledReorderIcon onClick={handleClickOpen} />
          <ImageWrapper>
            <Image
              alt=""
              width={isScrolled ? 130 : 163}
              height={isScrolled ? 110 : 150}
              src="/assets/image/yut.png"
            />
          </ImageWrapper>
          <BasketWrapper onClick={handleClik}>
            <Basket size={28} color="#ffffff" weight="bold" />
          </BasketWrapper>
        </BurgerContent>
      </Container>
      <BurgerMenu onClose={handleClose} open={open} />
      <ViewOrders openBasket={openDrawer} setOpenBasket={setOpenDrawer} />
    </HeaderWrapper>
  );
};
export default Header;
