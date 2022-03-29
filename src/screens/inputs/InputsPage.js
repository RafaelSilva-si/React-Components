import React from 'react';
import Inputs from '../../components/inputs/Inputs';
import InputIcon from '../../components/inputs/inputIcon';
import InputDropdown from '../../components/inputs/InputDropdown';
import ButtonsFilter from '../../components/inputs/FilterSorts';
import SortBy from '../../components/inputs/SortBy';

import { MdSearch, MdOutlineFilterList } from 'react-icons/md';
import * as Utils from '../../styles/utils';

class InputPage extends React.Component {
    constructor(props) {
        super(props)
    };
    render() {
        const { input } = this.props;
        return (
            <>
                <Utils.boxItem>
                    <p>Inputs</p>
                    <div className="row">
                        <div className="col-md-3">
                            <Inputs
                                {...input}
                            />
                        </div>
                        <div className="col-md-3">
                            <InputIcon
                                {...input}
                                inputIcon
                                icon={<MdSearch />}
                            />
                        </div>
                        <div className="col-md-3">
                            <InputDropdown
                                options={[{ id: 1, label: 'One' }, { id: 2, label: 'Two' }]}
                                {...input}
                            />
                        </div>
                        <div className="col-md-3">
                            <ButtonsFilter
                                label='Caption'
                                onClick={() => alert('oi')}
                                icon={<MdSearch />}
                            />
                        </div>
                    </div>
                    <div className="row pt-2">
                        <div className="col-md-3">
                            <Inputs
                                success
                                {...input}
                            />
                        </div>
                        <div className="col-md-3">
                            <InputIcon
                                success
                                inputIcon
                                icon={<MdSearch />}
                                {...input}
                            />
                        </div>
                        <div className="col-md-3"></div>
                        <div className="col-md-3">
                            <ButtonsFilter
                                label='Caption'
                                onClick={() => alert('oi')}
                                icon={<MdOutlineFilterList />}
                            />
                        </div>
                    </div>
                    <div className="row pt-2">
                        <div className="col-md-3">
                            <Inputs
                                danger
                                {...input}
                            />
                        </div>
                        <div className="col-md-3">
                            <InputIcon
                                danger
                                inputIcon
                                icon={<MdSearch />}
                                {...input}
                            />
                        </div>
                        <div className="col-md-3"></div>
                        <div className="col-md-3">
                            <SortBy />
                        </div>
                    </div>

                </Utils.boxItem>
            </>
        )
    }
};

InputPage.defaultProps = {
    input: {
        placeholder: "Insira um texto aqui",
        id: 'teste',
        name: 'teste'
    },
}

export default InputPage;