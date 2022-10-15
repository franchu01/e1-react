import React from 'react';
import styled from 'styled-components';

export const IngresarTarea = styled.button`
    width: 64px;
    height: 32px;
    color: black;
    background-color: white;
    border: none;
    border-radius: 16px;
`



const InputTarea = () => {
    return (
        <IngresarTarea placeholder='Click'></IngresarTarea>
    );
}

export default InputTarea;
