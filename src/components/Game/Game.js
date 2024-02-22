import React, { useState } from "react"

import { sample } from "../../utils"
import { WORDS } from "../../data"
import GuessInput from "./GuessInput"
import GuessResult from "./GuessResult"

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

const Game = () => {
  const [guesses, setGuesses] = useState([])

  const handleGuess = (guess) => {
    setGuesses([...guesses, guess])
  }

  return (
    <>
      <GuessResult guesses={guesses} answer={answer} />
      <GuessInput handleGuess={handleGuess} />
    </>
  )
}

export default Game
