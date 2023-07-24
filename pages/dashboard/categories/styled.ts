import ListItemButton from "@mui/material/ListItemButton";
import Link from "next/link";
import styled from "styled-components";

export const Wrapper=styled.div`
display: flex;
align-items: center;
flex-direction: column;
`
export const LoadingBox=styled.div`
 width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
display: flex;
justify-content: center;
align-items: center;
z-index: 99;
`
export const ErrorMessage=styled.div`
font-size: 12px;
color: red;
margin-left: 12px;
`

export const StyledLink=styled(Link)`
color: gray;
`
export const LogoutBox=styled.div`
padding: 8px 16px;
display: flex;
cursor: pointer;
color: gray;
:hover{
    background-color: rgba(0, 0, 0, 0.04);
}
`