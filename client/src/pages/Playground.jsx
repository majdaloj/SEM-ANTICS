import React, { useEffect } from "react";
import SuggestedIssue from "../components/SuggestedIssue";

function Playground() {
  const { classifications, score } = {
    score: 0.86,
    classifications: [
      {
        id: 1,
        input: "Congratulations!",
        prediction: "positive",
        confidence: 0.99,
      },
      {
        id: 2,
        input: "You have been selected as a match for Robinhood.",
        prediction: "neutral",
        confidence: 0.86,
      },
      {
        id: 3,
        input: "Interested in applying?",
        prediction: "negative",
        confidence: 0.65,
      }
    ],
  };

  const onSubmit = () => {
    
  }

  return (
    <div className="mb-5">
      <div className="row text-center mb-3">
        <h1>Playground</h1>
      </div>
      <div className="mb-4 row">
        {/* <div className="row p-0">
            <div className="col text-center text-muted">PREVIOUS DRAFT</div>
            <div className="col text-center text-muted p-0">NEW DRAFT</div>
        </div> */}
        <div style={{ height: "65vh" }} className="row gap-3">
            <div className="col form-control">
            <div className="col text-center text-muted mb-2">Previous Draft</div>
                {classifications.map((c) => {
                    if (c.prediction === 'neutral') {
                        return <span key={c.id}>{c.input + ' '}</span>
                    } else {
                        return <span key={c.id}><SuggestedIssue {...c}/><span>{' '}</span></span>
                    }
                })}
            </div> 
            <textarea
            className="col form-control"
            placeholder="Write a new draft..."
            ></textarea>
        </div>
        <div className="mt-3 row gap-3">
            <div className="col text-center">Score: {Math.round(score * 100)}%</div>
            <div className="col text-center">
                <button className="btn btn-primary">Submit</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Playground;