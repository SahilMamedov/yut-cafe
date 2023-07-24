import styled, { css, DefaultTheme } from "styled-components";
import Link from "next/link"; //import this
import { Collapse, styled as MuiStyled } from "@mui/material";
import ReorderIcon from "@mui/icons-material/Reorder";

export const HeaderWrapper = styled.header<{
  theme: DefaultTheme;
}>`
  color: ${({ theme }) => theme.colors.black};
  /* padding-top: 10px; */
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background: #455473;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: background-color 0.5s ease-out, box-shadow 0.5s ease-out;
`;
export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 1100px) {
    display: none;
  }
`;
export const Location = styled.div`
  width: 160px;
  color: white;
`;
export const LocationName = styled.p``;
export const Phone = styled.p`
  width: 200px;
`;

export const Category = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export const List = styled.ul``;

export const HoveredMenuWrapper = styled.div`
  position: absolute;
  color: black;
  top: 110px;
  left: 40%;
  width: 740px;
  height: 100px;
  background-color: #fff;
  border-top: 10px solid red;
  display: none;
`;
export const LinkTitle = styled.span<{
  theme: DefaultTheme;
}>`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
  &:hover {
    color: ${({ theme }) => theme.colors.lightBlue};
    ${HoveredMenuWrapper} {
      opacity: 1 !important;
    }
    transition: 0.5s ease-in-out;
  }

  transition: 0.2s ease-in-out;
`;
export const StyledCollapse = MuiStyled(Collapse)`
  position: absolute; 
  
`;

export const MenuList = styled.ul``;
export const TitleMenu = styled.h2``;

export const StyledLink = styled(Link)<{ theme: DefaultTheme }>`
  line-height: 36px;
  padding: 0 10px;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  text-transform: uppercase;
  position: relative;
`;

export const BasketWrapper = styled.div<{ theme: DefaultTheme }>`
  background: ${({ theme }) => theme.colors.lightBlue};
  padding: 5px 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
  cursor: pointer;
`;

export const ImageWrapper = styled.div`
  color: white;
  border-radius: 50%;
  margin-left: 10px;
  margin-right: 10px;
  img {
    transition: 0.5s ease-out;
  }
`;
export const BurgerContent = styled.div`
  justify-content: space-between;
  align-items: center;
  display: none;
  @media only screen and (max-width: 1100px) {
    display: flex;
  }
`;
export const StyledReorderIcon = styled(ReorderIcon)`
  display: block;
  cursor: pointer;
  color: white;
`;
