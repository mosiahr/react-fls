export default function BusinessForm({ businessForm, setForm }) {
  function handleCheckbox(e) {
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.checked }))
    if (e.target.id === 'cognac' && !e.target.checked) {
      setForm((prev) => ({ ...prev, snack: false }))
    }
  }

  function SnackCheckbox() {
    return (
      <li className="w-full border-gray-200 rounded-t-lg dark:border-gray-600">
        <div className="flex items-center ps-3">
          <input
            id="snack"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            onChange={handleCheckbox}
            checked={businessForm.snack}
          />
          <label
            htmlFor="snack"
            className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Snack
          </label>
        </div>
      </li>
    )
  }

  return (
    <div className="m-auto">
      <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
        Choose Additional Options
      </h3>
      <ul className="w-64 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="newspaper"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              onChange={handleCheckbox}
              checked={businessForm.newspaper}
            />
            <label
              htmlFor="newspaper"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Newspaper
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="cognac"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              onChange={handleCheckbox}
              checked={businessForm.cognac}
            />
            <label
              htmlFor="cognac"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Cognac
            </label>
          </div>
        </li>
        {businessForm.cognac && <SnackCheckbox />}
      </ul>
    </div>
  )
}
