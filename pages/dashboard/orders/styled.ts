import styled from "styled-components";


export const StyledOrderStatus=styled.div.attrs(
    (props: { background: string }) => props
  )`

background-color: ${(props) => props.background};
padding: 8px 0px;
width:85px;
display: flex;
color: white;
font-size: 14px;
justify-content: center;
border-radius:4px
`