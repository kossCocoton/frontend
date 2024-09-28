import React from "react";
import styled from "styled-components";
import { motion } from 'framer-motion';

const StyleButton = styled(motion.button)`
    font-size: 1em;
    font-weight: 800;
    border-radius: 50px;
    border: 0px;
    cursor: pointer;
    background-color: #E3D4CA;
    padding: 15px;
    margin: 15px 0px;
    box-shadow: 3px 5px 10px 2px rgb(150,150,150,0.2);
`
function Button(props){
    const { title, onClick, disabled } = props;

    return(
        <StyleButton onClick={onClick} animate={["initial"]}
        whileHover={["grow"]} disabled={disabled}>
            { title || "+" }
        </StyleButton>
    );
}

export default Button;