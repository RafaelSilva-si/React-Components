import React from 'react';
import JobsList from '../../components/jobsList/JobsList';
import * as Utils from '../../styles/utils';

class JobList extends React.Component {
    constructor(props) {
        super(props)
    };

    render() {
    const { cardProps } = this.props;
    const Tags = [
        {name: 'Doações em Dinheiro', type: 'outline'},
        {name: 'Dependentes Quimicos'},
        {name: 'HIV AIDS'}
    ]
    const Tags1 = [
        {name: 'Doações em Dinheiro', type: 'outline'}
    ]
        return (
            <>
                <Utils.boxItem>
                    <p>Jobs List</p>
                    <div className="row">
                        <div className="col">
                            <JobsList 
                                default
                                onHelpClick={() => alert('Funcionando')}
                                labelButton='Ajudar'
                                {...cardProps}
                            />
                        </div>
                    </div>
                    <div className="row pt-2">
                        <div className="col">
                            <JobsList 
                                medium
                                tags={Tags}
                                onHelpClick={() => alert('Funcionando')}
                                labelButton='Ajudar'
                                {...cardProps}
                            />
                        </div>
                    </div>
                    {/*
                    <div className="row pt-2">
                        <div className="col-md-3">
                            <JobsList 
                                small
                                tags={Tags1}
                                onHelpClick={() => alert('Funcionando')}
                                labelButton='Ajudar'
                                {...cardProps}
                            />
                        </div>
                        <div className="col-md-3">
                            <JobsList 
                                small
                                {...cardProps}
                            />
                        </div>
                        <div className="col-md-3">
                            <JobsList 
                                Xsmall
                                {...cardProps}
                            />
                        </div>
                        <div className="col-md-3">
                            <JobsList 
                                Xsmall
                                {...cardProps}
                            />
                        </div>
                    </div>
                    */}
                </Utils.boxItem>
            </>
        )
    }
}

JobList.defaultProps={
    cardProps:{
        title: 'Fazenda da Esperança',
        desc: 'Entidade - Guaratinguetá / SP'
    }
}
export default JobList;