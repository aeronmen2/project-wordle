import React from "react"
import { range } from "../../utils"
import Guess from "./Guess"
import { NUM_OF_GUESSES_ALLOWED } from "../../constants"

const GuessResult = ({ guesses, answer }) => {
  return (
    <>
      <div className="guess-results">
        {range(NUM_OF_GUESSES_ALLOWED).map((index) => (
          <Guess answer={answer} key={index} value={guesses[index]} />
        ))}
      </div>
    </>
  )
}

export default GuessResult
