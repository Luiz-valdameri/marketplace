import styled from "styled-components";

export const Flex = styled.div`
    display: flex;
    flex-direction: ${props => `${props.flexDirection}`};
    justify-content: ${props => `${props.justifyContent}`};
    justify-items: ${props => `${props.justifyItems}`};
    align-content: ${props => `${props.alignContent}`};
    align-items: ${props => `${props.alignItems}`};

    & > * {
        align-self: start;  
    }
`;