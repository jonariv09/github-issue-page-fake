import { types } from "types/types";

export const createIssue = (title, comment) => ({
  type: types.createIssue,
  payload: {
    title,
    comment
  }
})

export const loadIssues = (notes) => ({
  type: types.loadIssues,
  payload: notes
})

export const selectAll = () => ({
  type: types.selectAll
})

export const unSelectAll = () => ({
  type: types.unSelectAll
})