import styled from "styled-components";

const TitleStyles = styled.div`
    width: 100%;
    height: 100%;
    font-weight: 700;
    font-size: 5vw;
    color: white;
    text-shadow: 2px 2px 5px grey;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Title = ({ title }) => {
    return (
        <TitleStyles>
            { title }
        </TitleStyles>
    )
}

export default Title;