import {selectAll, unSelectAll} from "actions/issues";
import { FiCheck, FiStopCircle, FiTag } from "react-icons/fi"
import { GoMilestone } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import './ListIssues.css';

/* This example requires Tailwind CSS v2.0+ */
const issues = [
  {
    uid: '24353w4234',
    title: 'This is my title',
    comment: 'This is my comment'
  },
  // More people...
]



export const ListIssues = () => {

  const dispatch = useDispatch();
  const { allSelected } = useSelector(state => state.issues);
  let issueItems = [];

  const selectAllIssues = (e) => {

    const { checked } = e.target;

    if(checked)
      dispatch(selectAll());
    else
      dispatch(unSelectAll());
  }

  return (
    <div className="">
      <div className="container mt-3">
        <div className="min-w-full sm:px-6 lg:px-8 d-flex">

          <div className="w-3/5">

            <div className="input-group">
              <div className="input-group-prepend">
                <button className="btn btn-outline-secondary dropdown-toggle text-sm font-semibold" type="button" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">Dropdown
                </button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                  <div role="separator" className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Separated link</a>
                </div>
              </div>
              <input className="appearance-none border rounded w-full px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline form-control" id="username" type="text" aria-label="Text input with dropdown button" />
            </div>

          </div>

          <div className="w-2/5 d-flex justify-content-end">

            <div className="inline-flex w-100 d-flex justify-content-center">
              <button className="
                hover:bg-gray-200
                text-gray-800 font-bold border
                border-gray-400 px-4 rounded-l
                d-flex justify-content-between align-items-center
              ">
                <FiTag className="ms-1"/>
                <span className="ms-1 text-sm font-medium"> Labels </span>
                <span
                    className="ms-1 inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">9</span>
              </button>
              <button className="
                  hover:bg-gray-200 text-gray-800 font-bold border
                  border-gray-400 px-4 rounded-r
                  d-flex justify-content-between align-items-center
              ">
                <GoMilestone className="ms-1 bg-white"/>
                <span className="ms-1 text-sm font-medium"> Milestones </span>
                <span
                    className="ms-1 inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">9</span>
              </button>
            </div>

            <button className="bg-blue-500 hover:bg-blue-700 text-white text-base font-semibold px-4 rounded">
              Button
            </button>
          </div>
        </div>

        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow border-b border-gray-200 sm:rounded-lg">
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
                      onChange={selectAllIssues}
                    />
                    
                    <a href="#">
                      <FiStopCircle className="icon-issue ms-2"/>
                    </a>

                    <span className="ms-2"> { 2 } Open </span>

                    <a href="#" className="d-flex align-items-center">
                      <FiCheck className="ms-2"/>
                      <span className="ms-1"> {0} Closed </span>
                    </a>

                    <div className="container-option-buttons normal-case d-flex ms-auto">

                      <li class="nav-item d-flex align-items-center">
                        <div className="dropdown">
                          <a className="btn btn-outline-secondary btn-sm dropdown-toggle d-flex align-items-center ms-1" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            Author
                          </a>

                          <ul class="dropdown-menu dropdown-menu-end dropdown-menu-options" aria-labelledby="dropdownMenuLink">
                            <li><a class="dropdown-item" href="#">New repository</a></li>
                            <li><a class="dropdown-item" href="#"> Import respository </a></li>
                            <li><a class="dropdown-item" href="#"> New gist </a></li>
                            <li><a class="dropdown-item" href="#"> New organization </a></li>
                          </ul>
                        </div>
                      </li>

                      <li class="nav-item d-flex align-items-center">
                        <div className="dropdown">
                          <a className="btn btn-outline-secondary btn-sm dropdown-toggle d-flex align-items-center ms-1" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            Label
                          </a>

                          <ul class="dropdown-menu dropdown-menu-end dropdown-menu-options" aria-labelledby="dropdownMenuLink">
                            <li><a class="dropdown-item" href="#">New repository</a></li>
                            <li><a class="dropdown-item" href="#"> Import respository </a></li>
                            <li><a class="dropdown-item" href="#"> New gist </a></li>
                            <li><a class="dropdown-item" href="#"> New organization </a></li>
                          </ul>
                        </div>
                      </li>

                      <li class="nav-item d-flex align-items-center">
                        <div className="dropdown">
                          <a className="btn btn-outline-secondary btn-sm dropdown-toggle d-flex align-items-center ms-1" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            Projects
                          </a>

                          <ul class="dropdown-menu dropdown-menu-end dropdown-menu-options" aria-labelledby="dropdownMenuLink">
                            <li><a class="dropdown-item" href="#">New repository</a></li>
                            <li><a class="dropdown-item" href="#"> Import respository </a></li>
                            <li><a class="dropdown-item" href="#"> New gist </a></li>
                            <li><a class="dropdown-item" href="#"> New organization </a></li>
                          </ul>
                        </div>
                      </li>

                      <li class="nav-item d-flex align-items-center">
                        <div className="dropdown">
                          <a className="btn btn-outline-secondary btn-sm dropdown-toggle d-flex align-items-center ms-1" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            Milestones
                          </a>

                          <ul class="dropdown-menu dropdown-menu-end dropdown-menu-options" aria-labelledby="dropdownMenuLink">
                            <li><a class="dropdown-item" href="#">New repository</a></li>
                            <li><a class="dropdown-item" href="#"> Import respository </a></li>
                            <li><a class="dropdown-item" href="#"> New gist </a></li>
                            <li><a class="dropdown-item" href="#"> New organization </a></li>
                          </ul>
                        </div>
                      </li>

                      <li class="nav-item d-flex align-items-center">
                        <div className="dropdown">
                          <a className="btn btn-outline-secondary btn-sm dropdown-toggle d-flex align-items-center ms-1" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            Assignee
                          </a>

                          <ul class="dropdown-menu dropdown-menu-end dropdown-menu-options" aria-labelledby="dropdownMenuLink">
                            <li><a class="dropdown-item" href="#">New repository</a></li>
                            <li><a class="dropdown-item" href="#"> Import respository </a></li>
                            <li><a class="dropdown-item" href="#"> New gist </a></li>
                            <li><a class="dropdown-item" href="#"> New organization </a></li>
                          </ul>
                        </div>
                      </li>

                      <li class="nav-item d-flex align-items-center">
                        <div className="dropdown">
                          <a className="btn btn-outline-secondary btn-sm dropdown-toggle d-flex align-items-center ms-1" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            Sort
                          </a>

                          <ul class="dropdown-menu dropdown-menu-end dropdown-menu-options" aria-labelledby="dropdownMenuLink">
                            <li><a class="dropdown-item" href="#">New repository</a></li>
                            <li><a class="dropdown-item" href="#"> Import respository </a></li>
                            <li><a class="dropdown-item" href="#"> New gist </a></li>
                            <li><a class="dropdown-item" href="#"> New organization </a></li>
                          </ul>
                        </div>
                      </li>

                      

                    </div>
                      
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {
                  issueItems.map((issue) => (
                      <div> element </div>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

