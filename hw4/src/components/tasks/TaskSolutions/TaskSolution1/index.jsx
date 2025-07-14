import CollapsablePanel from './CollapsablePanel'

function TaskSolution1() {
  return (
    <>
      <CollapsablePanel title="Panel 1">
        <ul>
          <li>111</li>
          <li>222</li>
          <li>333</li>
        </ul>
      </CollapsablePanel>
      <CollapsablePanel title="Panel 2">
        <h3>
          <CollapsablePanel title="Panel 3 (Nested)">
            <h3>111</h3>
            <h3>111</h3>
            <h3>111</h3>
          </CollapsablePanel>
        </h3>
        <h3>111</h3>
        <h3>111</h3>
      </CollapsablePanel>
    </>
  )
}

export default TaskSolution1
