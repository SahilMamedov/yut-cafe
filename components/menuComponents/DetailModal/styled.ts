import styled from "styled-components";


export const DetailWrapper=styled.div`
display: flex;
flex-direction: column;
position: relative;
`
export const DetailCloseBtn=styled.button`
width: 40px;
height: 40px;
border-radius: 100%;
background-color: rgba(32, 33, 37, 0.12);
color: black;
display: flex;
align-items: center;
border: none;
font-size: ${({theme})=>theme.fontSizes.large};
justify-content: center;
cursor: pointer;
transition: background-color 200ms ease-out 0s;
position: absolute;
right: 20px;
background-color:  rgb(230, 221, 221);
top: 20px;
:hover{
    background-color: rgb(134, 129, 129)
}
`
export const DetailContent=styled.div`
padding: 16px 16px;
`
export const DetailName=styled.h1`
    font-family:system-ui, sans-serif;
    font-size: 1.8rem;
    margin-bottom: 8px;
    line-height: 2.5rem;
    font-weight: ${({theme})=>theme.fontWeights.bold};
    color: rgb(32, 33, 37);
`



export const DetailOldPrice=styled.span`
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
export const DetailPrice=styled.span`
color: rgb(0, 157, 224);;
font-size: ${({theme})=>theme.fontSizes.medium};
font-weight: ${({theme})=>theme.fontWeights.medium};
line-height: 22px;
`
export const LoadingBox=styled.div`
 width: 100%;
height: 100vh;
position: absolute;
top: 0;
left: 0;
display: flex;
justify-content: center;
align-items: center;
z-index: 99;
`




export const DetailDesc=styled.h4`
font-family:system-ui, sans-serif;
font-weight: ${({theme})=>theme.fontSizes.medium};
line-height: 1.2rem;
font-weight: ${({theme})=>theme.fontWeights.regular};
margin:8px 0px;
color: rgb(32, 33, 37);
`
export const DetalKkalAndGramm=styled.div`
font-family:system-ui, sans-serif;
line-height: 1rem;
font-weight: ${({theme})=>theme.fontSizes.medium};
font-weight: ${({theme})=>theme.fontWeights.medium};
margin: 12px 0px;

`
export const ImgBox=styled.div`
img{
    width: 100%;
    border-top-right-radius: 14px;
    border-top-left-radius: 14px;
}
`