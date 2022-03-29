import styled from "styled-components";

export const Button = styled.button.attrs({
    className: 'btn'
})`
    border-radius: 0px;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    color:  ${props => props.outline && '#3AD29F' || props.button && 'white' || props.link && '#3AD29F'};
    background-color: ${props => props.outline && 'white' || props.link && 'white' || props.button && '#3AD29F'};
    border: ${props => props.link? 'none' : '1px solid #9CE8CF'};
    box-sizing: border-box;
    margin: 10px;
    padding: ${props => props.LG && '14px 27px' || props.MD && '12px 24px' || props.SM && '10px 21px'};

    
    &:hover{
        color: ${props => props.outline && 'white' || props.button && '#3AD29F'|| props.link && '#3AD29F' };
        background-color: ${props => props.outline && '#3AD29F' || props.button && 'white'|| props.link && 'white' };
        text-decoration: ${props => props.link ? 'underline' : 'none'}
    }
`

export const ButtonsFilter = styled.button.attrs({
    className: 'btn'
})`
    border-radius: 0px;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    color:  #25324B;
    background-color: '#FFFFFF';
    border: ${props => props.link? 'none' : '1px solid #D6DDEB'};
    box-sizing: border-box;
    margin: 10px;
    padding: ${props => props.LG && '14px 27px' || props.MD && '12px 24px' || props.SM && '10px 21px'};

`

export const labelSortBy = styled.span`
    font-size: 12px;
    line-height: 34px;
    color: #7C8493;
`

