import { types } from "types/types";

export const createIssue = (title, comment) => ({
  type: types.createIssue,
  payload: {
    title,
    comment
  }
})
