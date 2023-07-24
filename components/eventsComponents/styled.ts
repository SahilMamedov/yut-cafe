import styled from "styled-components";

export const Wrapper=styled.section`
display: flex;
justify-content: center;
padding: 20px 20px;
background-color: beige;
@media only screen and (max-width: 1024px) {
   padding-left: 70px;
  }
`

export const EventsContainer=styled.div`
width: 1000px;
@media only screen and (max-width: 1024px) {
    width: 100%;
  }

`
export const EventBox=styled.div`
margin-bottom: 40px;
position: relative;
`
export const EventsImgBox=styled.div`
height: 540px;
@media only screen and (max-width: 524px) {
       height: 300px;
  }
img{
    width: 100%;
    height: 100%;
   
}
`
export const EventTitle=styled.h1`
font-weight: 700;
font-family: DauphinPlain;
color: #663325;
margin: 10px 0px;
;

`
export const EventDesc=styled.p`
font-size: 18px;
line-height: 22px;
font-family:system-ui, sans-serif;
color:#646464;
`
export const EventDate=styled.h1`
color: #fff;
font-size: 22px;
font-weight: 700;
margin-bottom: 5px;
font-family: "Oswald",sans-serif;
text-transform: uppercase;

`
export const EventDateBox=styled.div`
background: #e7272d;
position: absolute;
left: -65px;
padding: 8px;
line-height: 24px;
text-align: center;
`