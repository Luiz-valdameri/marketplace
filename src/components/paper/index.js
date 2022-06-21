import styled from "styled-components";

export const Paper = styled.div`
    background-color: ${props => `${props.color ? props.color : 'white'}`};
    padding: 20px;
    border-radius: 15px;
`;