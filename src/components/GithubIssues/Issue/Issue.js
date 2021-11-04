import React, { useEffect } from 'react'
import { FiStopCircle } from 'react-icons/fi'

export const Issue = (id, title, comment) => {

  useEffect(() => {
    console.log(title, comment);
  }, [])

  return (
    <>
      <tr key={id}>

        <td className="px-6 py-4 whitespace-nowrap d-flex align-items-start">
          <input
              id=""
              name=""
              type="checkbox"
              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded me-2"
            />

            <FiStopCircle className="icon-issue-item ms-2 text-green-500"/>

            <div className="d-flex flex-column ms-3">
              <span className="title text-base font-bold"> { title } </span>
              <span className="text-description text-xs"> { comment } </span>
            </div>

        </td>
      </tr>
    </>
  )
}
