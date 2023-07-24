import TextField from "@mui/material/TextField";
import styled from "styled-components";


export const Wrapper=styled.div`


@media only screen and (max-width: 525px) {
display: flex;
flex-direction: column;
justify-content: center;

}
`
export const ErrorMessage=styled.div`
color: red;
font-size: 12px;
margin-left: 8px;
`

export const StyledTextFild=styled(TextField)`
margin: 4px 8px !important;
@media only screen and (max-width: 525px) {
width: 400px !important
}
@media only screen and (max-width: 425px) {
width: 330px !important
}
@media only screen and (max-width: 375px) {
width: 300px !important
}
`

export const EditButton=styled.button`
border-radius: 6px;
border: none;
font-size: 16px;
cursor: pointer;
background-color: white;

`
export const DeletButton=styled.div`
padding: 0 8px;
border-radius: 6px;
border: none;
cursor: pointer;
font-size: 16px;

`
export const CreateButton=styled.button`
background-color: #0f89d4;
color: #fff;
border-radius: 5px;
padding: 10px 0px;
width: 200px;
border: none;
font-size: 18px;
font-weight: 500;
font-weight: 500;
line-height: 1.6;
letter-spacing: 0.0195em;
margin-bottom: 8px;
cursor: pointer;
transition: background-color 400ms ease-out 0s;
:hover{
    background-color: rgba(3, 45, 134, 0.884);;
}
`


export const Flex=styled.div`
display: flex;
align-items: center;
width: 100%;
`