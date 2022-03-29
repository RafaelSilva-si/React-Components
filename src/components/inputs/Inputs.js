import React from "react";
import * as Input from '../../styles/Inputs';

const Inputs = ({ ...input }) => {
    return (
        <Input.Input
            {...input}
        />
    )
}


export default Inputs;