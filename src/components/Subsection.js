import styled from "styled-components"

const SubsectionStyled = styled.div`
    height: auto;
    min-height: 2rem;
    width: 80%;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 1.5rem;

    strong {
        width: 100%;
    }

    p {
        width: 100%;
        text-transform: capitalize;
        font-style: italic;
    }

    div {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin: 0.75rem 1.75rem 0.75rem 1.75rem;
    }

    .btn1 {
        background-color: #CAFCFE;
        box-shadow: 0.5px 0.5px 0.35rem #888888;
        font-size: 0.9rem;
        border-radius: 6px;
        outline: none;
        margin: 0.6rem 0.3rem 0.6rem 0.3rem;
        border: none;
        text-align: center;
        text-decoration: none;
        width: auto;
        height: 2rem;
    }

    .btn2 {
        background-color: #FECACA;
        box-shadow: 0.5px 0.5px 0.35rem #888888;
        font-size: 0.9rem;
        border-radius: 6px;
        outline: none;
        margin: 0.6rem 0.3rem 0.6rem 0.3rem;
        border: none;
        text-align: center;
        text-decoration: none;
        width: auto;
        height: 2rem;
    }
`;

// This file takes in a forEach/map object from the API object and displays the noun/verb/adject.
const Subsection = ({ homonym }) => {
    let antonyms = []
    let synonyms = []
    let def = ''

    // If error, return array of one with Error message inside.
    const getAntonyms = (obj) => {
        const res = obj?.meta?.ants[0]
        res === undefined ? (antonyms = ['Error: No antonyms found. (API Limitation)']) : (antonyms = res)
    }

    const getSynonyms = (obj) => {
        const res = obj?.meta?.syns[0]
        res === undefined ? (synonyms = ['Error: No synonyms found. (API Limitation)']) : (synonyms = res)
    }

    const getDef = (obj) => {
        const res = obj?.shortdef[0]
        res === undefined ? def='Error: No definiton found. (API Limitation)' : (def = res)
    }

    getAntonyms(homonym);
    getSynonyms(homonym);
    getDef(homonym);

    const renderAntonyms = antonyms.map((wrd, i) => 
        <button key={i} className="btn1">
            { wrd }
        </button>
    )

    const renderSynonyms = synonyms.map((wrd, i) => 
        <button key={i} className="btn2">
            { wrd }
        </button>
    )

    return (
        <SubsectionStyled>
            <p><strong>{ homonym.fl }</strong> - {def}.</p>
            <div> 
                <strong>Antonyms</strong> 
                {renderAntonyms}
            </div>
            <div>
                <strong>Synonyms</strong>
                {renderSynonyms}
            </div>
        </SubsectionStyled>
    )
}

export default Subsection;