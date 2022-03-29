import React from  'react';
import * as Button from '../../styles/Buttons';

const ButtonFilter = ({icon, label, ...restprops}) => {
    return (
        <>
            <Button.ButtonsFilter {...restprops}>
                {icon}
                {label}
            </Button.ButtonsFilter>
        </>
    )
}

export default ButtonFilter;