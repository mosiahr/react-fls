import ReverseComponentMap from './ReverseComponentMap'
import ReverseComponentReverse from './ReverseComponentReverse'
import ReverseComponentOnly from './ReverseComponentOnly'

function TaskSolution4() {
  return (
    <div className="m-auto p-3">
      <ReverseComponentMap>
        <p>First Component</p>
        <div>Second Component</div>
        <p>Third Component</p>
        <p>Fourth Component</p>
      </ReverseComponentMap>
      <ReverseComponentReverse>
        <p>First Component Reverse</p>
        <div>Second Component Reverse</div>
        <p>Third Component Reverse</p>
        <p>Fourth Component Reverse</p>
      </ReverseComponentReverse>
      <ReverseComponentOnly>
        <p>First Component Reverse</p>
        {/* <div>Second Component Reverse</div>
        <p>Third Component Reverse</p> */}
      </ReverseComponentOnly>
    </div>
  )
}

export default TaskSolution4
