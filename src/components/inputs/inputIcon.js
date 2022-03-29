import React from "react";
import * as Input from '../../styles/Inputs';

const Inputs = ({ icon, ...input }) => {
    return (
        <>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <Input.InputIcon {...input}>{icon}</Input.InputIcon>
                </div>
                <Input.Input {...input}/>
            </div>
        </>
    )
}


export default Inputs;