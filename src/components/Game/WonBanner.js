import React from "react"
import Banner from "./Banner"

const WonBanner = ({ nbOfGuesses }) => {
  return (
    <Banner status="happy">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {nbOfGuesses === 1 ? "1 guess" : `${nbOfGuesses} guesses`}
        </strong>
      </p>
    </Banner>
  )
}

export default WonBanner
