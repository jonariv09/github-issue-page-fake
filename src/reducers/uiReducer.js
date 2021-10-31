import { bindActionCreators } from "redux";
import { types } from "types/types";

const initialState = {
  newIssue: null
}

export const uiReducer = (state = initialState, action) => {

  switch (action.type) {
    case types.newIssue:
      return {
        ...state,
        newIssue: true
      }
    default:
      return state;
  }

}
