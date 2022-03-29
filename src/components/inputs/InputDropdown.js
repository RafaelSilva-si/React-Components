import React from "react";
import * as Input from '../../styles/Inputs';
import ReactSelect from 'react-select';

const Inputs = ({ icon, ...input }) => {
    return (
        <>
            <Input.Select
                {...input}
                styles={{
                    control: (base, state) => ({
                        ...base,
                        '&:hover': { borderColor: 'none' },
                        border: state.isFocused
                            ? `none`
                            : 'none',
                        boxShadow: state.isFocused
                            ? `none`
                            : 0,
                    }),
                }}
            />
        </>
    )
}


export default Inputs;