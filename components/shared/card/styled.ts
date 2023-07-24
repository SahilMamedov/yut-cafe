import styled , { css } from "styled-components";

export const Wrapper = styled.div`
  padding: 12px;
  width: 217px;
  height: 358px;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.1);
  }
  border-radius: 24px;
  background: #ffffff;
`;
export const Content = styled.div`
  img {
    border-radius: 18px;
  }
`;
export const Paragrpah = styled.p``;
export const Title = styled.p`
  overflow: hidden;
  font-size: 16px;
  margin-top: 4px;
  line-height: 19px;
  text-overflow: ellipsis;
`;

export const Gramm = styled.span`
  display: block;
  color: #9e9b98;
  margin: 15px 0;
  font-size: 16px;
  line-height: 19px;
`;
const ButtonStyle = css`
  background: none;
  border: none;
  cursor: pointer;
  color: white;
  font-size: 13px;
`;

export const Link = styled.div`
  cursor: pointer;
`;

export const Increment = styled.button`
  ${ButtonStyle}
`;
export const Decrement = styled.button`
  ${ButtonStyle}
`;
export const Count = styled.button`
  ${ButtonStyle}
  font-weight: 700;
`;

export const OldPrice=styled.span`
color: red;
text-decoration-line: line-through;
font-size: ${({theme})=>theme.fontSizes.medium};
font-weight: ${({theme})=>theme.fontWeights.medium};
line-height: 22px;
margin-right: 18px;
@media only screen and (max-width: 525px) {
margin-right: 10px;
  }

`
export const Price=styled.span`
color: rgb(0, 157, 224);;
font-size: ${({theme})=>theme.fontSizes.medium};
font-weight: ${({theme})=>theme.fontWeights.medium};
line-height: 22px;
`