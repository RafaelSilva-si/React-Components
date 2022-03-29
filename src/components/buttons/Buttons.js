import React from "react";
import * as Buttons from '../../styles/Buttons';

const PatternButtons = ({ label, onClick, icon, ...buttonsProps }) => {
    return (
        <Buttons.Button {...buttonsProps} onClick={onClick}>
            {icon}
            {label}
        </Buttons.Button>
    )
};

export default PatternButtons;