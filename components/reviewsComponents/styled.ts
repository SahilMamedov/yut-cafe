import styled from "styled-components";

export const Wrapper=styled.section`
margin-bottom: 60px;
`

export const Container=styled.div`
margin-bottom: 40px;
`

export const BgImageBox=styled.div`
 margin: 0px;
img{
    width: 100%;
   height : 400px;
   @media only screen and (max-width: 768px) {
   object-fit: cover;
  

  }
  @media only screen and (max-width: 524px) {
   height: 300px;
  }
  
}
`
export const ReviewsTitle=styled.h1`
font-weight: 700;
text-align: center;
color: #111111;
font-size: 48px;
line-height: 1.4;
padding-bottom: 22px;
font-family: Oswald,sans-serif;
@media only screen and (max-width: 524px) {
   font-size: 34px;
   letter-spacing: 2px;
  }
`
export const ClientSay=styled.div`

font-size: 18px;
letter-spacing: 4px;
color: #e7272d;
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 35px;
@media only screen and (max-width: 524px) {
font-size: 12px;
letter-spacing: 1px;
}
`
export const ReviewsLine=styled.span`
border-top: 1px solid #707070;
border-bottom: none;
border-left: none;
border-right: none;
display: inline-flex;
float: none;
height: 2px;
margin-right: 17px;
margin-left: 17px;
width: 70px;
@media only screen and (max-width: 524px) {
width: 40px;
}

`
export const StyledBox=styled.div`
text-align: center;
`
export const ImgBox=styled.div`
display: flex;
margin-bottom: 15px;
justify-content: center;
`
export const ClientComment=styled.p`
font-size: 15px;
letter-spacing: 1px;
color: #000000;
width: 40%;
margin: 0 auto 20px;
@media only screen and (max-width: 768px) {
width: 90%;
}
`
export const ClientName=styled.h3`
font-size: 20px;
font-family: Oswald,sans-serif;
font-weight: 700;
color: #e7272d;;
`