import { useEffect, useState } from "react";
import axios from "axios";
import { RiErrorWarningLine } from "react-icons/ri";
import Spinner from "../components/Spinner/Spinner";
import Draft from "../components/Draft";

const apiUrl = import.meta.env.VITE_API_URL;

function Playground() {
  const [draftBody, setDraftBody] = useState("");
  const [loading, setLoading] = useState(false)
  const [classifications, setClassifications] = useState();
  const [score, setScore] = useState();

  const onSubmit = () => {
    setLoading(true)
    axios
      .post(`${apiUrl}classify/draft`, {
        content: [draftBody],
      })
      .then((res) => {
          setClassifications(res.data.classification.body.classifications);
          setScore(res.data.score)
          setDraftBody("")
          setLoading(false)
      })
  };

  return (
    <div className="mb-5">
      <div className="row text-center mb-3">
        <h1>Playground</h1>
      </div>
      <div className="mb-4 row">
        <div style={{ height: "65vh" }} className="row gap-3">
          <div className="col form-control">
            <div className="col text-center text-muted mb-2">
              Previous Draft
            </div>
            {classifications && !loading &&
              <Draft classifications={classifications}/>
            }
            { loading && <div className="h-100 d-flex justify-content-center align-items-center"><Spinner /></div>}
            {!classifications && !loading && (
              <div className="d-flex justify-content-center mt-3 align-items-center fw-bold">
                <RiErrorWarningLine size={20} className="me-2" />
                You have no previous drafts yet!
              </div>
            )}
          </div>
          <textarea
            value={draftBody}
            onChange={(e) => setDraftBody(e.target.value)}
            className="col form-control"
            placeholder="Write a new draft..."
          ></textarea>
        </div>
        <div className="mt-3 row gap-3">
          {score && (
            <div className="col text-center">
              Score: {Math.round(score * 100)}%
            </div>
          )}
          {!score && <div className="col text-center">Score: N/A</div>}
          <div className="col text-center">
            <button className="btn btn-primary" onClick={onSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Playground;
