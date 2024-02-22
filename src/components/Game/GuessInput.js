import React, { useState } from "react"

const GuessInput = ({ handleGuess, answer }) => {
  const [guess, setGuess] = useState("")

  function handleSubmit(event) {
    event.preventDefault()

    handleGuess(guess)

    setGuess("")
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="guess-input-wrapper">
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          value={guess}
          onChange={(event) => {
            setGuess(event.target.value.toUpperCase())
          }}
          id="guess-input"
          type="text"
          required
          pattern="[a-zA-Z]{5}"
          title="5 letter word"
          maxLength={5}
        />
      </form>
    </>
  )
}

export default GuessInput
