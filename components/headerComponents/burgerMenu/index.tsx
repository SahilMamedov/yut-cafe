import * as React from "react";

import Dialog from "@mui/material/Dialog";

import CloseIcon from "@mui/icons-material/Close";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { FC } from "react";
import styled, { DefaultTheme } from "styled-components";
import Image from "next/image";
import { Flex } from "@/components/shared/flex";
import { Container } from "@mui/material";
import Link from "next/link";
import { Links } from "@/constant";
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});
interface Props {
  open: boolean;
  onClose: () => void;
}
export const BurgerMenu: FC<Props> = ({ onClose, open }) => {
  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={onClose}
        TransitionComponent={Transition}
      >
        <Wrapper>
          <Container maxWidth="xl">
            <Content>
              <Flex AlItems="center" JsContent="space-between">
                <StyledCloseIcon onClick={onClose} />
                <Image
                  alt=""
                  width={163}
                  height={150}
                  src="/assets/image/yut.png"
                />
                <ShoppingBasketIcon />
              </Flex>
              <Location>
                <LocationName>МОСКВА</LocationName>
                <Phone>+7 (985) 177-47-10</Phone>
                <List>
                  <StyledLink href={Links.MENU}>МЕНЮ</StyledLink>
                  <StyledLink href={Links.DELIVERY}>
                    УСЛОВИЕ ДОСТАВКА
                  </StyledLink>
                  <StyledLink href={Links.EVENTS}>СОБЫТИЯ</StyledLink>
                  <StyledLink href={Links.REVIEWS}>ОТЗЫВЫ</StyledLink>
                  <StyledLink href={Links.COMPANY}>КОМПАНИЯ</StyledLink>
                </List>
              </Location>
            </Content>
          </Container>
        </Wrapper>
      </Dialog>
    </div>
  );
};
export const List = styled.ul`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const StyledLink = styled(Link)<{ theme: DefaultTheme }>`
  text-decoration: none;
  margin-top: 25px;
  color: ${({ theme }) => theme.colors.white};
`;
export const Wrapper = styled.section`
  height: 100%;
  background: #455473;
`;
export const Content = styled.div``;
export const StyledCloseIcon = styled(CloseIcon)``;
export const Location = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;
export const LocationName = styled.p``;
export const Phone = styled.p`
  margin-top: 15px;
`;
