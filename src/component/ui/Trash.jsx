// Trash.js
import React from "react";
import styled from "styled-components";

const Bubble = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    margin: 10px;
    font-size: 24px;
`;

const Trash = ({ color, emoji }) => {
    return <Bubble color={color}>{emoji}</Bubble>;
};

export default Trash;
