import React, { useState, useCallback } from "react"

import { sample } from "../../utils"
import { WORDS } from "../../data"
import GuessInput from "./GuessInput"
import GuessResult from "./GuessResult"
import WonBanner from "./WonBanner"
import LostBanner from "./LostBanner"
import { NUM_OF_GUESSES_ALLOWED } from "../../constants"

const Game = () => {
  const [guesses, setGuesses] = useState([])
  const [gameStatus, setGameStatus] = useState("playing")
  const [answer, setAnswer] = useState(sample(WORDS))

  console.log("answer", answer)

  const handleGuess = useCallback(
    (guess) => {
      const nextGuesses = [...guesses, guess]

      setGuesses(nextGuesses)

      if (guess.toUpperCase() === answer) {
        setGameStatus("won")
      } else if (nextGuesses.length === NUM_OF_GUESSES_ALLOWED) {
        setGameStatus("lost")
      }
    },
    [guesses, answer]
  )

  const restartGame = () => {
    setGuesses([])
    setGameStatus("playing")
    setAnswer(sample(WORDS))
  }

  return (
    <>
      {gameStatus !== "playing" && (
        <button className="" onClick={restartGame}>
          Restart the game
        </button>
      )}
      <GuessResult guesses={guesses} answer={answer} />
      <GuessInput handleGuess={handleGuess} gameStatus={gameStatus} />
      {gameStatus === "won" && <WonBanner nbOfGuesses={guesses.length} />}
      {gameStatus === "lost" && <LostBanner answer={answer} />}
    </>
  )
}

export default Game
