import React from 'react'
import styled from 'styled-components'


const WrapperSmall = styled.div`
    display: flex;
    justify-content: center;
    height: 50%;
    width: 40%;
    background-color: grey;
    border: 1px solid yellow;
    color: salmon;
    gap: 20px;
    padding: 7px;

`


const SmallWrapper = props => {
    return <WrapperSmall> {props.children} </WrapperSmall> ;
} 

export default SmallWrapper;