import { Tooltip } from 'react-tooltip'

function SuggestedIssue({ id, input, prediction, confidence }) {
  return (
    <span>
        <u
        id={'issue-' + id} data-tooltip-content={`Overly ${prediction}`}
        style={{ textDecorationColor: prediction === "positive" ? "#4bbf73" : '#d9534f'}}
        >
        {input}
        </u>
        <Tooltip anchorId={'issue-' + id} place="top"/>
    </span>
  );
}

export default SuggestedIssue;
