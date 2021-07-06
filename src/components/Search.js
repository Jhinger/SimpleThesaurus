
import { useState } from "react";
import styled from "styled-components";

const SearchStyles = styled.div`
    width: 50rem;
    height: 3rem;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: flext-start;
    border-radius: 8px;
    box-shadow: 2px 2px 0.75rem #888888;
    outline: none;
    font-size: 1.25rem;
    padding: 0 2rem 0 2rem;
    font-family: 'Roboto';
    overflow: hidden;

    form {
        height: 100%;
        width: 100%;
    }

    input {
        width: 100%;
        height: 90%;
        outline: none;
        font-family: 'Roboto';
        font-size: 1.15rem;
        border: none;

        &:placeholder-shown {
            font-style: italic;
        }

        &:focus {
            outline: none !important;
        }
    }
`;

// API does not return JSON errors, only empty arrays.
const Search = ({ setWord, setInput, setError }) => {
    const [change, setChange] = useState('')
    
    const getWordData = () => {
        setError(false)
        fetch(`https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${change}?key=`)
            .then((response) => {
                response.json().then((data) => {
                    console.log(data)
                    if (data.length === 0 || typeof data[0] === "string" || response.status !== 200) {
                        setError(true)
                        return false;
                    }
                    setWord(data)
                    setInput(true)
                })
                console.log(response.status)
            })
            .catch((error) => {
                console.log(error)
            })
        return;
    }
    
    const handleChange = e => {
        setChange(e.target.value)
        console.log(change)
    }

    const handleSubmit = e => {
        e.preventDefault();
        getWordData()
    }

    return (
        <SearchStyles>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" placeholder="Search for a Word..."/>
            </form>
        </SearchStyles>
    )
}

export default Search;