import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div
        style={{ height: "75vh", width: 506, margin: 'auto' }}
        className="d-flex flex-column align-items-center justify-content-center gap-2"
      >
        <h1 style={{ fontSize: "5rem" }} className="text-center text-black">
          SEM:ANTICS
        </h1>
        <p style={{ width: 500 }}>Why should women email like men? The onus is on the individual, when the problem is societal. A tool to train email writing that creates positive impressions & maintains professional relationships.</p>
        <Link to='/playground' className="btn btn-primary align-self-start">Try It Out</Link>
      </div>
    </>
  );
}

export default Home;
