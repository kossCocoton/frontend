import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
    width: 100%; /* Full width of the parent */
    max-width: 400px; /* Set a max width for larger screens */
    height: 6vh;
    border-radius: 20px;
    border: none;
    box-shadow: 3px 4px 10px 2px #E3E3E3;
    background-color: #F7F0EB;
    padding: 5px 10px;
    margin: 10px 0; /* Margin for spacing */
    &:focus {
        outline: none;
    }
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
        -webkit-text-fill-color: #000;
        transition: background-color 5000s ease-in-out 0s;
    }
`;

function Input(props) {
    const { type, name, defaultValue, value, onChange, readOnly, placeholder } = props;

    return (
        <StyledInput 
            type={type} 
            defaultValue={defaultValue} 
            name={name} 
            value={value} 
            onChange={onChange} 
            readOnly={readOnly} 
            placeholder={placeholder} // Forward placeholder prop
        />
    );
}

export default Input;
