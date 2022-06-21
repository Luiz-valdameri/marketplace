import styled from "styled-components";

export const IconButton = styled.button`
    padding: 15px;
    border-radius: 50%;
    border: none;
    font-weight: bold;
    font-size: ${props => `${props.theme.fontSizes.small}`};
    
    height: ${props => `${props.height? props.height : '41px'}`};
    width: ${props => `${props.width? props.width : '41px'}`};
    background-color: ${props => `${props.theme.colors[props.color]}`};
    color: ${props => `${props.theme.colors.textSecondary}`};

    &:disabled {
        background-color: ${props => `${props.theme.colors.btnDisabled}`};
    }

    &:hover {
        cursor: pointer
    }
`;