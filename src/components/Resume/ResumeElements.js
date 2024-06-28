import styled from "styled-components"

export const Button=styled.button`
background-color:#1d1f22;
color:white;
font-size:15px;
width:100px;
height:50px;
border-radius: 50px !important;
    min-width: 120px;
cursor: pointer;
transition: background-color 0.3s ease;
&:hover {
        background-color: #fff;
        color:black;
        border:none;
    }
}
`