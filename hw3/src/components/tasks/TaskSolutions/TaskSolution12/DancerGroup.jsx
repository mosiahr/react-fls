import clsx from 'clsx'

function DancerGroup({
  title,
  dancerList,
  dancerGender,
  pair,
  onClick,
  getNotDancerNumber,
}) {
  const isChosenById = (id) => pair?.values()?.some((el) => el.id === id)

  return (
    <section className="flex flex-col w-full border-1 border-gray-300 dark:border-gray-600 p-2 rounded-lg">
      <h3 className="text-2xl font-bold">{title}</h3>
      <ul className="flex flex-wrap gap-2 rounded-lg  ">
        {dancerList
          .filter(
            ({ gender, isDancing }) =>
              gender === dancerGender && isDancing === false
          )
          .map(({ id, fullName }) => (
            <li
              key={id}
              className={clsx(
                {
                  'bg-amber-400 dark:bg-indigo-600 border-amber-700 dark:border-gray-100':
                    isChosenById(id),
                },
                {
                  'border-1 border-gray-300 dark:border-gray-600':
                    !isChosenById(id),
                },
                {
                  'cursor-not-allowed': getNotDancerNumber(dancerList) < 2,
                  'cursor-pointer': getNotDancerNumber(dancerList) > 1,
                },
                ' border flex justify-between flex-wrap rounded-lg p-2'
              )}
              onClick={() => onClick(id)}
            >
              <div className="flex justify-center items-center">{fullName}</div>
            </li>
          ))}
      </ul>
    </section>
  )
}

export default DancerGroup
