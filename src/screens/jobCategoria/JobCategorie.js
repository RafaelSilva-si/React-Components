import React from 'react';
import * as Utils from '../../styles/utils';

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
                   
                </Utils.boxItem>
            </>
        )
    }
};



export default JobCategorie;