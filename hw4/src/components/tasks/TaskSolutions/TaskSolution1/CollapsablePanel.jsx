import { useState } from 'react'

function CollapsablePanel({ title, children }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="m-auto p-3 ">
      <h1
        className="text-2xl cursor-pointer select-none"
        onClick={() => setIsOpen((v) => !v)}
      >
        {title}
      </h1>
      {isOpen && children}
    </div>
  )
}

export default CollapsablePanel
