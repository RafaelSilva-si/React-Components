import React from 'react';
import * as JobList from '../../styles/JobsList';
import { RiShareLine } from 'react-icons/ri';
import Buttons from '../buttons/Buttons';
import Logo from '../../assets/logo/unnamed.png';
import Tags from '../tags/Tags';

const JobsList = ({ title, desc, onHelpClick, tags, labelButton, ...props }) => {
    return (
        <>
            <JobList.cardJobList {...props}>
                <JobList.jobsListData {...props}>
                    <img src={Logo} />
                    <div>
                        <h3>{title}</h3>
                        <div>
                            <p>
                                {desc}
                                <JobList.tagsField>
                                    {tags && tags.map(index => (
                                        <Tags
                                            name={index.name}
                                            outline
                                            {...index.type}
                                        />
                                    ))}
                                </JobList.tagsField>
                            </p>

                        </div>


                    </div>
                </JobList.jobsListData>
                <JobList.jobsListData>
                    {onHelpClick && (
                        <>
                            {{ ...props }.default && (
                                <>
                                    <RiShareLine /> |
                                </>
                            )}
                            <Buttons
                                SM
                                button
                                onClick={onHelpClick}
                                label={labelButton}
                            />
                        </>
                    )}

                </JobList.jobsListData>
            </JobList.cardJobList>
        </>
    )
}

export default JobsList;