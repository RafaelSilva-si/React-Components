import styled from "styled-components";
import ReactSelect from 'react-select';

export const Input = styled.input.attrs({
    className: 'form-control'
})`
    background: #FFFFFF;
    border-left: ${props => props.inputIcon && 'none'} !important;
    border: 1px solid ${props => props.success && '#3AD29F' || props.danger && '#FF6550' || '#D6DDEB'};
    box-sizing: border-box;
    border-radius: 0px;
    width: 314px;
    height: 50px;
`

export const InputIcon = styled.span.attrs({
    className: 'input-group-text',
    addonType: "prepend"
})`
    background-color: white;
    border: 1px solid ${props => props.success && '#3AD29F' || props.danger && '#FF6550' || '#D6DDEB'};
`

export const Select = styled(ReactSelect)`
    background: #FFFFFF;
    border: 1px solid ${props => props.success && '#3AD29F' || props.danger && '#FF6550' || '#D6DDEB'};
    border-radius: 0px;
    width: 314px;
    height: 50px;
    font-size: 18px;
    
`