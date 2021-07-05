import Subsection from './Subsection'
import styled from "styled-components";

const WordCardStyled = styled.div`
    width: 70rem;
    height: auto;
    background-color: white;
    margin: 3rem;
    border-radius: 8px;
    box-shadow: 2px 2px 0.75rem #888888;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    padding: 2.5rem 0 2.5rem 0;
    margin-bottom: 2rem;

    li {
        font-style: italic;
        width: 80%;
        font-size: 2rem;
        font-weight: 700;
        text-transform: capitalize;
        list-style: square;
        margin: 1rem;
    }
`;

const WordCard = ({ word }) => {
    return (
        <WordCardStyled>
            {word[0]?.hwi !== undefined 
                ? <li> { word[0].hwi.hw } </li> 
                : null
            }
            {word.map((def, i) => <Subsection key={i} homonym={def}/>)}
        </WordCardStyled>
    )
}

export default WordCard;