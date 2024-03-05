import React, { useState } from "react"

import { sample } from "../../utils"
import { WORDS } from "../../data"
import GuessInput from "./GuessInput"
import GuessResult from "./GuessResult"
import WonBanner from "./WonBanner"
import LostBanner from "./LostBanner"

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

const Game = () => {
  const [guesses, setGuesses] = useState([])
  const [gameStatus, setGameStatus] = useState("playing")

  const handleGuess = (guess) => {
    const nextGuesses = [...guesses, guess]

    setGuesses(nextGuesses)

    setGameStatus(
      nextGuesses.length === 6 ? "lost" : guess === answer ? "won" : "playing"
    )
  }

  return (
    <>
      <GuessResult guesses={guesses} answer={answer} />
      <GuessInput handleGuess={handleGuess} gameStatus={gameStatus} />
      {gameStatus === "won" && <WonBanner nbOfGuesses={guesses.length} />}
      {gameStatus === "lost" && <LostBanner answer={answer} />}
    </>
  )
}

export default Game
