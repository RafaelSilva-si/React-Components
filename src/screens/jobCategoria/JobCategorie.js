import React from 'react';
import * as Utils from '../../styles/utils';
import CardJobs from '../../components/JobCategory/CardsJobs';
import {FaPencilRuler} from 'react-icons/fa';
import {GrAnnounce} from 'react-icons/gr';

class JobCategorie extends React.Component {
    constructor(props) {
        super(props)
    };
    render() {
        const { input } = this.props;
        return (
            <>
                <Utils.boxItem>
                    <p>Jobie Category</p>
                    <div className="row ">
                        <div className="col-md-2">
                            <CardJobs 
                                title="Design"
                                desc="235 jobs available"
                                icon={<FaPencilRuler/>}
                            />
                        </div>
                        <div className="col-md-2">
                            <CardJobs 
                                GreenTheme
                                title="Marketing"
                                desc="140 jobs available"
                                icon={<FaPencilRuler/>}
                            />
                        </div>
                        <div className="col-md-2">
                            <CardJobs 
                                noDesc
                                title="Marketing"
                                icon={<FaPencilRuler/>}
                            />
                        </div>
                        <div className="col-md-2">
                            <CardJobs 
                                noDesc
                                GreenTheme
                                title="Marketing"
                                icon={<FaPencilRuler/>}
                            />
                        </div>
                        <div className="col-md-2">
                            <CardJobs 
                                small
                                title="Marketing"
                                desc="140 jobs available"
                                icon={<FaPencilRuler/>}
                            />
                        </div>
                    </div>
                </Utils.boxItem>
            </>
        )
    }
};




export default JobCategorie;