import React, { useState } from "react"

import { sample } from "../../utils"
import { WORDS } from "../../data"
import GuessInput from "./GuessInput"
import GuessResult from "./GuessResult"
import WonBanner from "./WonBanner"
import LostBanner from "./LostBanner"
import { NUM_OF_GUESSES_ALLOWED } from "../../constants"

const answer = sample(WORDS)

const Game = () => {
  const [guesses, setGuesses] = useState([])
  const [gameStatus, setGameStatus] = useState("playing")

  const handleGuess = (guess) => {
    const nextGuesses = [...guesses, guess]

    setGuesses(nextGuesses)

    if (guess.toUpperCase() === answer) {
      setGameStatus("won")
    } else if (nextGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost")
    }
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
