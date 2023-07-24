import styled, { DefaultTheme } from "styled-components";

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const Title = styled.h1<{ theme: DefaultTheme }>`
  max-width: 800px;
  z-index: 2;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: 140px;
  padding: 10vh 0;
  color: ${({ theme }) => theme.colors.white};

  @media only screen and (max-width: 768px) {
    font-size: 80px;
  }
  @media only screen and (max-width: 425px) {
    font-size: 60px;
  }
  @media only screen and (max-width: 320px) {
    font-size: 50px;
  }
`;
export const Categories = styled.div`
  position: relative;
  cursor: pointer;
  width: 100%;
  height: 270px;

  img {
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
  }
`;
export const FoodTitle = styled.h3<{ theme: DefaultTheme }>`
  position: absolute;
  bottom: 0px;
  background-color: rgba(0, 0, 0, 0.5);
  color: ${({ theme }) => theme.colors.white};
  padding: 10px;
  width: 100%;
`;
