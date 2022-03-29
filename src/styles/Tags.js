import styled from 'styled-components';

export const Tag = styled.div`
    padding: 5px;
    color: ${props => props.outline && '#56CDAD' || '#3AD29F'};
    background-color: ${props => props.outline && 'rgba(86, 205, 173, 0.1)' || 'white'};
    border-radius: 80px;
    margin: 0px 10px 0px 0px;
    font-size: 10px;
    margin-top: 10px;
    border: ${props => props.outline && 'none' || "1px solid #3AD29F"};
`