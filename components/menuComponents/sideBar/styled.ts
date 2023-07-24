import styled, { css } from "styled-components";
import Link from "next/link";

export const SideBarContent = styled.div`
background-color: #fff;
border-radius: 10px;
  @media only screen and (max-width: 1100px) {
    display: none;
  }
`;
export const List = styled.ul`
  font-weight: 500;
  letter-spacing: 0.6px;
  z-index: 2;
  width: 15%;
  min-width: 280px;
  color: #333;
  border: 1px solid #e3e5eb;
`;


export const StyledLink=styled(Link)`
 display: block;
 color: #7d84ab;
 font-size: 16px;
 cursor: pointer;
 border-bottom: 1px solid #e3e5eb;
 margin: 10px;
 padding: 15px;
 text-decoration: none;
 transition: background-color 500ms ease-out 0s;
 font-weight: 400;
 :hover{
 background-color: rgba(47, 122, 207, 0.8);
 color: white;
 font-weight: 700;
 border-radius: 8px;
 }
`

