export default function EconomyForm({ beerList, crispList, setForm }) {
  function handleSelectBeer(e) {
    setForm((prev) => ({ ...prev, beer: e.target.value }))
  }

  function handleSelectCrisp(e) {
    setForm((prev) => ({ ...prev, crisp: e.target.value }))
  }

  return (
    <form className="max-w-sm mx-auto flex flex-col w-64">
      <label
        htmlFor="select-beer"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Select Beer
      </label>
      <select
        id="select-beer"
        className="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={handleSelectBeer}
      >
        <option value="">--- Choose Beer ---</option>
        {beerList.map((beer, i) => (
          <option key={i} value={beer}>
            {beer}
          </option>
        ))}
      </select>

      <label
        htmlFor="select-crisp"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Select Crisp
      </label>
      <select
        id="select-crisp"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={handleSelectCrisp}
      >
        <option value="">--- Choose Crisp ---</option>
        {crispList.map((beer, i) => (
          <option key={i} value={beer}>
            {beer}
          </option>
        ))}
      </select>
    </form>
  )
}
