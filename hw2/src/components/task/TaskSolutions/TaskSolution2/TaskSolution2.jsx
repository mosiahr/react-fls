import { useState } from 'react'
import EconomyForm from './EconomyForm'
import BusinessForm from './BusinessForm'
import { CLASS_TRAVEL, BEER_LIST, CRISP_LIST } from './constants'

function TaskSolution2() {
  const [classTravel, setClassTravel] = useState(CLASS_TRAVEL.BLANK)
  const [economyForm, setEconomyForm] = useState({ beer: '', crisp: '' })
  const [businessForm, setBusinessForm] = useState({
    newspaper: false,
    cognac: false,
    snack: false,
  })

  const handleClassTravel = (e) => {
    setClassTravel(CLASS_TRAVEL[e.target.value])
    setEconomyForm({ beer: '', crisp: '' })
    setBusinessForm({
      newspaper: false,
      cognac: false,
      snack: false,
    })
  }

  function ShowResult() {
    const EconomyResult = () => {
      return (
        <>
          <div className="w-full">
            {economyForm.beer && `Beer: ${economyForm.beer}`}
          </div>
          <div className="w-full">
            {economyForm.crisp && `Crisp: ${economyForm.crisp}`}
          </div>
        </>
      )
    }

    const ResultRow = ({ row }) => <div className="w-full">{row}</div>

    const BusinessResult = () => {
      const snackResStr = `Snack: ${businessForm.snack ? 'YES' : 'NO'}`
      return (
        <>
          <ResultRow
            row={`Newspaper: ${businessForm.newspaper ? 'YES' : 'NO'}`}
          />
          <ResultRow row={`Cognac: ${businessForm.cognac ? 'YES' : 'NO'}`} />
          <ResultRow row={businessForm.cognac && snackResStr} />
        </>
      )
    }
    if (classTravel !== CLASS_TRAVEL.BLANK)
      return (
        <div className="w-1/3 bg-gray-50 flex flex-col gap-1 rounded-lg p-3 m-auto  border-gray-200 rounded-t-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <h2 className="">Result:</h2>
          <div className="w-full">Travel Class: {classTravel}</div>
          {classTravel === CLASS_TRAVEL.ECONOMY && <EconomyResult />}
          {classTravel === CLASS_TRAVEL.BUSINESS && <BusinessResult />}
        </div>
      )
  }

  function getBackground(classTravel) {
    let background
    switch (classTravel) {
      case CLASS_TRAVEL.ECONOMY:
        background = 'url(/src/assets/cloud.jpg) 0 0 / cover no-repeat'
        break
      case CLASS_TRAVEL.BUSINESS:
        background = 'url(/src/assets/business-class.jpg) 0 0 / cover no-repeat'
        break
      default:
        background = 'var(--color-blue-300)'
    }
    return background
  }
  const background = getBackground(classTravel)

  return (
    <div
      style={{ background }}
      className="bg-blue-300 w-full min-h-130 flex gap-3 flex-col p-5"
    >
      <form className="max-w-sm mx-auto w-64">
        <label
          htmlFor="class-travel"
          className=" block mb-2 text-lg font-medium text-gray-900 dark:text-white"
        >
          Select a class travel
        </label>
        <select
          id="class-travel"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={handleClassTravel}
        >
          <option value={CLASS_TRAVEL.BLANK}>Choose a travel class</option>
          <option value={CLASS_TRAVEL.ECONOMY}>Economy Class</option>
          <option value={CLASS_TRAVEL.BUSINESS}>Business Class</option>
        </select>
      </form>

      {classTravel === CLASS_TRAVEL.ECONOMY && (
        <EconomyForm
          beerList={BEER_LIST}
          crispList={CRISP_LIST}
          setForm={setEconomyForm}
        />
      )}
      {classTravel === CLASS_TRAVEL.BUSINESS && (
        <BusinessForm businessForm={businessForm} setForm={setBusinessForm} />
      )}

      <ShowResult />
    </div>
  )
}

export default TaskSolution2
