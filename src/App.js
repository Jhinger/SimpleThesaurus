import { useState } from 'react'
import Header from './components/Header'
import Search from './components/Search'
import WordCard from './components/WordCard'
import ErrorCard from './components/ErrorCard'
import styled from 'styled-components'

const AppStyles = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const App = () => {
  const [word, setWord] = useState('')		// Store word that user searches.
  const [error, setError] = useState(false) 	// Check to see if we got an empty object. 
  const [input, setInput] = useState(false) 	//Check to see if user has searched for a word. (Conditional Rendering)

  return (
    	<AppStyles>
		<Header/>
		{error ? <ErrorCard /> : null}
		<Search setWord={setWord} setError={setError} setInput={setInput}/>
		{word && input ? <WordCard word={word}/> : console.log("Input: " + input + " Error: " + error)}		
	</AppStyles>
  );
}

export default App;
