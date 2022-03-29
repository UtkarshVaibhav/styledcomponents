import React from 'react'
import styled from 'styled-components'
const ButtonWrapper=styled.button`
    background-color: ${props=>props.btnType==="primary"?"blue":"white"};
    margin: 10px;
    border: ${props=>props.btnType==="dashed"?"dashed":props.btnType==="text"?"none":props.btnType==="link"?"none":"1px solid black"};
    color:${props=>props.btnType==="primary"?"white":props.btnType==="link"?"blue":"black"} 
`;
export const Button = () => {
  return (
      <>
        <ButtonWrapper btnType={"primary"}>Primary Button</ButtonWrapper>
        <ButtonWrapper btnType={"default"}>Default Button</ButtonWrapper>
        <ButtonWrapper btnType={"dashed"}>Dasshed Button</ButtonWrapper>
        <ButtonWrapper btnType={"text"}>Text Button</ButtonWrapper>
        <ButtonWrapper btnType={"link"}>Link Button</ButtonWrapper>
      </>
  )
}
