import { types } from "types/types";

export const issuesReducer = (state = {}, action) => {

  switch (action.type) {
    case types.createIssue:
      return {
        title: action.payload.title,
        comment: action.payload.comment
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
