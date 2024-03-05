import React from "react"
import Banner from "./Banner"

const LostBanner = ({ answer }) => {
  return (
    <Banner status="sad">
      <p>
        <strong>Sorry, you lost!</strong> The answer was{" "}
        <strong>{answer}</strong>
      </p>
    </Banner>
  )
}

export default LostBanner
