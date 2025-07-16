import DataCard from './DataCard'

function TaskSolution2() {
  return (
    <div>
      <DataCard
        logo={'https://fruit-time.ua/images/products/5a/yabluko-fudzi.jpeg '}
        badgeText="акція"
        title="Samsumg"
        // footer={<div>Price: 2000грн.</div>}
      >
        <img src="https://fruit-time.ua/images/products/5a/yabluko-fudzi.jpeg" />
      </DataCard>

      <DataCard
        logo={'https://fruit-time.ua/images/products/5a/yabluko-fudzi.jpeg '}
        badgeText="акція"
        title="Samsumg"
        footer={<div>Price: 2000грн.</div>}
      >
        <div>Text</div>
      </DataCard>
    </div>
  )
}

export default TaskSolution2
