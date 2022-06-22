import styled from "styled-components";

export const TextField = styled.input`
    padding: 13px 23px;
    border-radius: 5px;
    border: 1px solid black;
    font-size: .8em;
    background-color: transparent;
    margin-top: auto;
    margin-bottom: auto;
    
    width: ${props => `${props.fullWidth ? "100%" : null}`};

    &:hover {
        cursor: text
    }
`;
