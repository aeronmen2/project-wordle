import React from "react"
import { range } from "../../utils"
import { checkGuess } from "../../game-helpers"

const Guess = ({ value, answer }) => {
  const NUMBER_OF_LETTERS = 5

  const suceed = checkGuess(value, answer)

  return (
    <p className="guess">
      {range(NUMBER_OF_LETTERS).map((index) => (
        <span
          key={index}
          className={`cell ${suceed?.[index]?.status ?? undefined}`}
        >
          {suceed?.[index]?.letter}
        </span>
      ))}
    </p>
  )
}

export default Guess
