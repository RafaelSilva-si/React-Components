import React from 'react';
import * as Tag from '../../styles/Tags';

const Tags = ({name, ...props}) => {
    
    return (
        <>
            <Tag.Tag {...props}>{name}</Tag.Tag>
        </>
    )
};

export default Tags;