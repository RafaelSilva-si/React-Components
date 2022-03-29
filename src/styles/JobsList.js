import styled from 'styled-components';

export const cardJobList = styled.div`
    display: flex;
    flex-direction: ${props => props.small && 'column' || props.Xsmall && 'column'};
    justify-content: space-between;
    border: 1px solid #D6DDEB;
    box-sizing: border-box;
    color: #7C8493;
    padding:${props => props.small && '10px'};
    max-height: ${props => props.medium && '140px' || props.default && '130px'};
    width: ${props => props.medium && '600px' || props.small && '250px' || props.Xsmall && '200px' || '750px'};
    span{
        margin-right: 20px;
    }
`

export const jobsListData = styled.div`
    display: flex;
    flex-direction: ${props => props.small && 'column' || props.Xsmall && 'column'};
    align-items: ${props => props.small && 'start' || props.Xsmall && 'start' || 'center'};
    

    h3{
        color:#25324B;
        font-weight: 900;
        margin-top: 40px;
        font-size: ${props => props.small && '14px'};
    }

    p{
        color: #515B6F;
        margin-top: ${props => props.small && '35px'|| '30px'};
        font-size: ${props => props.small && '10px'};
    }
    img{
        width: 20%;
    }
`

export const JobListActions = styled.div`
    display: flex;
    color: #7C8493;
`

export const tagsField = styled.div`
    display: flex;
    `