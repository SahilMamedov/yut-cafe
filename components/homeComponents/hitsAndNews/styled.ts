import theme from "@/theme";
import styled, { DefaultTheme } from "styled-components";
export const Wrapper = styled.div`
  /* display: block; */
  font-family: Avenir, sans-serif;
  background: #101010;
  line-height: 1.4;
  overflow: hidden;
  padding: 0px 60px;
  padding-bottom: 100px;
  @media only screen and (max-width: 768px) {
  padding-left: 0px;
  padding-right: 0px;
  }
 
`;

export const StyledBox=styled.div`


@media only screen and (max-width: 1024px) {
  padding-left: 80px;
  }
  @media only screen and (max-width: 850px) {
  padding-left: 50px;
  }
  @media only screen and (max-width: 780px) {
  padding-left: 50px;
  }
  @media only screen and (max-width: 375px) {
  padding-left: 20px;
  }
 
`

export const ProductName = styled.h4<{ theme: DefaultTheme }>`
  color: ${({ theme }) => theme.colors.white};
  margin: 10px 0;
  
`;

export const StyledButton = styled.button<{ theme: DefaultTheme }>`
  font-size: ${({ theme }) => theme.fontSizes.small};
  line-height: 28px;
  border-radius: 28px;
  border: 1px solid ${({ theme }) => theme.colors.white};
  padding: 0 30px;
  margin: 0;
  color: ${({ theme }) => theme.colors.white};
  transition: all 0.7s ease 0s;
  text-align: center;
  touch-action: manipulation;
  cursor: pointer;
  background-color: transparent;
  &:hover {
    color: ${({ theme }) => theme.colors.green};
    border-color: ${({ theme }) => theme.colors.green};
  }
`;
export const SubTitle = styled.p`
  color: red;
  text-align: center;
  margin-bottom: 50px;
`;

export const Title = styled.h2<{ theme: DefaultTheme }>`
  margin: 60px 0 30px;
  text-transform: uppercase;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  margin: 60px 0;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: 36px;
  line-height: 1;
`;

export const SliderBox=styled.div`
width: 280px;
display: flex;
flex-direction: column;
align-items: center;
`
export const OldPrice=styled.span`
color: red;
text-decoration-line: line-through;
font-size: ${({theme})=>theme.fontSizes.medium};
font-weight: ${({theme})=>theme.fontWeights.medium};
line-height: 22px;

margin-right: 18px;

`
export const Price=styled.span`
color: rgb(0, 157, 224);;
font-size: ${({theme})=>theme.fontSizes.medium};
font-weight: ${({theme})=>theme.fontWeights.medium};
line-height: 22px;
`
export const PriceBox=styled.div`
margin-bottom: 12px;
`