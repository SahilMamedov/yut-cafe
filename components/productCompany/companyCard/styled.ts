import styled from "styled-components";

export const CardBox=styled.div`
width: 320px;
background-color: white;
border-radius: 8px;
transition: transform 0.2s;
margin-bottom: 20px;
  &:hover {
    transform: scale(1.1);
  }
box-shadow: 0 0 13px 0 rgba(0, 0, 0, 0.15);
@media only screen and (max-width: 1150px) {
width: 300px;
}
position: relative;
`
export const CardImg=styled.div`
img{
border-top-right-radius: 8px;
cursor: pointer;
border-top-left-radius: 8px;
@media only screen and (max-width: 1150px) {
width: 300px;
  }
}
`
export const WrapperStyle ={
    display: "flex",
    justifyContent: "center",
    margin:'16px 0px'
  
  }

export const CardContent=styled.div`
padding: 20px 20px 10px 20px;

`
export const ProductName=styled.h3`
font-weight: ${({theme})=>theme.fontWeights.bold};
line-height: 1;
letter-spacing: normal;
text-align: center;
color: ${({theme})=>theme.colors.black};
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
margin-bottom: 12px;
`
export const ProductDesc=styled.p`
text-overflow: ellipsis;
font-weight: ${({theme})=>theme.fontWeights.medium};
color: ${({theme})=>theme.colors.black};
line-height: 1.45;
letter-spacing: normal;
text-align: center;
height: 80px;
`
export const GrammKkal=styled.div`
text-overflow: ellipsis;
font-weight: ${({theme})=>theme.fontWeights.medium};
color: ${({theme})=>theme.colors.black};
font-size: ${({theme})=>theme.fontSizes.medium};
`
export const ProductOldPrice=styled.span`
color: red;
text-decoration-line: line-through;
font-size: ${({theme})=>theme.fontSizes.medium};
font-weight: ${({theme})=>theme.fontWeights.bold};
line-height: 22px;
margin-right: 18px;
`
export const ProductPrice=styled.span`
color: rgb(0, 157, 224);;
font-size: ${({theme})=>theme.fontSizes.medium};
font-weight: ${({theme})=>theme.fontWeights.bold};
line-height: 22px;
`
export const AddProductBox=styled.div`
margin-top: 16px;
display: flex;
flex-direction: column;
justify-content: flex-end;

`
export const StyledBox=styled.div``