import React from 'react'
import SuggestedIssue from "../components/SuggestedIssue";

function Draft({ classifications }) {
  return (
    classifications.map((c) => {
        if (c.prediction === "neutral") {
          return <span key={c.id}>{c.input + " "}</span>;
        } else {
          return (
            <span key={c.id}>
              <SuggestedIssue {...c} />
              <span> </span>
            </span>
          );
        }
      })
  )
}

export default Draft