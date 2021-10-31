import { types } from "types/types";

const initialState = {
  issues: [],
  lastIssue: null
}

export const issuesReducer = (state = initialState, action) => {

  switch (action.type) {
    case types.createIssue:

      state.issues.push({
        title: action.payload.title,
        comment: action.payload.comment
      });

      return {
        ...state,
        issues: state.issues,
        lastIssue: {
          title: action.payload.title,
          comment: action.payload.comment
        }
      }

    case types.loadIssues:
      return {
        ...state,
        issues: [...action.payload]
      }
    case types.deleteIssue:
      return {
        ...state,
        issues: state.issues.filter(issue => issue.id !== action.payload.id)
      }
    default:
      return state;
  }

}
