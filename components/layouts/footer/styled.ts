import styled, { DefaultTheme } from "styled-components";

export const Container = styled.section`
  background-color: #253444;
  /* @media only screen and (max-width: 425px) {
    display: flex;
    flex-direction: column;

} */
`;

export const SocialBox = styled.div`
  padding-left: 20px;
  width: 220px;
  @media only screen and (max-width: 525px) {
    width: 100%;
  }
`;
export const FooterTitle = styled.h3`
  color: white;
  letter-spacing: 2px;
  margin: 16px 0px;
`;
export const SosialItem = styled.h4<{ theme: DefaultTheme }>`
  color: white;
  letter-spacing: 1.5px;
  margin: 8px 0px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;
  display: flex;
  align-items: center;
  transition: color 400ms ease-out 0s;
  @media only screen and (max-width: 425px) {
    font-size: 14px;
  }
  :hover {
    color: ${({ theme }) => theme.colors.lightBlue};
  }
`;
export const CafeAboutText = styled.p`
  color: white;
  font-family: Roboto Slab, sans-serif;
  font-size: 14px;
  line-height: 24px;
`;
export const Copyright = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 10px;
  background-color: #0f89d4;
  margin-top: 5px;
  color: white;
  font-size: 14px;
  @media only screen and (max-width: 525px) {
    font-size: 10px;
  }
`;
export const mayStyle = {
  width: "100%",
  height: "400px",
  border: 0,
};
export const MapBox = styled.div`
  width: 100%;
`;
