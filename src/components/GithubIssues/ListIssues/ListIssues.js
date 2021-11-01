import { FiStopCircle, FiCheck } from "react-icons/fi"
import './ListIssues.css';

/* This example requires Tailwind CSS v2.0+ */
const people = [
  {
    name: 'Jane Cooper',
    title: 'Regional Paradigm Technician',
    department: 'Optimization',
    role: 'Admin',
    email: 'jane.cooper@example.com',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  // More people...
]

export const ListIssues = () => {
  return (
    <div className="">
      <div className="container">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200 table-issues">
              <thead className="bg-gray-50">
                <tr className="table-row-issues">
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500
                      uppercase col-check
                      d-flex align-items-center"
                  >
                    <input
                      id=""
                      name=""
                      type="checkbox"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded me-2"
                    />
                    
                    <a href="#">
                      <FiStopCircle className="icon-issue ms-2"/>
                    </a>

                    <span className="ms-2"> { 2 } Open </span>

                    <a href="#" className="d-flex align-items-center">
                      <FiCheck className="ms-2"/>
                      <span className="ms-1"> {0} Closed </span>
                    </a>

                    <ul className="ms-auto">
                      <span>  </span>
                    </ul>

                  </th>
                  
                  {/* <th
                    scope="col"
                    className="font-medium text-gray-500
                      uppercase"
                  >
                  </th>

                  <th
                    scope="col"
                    className="font-medium text-gray-500
                      uppercase tracking-wider"
                  >
                    
                  </th> */}
                  {/* <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Role
                  </th> */}
                  {/* <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th> */}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {people.map((person) => (
                  <tr key={person.email}>

                    <td className="px-6 py-4 whitespace-nowrap d-flex align-items-start">
                      <input
                          id=""
                          name=""
                          type="checkbox"
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded me-2"
                        />

                        <FiStopCircle className="icon-issue-item ms-2 text-green-500"/>

                        <div className="d-flex flex-column ms-3">
                          <span className="title text-base font-bold"> This is my title </span>
                          <span className="text-description text-xs"> This is my description </span>
                        </div>

                    </td>
                    {/* <td className="px-6 py-4 whitespace-nowrap">
                      
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Active
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.role}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a href="#" className="text-indigo-600 hover:text-indigo-900">
                        Edit
                      </a>
                    </td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

