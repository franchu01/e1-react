import React from 'react';
import styled from 'styled-components';

const WrapperGeneral = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #131415;
    color: white;
`

const GeneralWrapper = props => {
    return <WrapperGeneral> { props.children } </WrapperGeneral>
}

export default GeneralWrapper;
