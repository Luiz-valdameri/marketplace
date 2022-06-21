import styled from "styled-components";

export const Button = styled.button`
    padding: 13px 23px;
    border-radius: 13px;
    border: none;
    font-weight: bold;
    font-size: .8em;
    
    background-color: ${props => `${props.theme.colors[props.color]}`};
    color: ${props => `${props.theme.colors.textSecondary}`};
    width: ${props => `${props.fullWidth? "100%" : null}`};

    &:disabled {
        background-color: ${props => `${props.theme.colors.btnDisabled}`};
    }

    &:hover {
        cursor: pointer
    }
`;