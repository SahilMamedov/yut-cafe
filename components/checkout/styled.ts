import styled from "styled-components";



export const StyledErrorMessage=styled.div`
color: red;
font-size: 12px;
`
export const CommentBox=styled.div`
width: 500px ;
overflow-wrap: break-word;
@media only screen and (max-width: 600px) {
    width: 100%;
    
}

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