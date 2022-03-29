import React from "react";
import Buttons from '../../components/buttons/Buttons';
import * as Utils from '../../styles/utils';
import { FiPlus, FiArrowRight } from 'react-icons/fi';

class ButtonsPage extends React.Component {
    constructor(props) {
        super(props)
    };

    onClick = () => alert('oi');
    
    render() {

        const { buttonsProps } = this.props;

        return (
            <>
                <Utils.boxItem>
                    <p>Buttons</p>
                    <div className="row">
                        {/*Pattern Button */}
                        <div className="col-md-4">
                            <Buttons
                                SM
                                button
                                onClick={() => this.onClick()}
                                {...buttonsProps}
                            />
                            <Buttons
                                MD
                                button
                                onClick={() => this.onClick()}
                                {...buttonsProps}
                            />

                            <Buttons
                                LG
                                button
                                onClick={() => this.onClick()}
                                {...buttonsProps}
                            />
                        </div>
                        {/*Icon Label Button */}
                        <div className="col-md-5">
                            <Buttons
                                SM
                                button
                                onClick={() => this.onClick()}
                                icon={<FiPlus />}
                                {...buttonsProps}
                            />
                            <Buttons
                                MD
                                button
                                onClick={() => this.onClick()}
                                icon={<FiPlus />}
                                {...buttonsProps}
                            />
                            <Buttons
                                LG
                                button
                                onClick={() => this.onClick()}
                                icon={<FiPlus />}
                                {...buttonsProps}
                            />
                        </div>
                        {/*Icon Button */}
                        <div className="col-md-3">
                            <Buttons
                                SM
                                button
                                onClick={() => this.onClick()}
                                icon ={<FiArrowRight />}
                            />
                            <Buttons
                                MD
                                button
                                onClick={() => this.onClick()}
                                icon ={<FiArrowRight />}
                            />
                            <Buttons
                                LG
                                button
                                onClick={() => this.onClick()}
                                icon ={<FiArrowRight />}
                            />
                        </div>
                    </div>
                    <div className="row">
                        {/*Outline Button */}
                        <div className="col-md-4" >
                            <Buttons
                                SM
                                outline
                                onClick={() => this.onClick()}
                                {...buttonsProps}
                            />
                            <Buttons
                                MD
                                outline
                                onClick={() => this.onClick()}
                                {...buttonsProps}
                            />
                            <Buttons
                                LG
                                outline
                                onClick={() => this.onClick()}
                                {...buttonsProps}
                            />
                        </div>
                        {/*Outline Icon Label Button */}
                        <div className="col-md-5">
                            <Buttons
                                SM
                                outline
                                onClick={() => this.onClick()}
                                icon={<FiPlus />}
                                {...buttonsProps}
                            />
                            <Buttons
                                MD
                                outline
                                onClick={() => this.onClick()}
                                icon={<FiPlus />}
                                {...buttonsProps}
                            />
                            <Buttons
                                LG
                                outline
                                onClick={() => this.onClick()}
                                icon={<FiPlus />}
                                {...buttonsProps}
                            />
                        </div>
                        <div className="col-md-3">
                            {/*Outline Icon  Button */}
                            <Buttons
                                SM
                                outline
                                onClick={() => this.onClick()}
                                icon ={<FiArrowRight />}
                            />
                            <Buttons
                                MD
                                outline
                                onClick={() => this.onClick()}
                                icon ={<FiArrowRight />}
                            />
                            <Buttons
                                LG
                                outline
                                onClick={() => this.onClick()}
                                icon ={<FiArrowRight />}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            {/*Label  link */}
                            <Buttons
                                SM
                                link
                                onClick={() => this.onClick()}
                                {...buttonsProps}
                            />
                            <Buttons
                                MD
                                link
                                onClick={() => this.onClick()}
                                {...buttonsProps}
                            />
                            <Buttons
                                LG
                                link
                                onClick={() => this.onClick()}
                                {...buttonsProps}
                            />
                        </div>
                        {/*Icon Label  link */}
                        <div className="col-md-5">
                            <Buttons SM link onClick={() => this.onClick()}
                                icon={<FiPlus />}
                                {...buttonsProps}
                            />
                            <Buttons MD link onClick={() => this.onClick()}
                                icon={<FiPlus />}
                                {...buttonsProps}
                            />
                            <Buttons LG link onClick={() => this.onClick()}
                                icon={<FiPlus />}
                                {...buttonsProps}
                            />
                        </div>
                        <div className="col-md-3">
                            {/*Icon  link */}
                            <Buttons SM link onClick={() => this.onClick()}
                                icon ={<FiArrowRight />}
                            />
                            <Buttons MD link onClick={() => this.onClick()}
                                icon ={<FiArrowRight />}
                            />
                            <Buttons LG link onClick={() => this.onClick()}
                                icon ={<FiArrowRight />}
                            />
                        </div>
                    </div>
                </Utils.boxItem>

            </>

        )
    }
};

ButtonsPage.defaultProps = {
    buttonsProps: {
        label: 'Caption'
    }
}

export default ButtonsPage;