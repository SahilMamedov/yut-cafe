import Box from "@mui/material/Box";
import styled from "styled-components";

export const StyledBox = styled(Box)`
  width: 500px;

  @media only screen and (max-width: 768px) {
    width: 450px;
  }
  @media only screen and (max-width: 525px) {
    width: 380px;
  }
`;

export const Wrapper = styled.section`
  padding: 16px 16px;
  @media only screen and (max-width: 525px) {
    padding-right: 0px;
  }
`;
export const OrderHeader = styled.header`
  padding: 0 22px;
  height: 72px;
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const CloseBtn = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: rgba(32, 33, 37, 0.12);
  color: black;
  display: flex;
  align-items: center;
  border: none;

  position: fixed;
  font-size: ${({ theme }) => theme.fontSizes.large};
  justify-content: center;
  cursor: pointer;
  transition: background-color 400ms ease-out 0s;
  :hover {
    background-color: rgba(32, 33, 37, 0.25);
  }
`;

export const OrderTitle = styled.h1`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-family: system-ui, sans-serif;
  font-size: 2rem;
  line-height: 2.5rem;
  margin-bottom: 16px;
  text-align: center;
  @media only screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const EmtpyOrder = styled.div`
  display: flex;
  justify-content: center;

  align-items: center;
  margin-top: 60px;
  flex-direction: column;

  @media only screen and (max-width: 768px) {
    margin-top: 20px;
    img {
      width: 250px;
      height: 250px;
    }
  }
  @media only screen and (max-width: 1024px) {
    margin-top: 20px;
    img {
      width: 300px;
      height: 300px;
    }
  }
`;
export const CheckoutBtnBox = styled.div`
  position: absolute;
  bottom: 0;
  width: 500px;
  right: 0px;
  padding: 0px 16px;
  margin-bottom: 10px;
  justify-content: space-between;
  position: fixed;
  button {
    transition: background-color 400ms ease-out 0s;
    :hover {
      background-color: rgba(47, 122, 207, 0.8);
    }
    @media only screen and (max-width: 768px) {
      position: absolute;
      width: 430px;
      bottom: 0px;
      right: 10px;
    }
    @media only screen and (max-width: 525px) {
      width: 360px;
    }
  }
`;

export const OrderListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 0px;
  align-items: center;
  cursor: pointer;
  border-radius: 8px;
  padding-left: 12px;
  :hover {
    background-color: rgba(233, 233, 235, 1);
  }
`;
export const OrderItemImg = styled.div`
  margin-right: 18px;
  @media only screen and (max-width: 525px) {
    margin-right: 10px;
  }
`;
export const OrderItemName = styled.div`
  font-family: system-ui, "Open Sans", sans-serif;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  line-height: 1.5rem;
  color: rgb(32, 33, 37);
  font-weight: 500;
`;
export const OrderItemPrice = styled.span`
  font-family: system-ui, "Open Sans", sans-serif;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  line-height: 1.5rem;
  font-weight: 400;
  color: rgb(0, 157, 224);
`;
export const OrderItemCount = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 8px;
  border: 2px solid rgba(32, 33, 37, 0.12);
  color: rgba(0, 157, 224, 0.96);
  font-size: ${({ theme }) => theme.fontSizes.medium};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
  :hover {
    border: 1px solid rgba(0, 157, 224, 0.96);
  }
`;
export const OrderCountBox = styled.div`
  display: flex;
  border-radius: 6px;
  opacity: 1;
  transform: none;
  transform-origin: 50% 50% 0px;
`;
export const OrderItemDelet = styled.div`
  height: 30px;
  width: 30px;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

export const CheckOutBtnStyled = {
  height: "50px",
  jsContent: "space-between",
  padding: "0px 20px",
  fontSize: "16px",
};

export const AddItemBtnStyled = {
  height: "50px",
  backgroundColor: "rgba(0, 157, 224, 0.08)",
  color: "rgb(0, 157, 224)",
  fontSize: "18px",
};
export const StyledCount = styled.span`
  background-color: white;
  border-radius: 50%;
  font-size: 14px;
  padding: 1px 6px 2px 6px;
  color: #0f89d4;
  margin-right: 8px;
`;
