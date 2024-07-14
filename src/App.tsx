import { useState } from "react"
import words from "./wordList.json"

function App() {
	const [wordToGuess, setWordToGuess] = useState(() => {
		// in order to generate random word
		return words[Math.floor(Math.random() * words.length)]
	})
	// tracking guessed letters
	const [guessedLetters, setGuessedLetters] =useState<string[]>([])

	console.log(wordToGuess);
	return <h1>hi</h1>

}

export default App
