import styled from "styled-components";

const StyledError = styled.div`
    width: 53rem;
    height: auto;
    margin: 0.5rem;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    color: #F33535;
    text-shadow: 0.5px 0.5px 0.005rem #000000;
`;

const ErrorCard = () => {
    return (
        <StyledError>
            Error: Could not find word - please verify your spelling.
        </StyledError>
    )
}

export default ErrorCard;