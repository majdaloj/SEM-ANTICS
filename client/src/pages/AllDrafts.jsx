import { useEffect, useState } from "react";
import axios from "axios";
import Draft from "../components/Draft";
const apiUrl = import.meta.env.VITE_API_URL;

function AllDrafts() {
  const [drafts, setDrafts] = useState();

  useEffect(() => {
    axios.get(apiUrl + "/draft").then((res) => {
      setDrafts(res.data);
    });
  }, []);

  return (
    <>
      <h1 className="text-center mb-4">Past Drafts</h1>
      {drafts &&
        drafts.map((draft, i) => {
          const score = draft.score;
          const classifications = draft.classification?.body.classifications;
          if (classifications) {
            return (
              <div key={i} className="mb-3 w-75 mx-auto form-control">
                <div className="col text-center text-primary mb-2 fw-bold">
                  Score: {Math.round(score * 100)}%
                </div>
                <Draft classifications={classifications} />
              </div>
            );
          } else {
            return null;
          }
        })}
    </>
  );
}

export default AllDrafts;
