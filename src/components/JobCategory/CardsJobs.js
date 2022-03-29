import React from 'react';
import * as Utils from '../../styles/JobCategory';

import { BiRightArrowAlt } from 'react-icons/bi';

const CardJobs = ({ icon, title, desc, ...props }) => {
    return (
        <Utils.cardBox {...props}>
            {icon}
            <div>
                <h3>{title}</h3>
                <p>{desc}<span>{desc && (<BiRightArrowAlt />)}</span></p>
            </div>
        </Utils.cardBox>
    )
}

export default CardJobs;