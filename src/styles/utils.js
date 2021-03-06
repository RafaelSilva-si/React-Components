import styled from "styled-components";


export const boxItem = styled.div`
    border: 1px dashed #7B61FF;
    box-sizing: border-box;
    border-radius: 5px;
    padding: 10px;
    margin: 30px 15px;
    p{
        position: relative;
        top: -30px;
        font-size: 14px;
    }
`

export const cardBox = styled.div`
    background: ${props => props.GreenTheme && '#3AD29F' || '#FFFFFF'};
    border: 1px solid #D6DDEB;
    box-sizing: border-box;
    padding: 21px;
    max-height: ${props => props.noDesc && '140px' || props.small && '80px' || '180px'};
    min-width: ${props => props.small && '300px'};
    color: ${props => props.GreenTheme && '#FFFFFF' || '#3AD29F'};
    display: ${props => props.small && 'flex'};
    
    p{
        margin-top:${props => props.small && '30px' || '40px'};
        color: ${props => props.GreenTheme && 'white' || '#7C8493'};
        font-size: 13px;
        display: flex;
        justify-content: space-between;
    }

    h3{
        margin-top: ${props => props.small && '0px' || '30px'};
        font-size:20px;
        color: ${props => props.GreenTheme && 'white' || '#25324B'};
    }

    div{
        margin-left: ${props => props.small && '20px'};
    }
`