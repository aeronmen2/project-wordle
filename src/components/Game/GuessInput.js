import React, { useState } from "react"

const GuessInput = () => {
  const [guess, setGuess] = useState("")

  function handleGuess(event) {
    event.preventDefault()
    console.log(guess)
    setGuess("")
  }

  return (
    <>
      <form onSubmit={handleGuess} className="guess-input-wrapper">
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
