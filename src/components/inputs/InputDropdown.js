import React from "react";
import * as Input from '../../styles/Inputs';
import ReactSelect from 'react-select';

const Inputs = ({ icon, options, ...input }) => {
    return (
        <>
            <Input.Select
                options={options}
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