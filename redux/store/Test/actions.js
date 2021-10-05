import { TEST } from 'redux/store/actionTypes'

export const testAction = () => {
  return dispatch => {
    dispatch({ type: TEST, payload: ['test1', 'test2'] })
  }
}
export const testAction2 = () => {
  return dispatch => {
    dispatch({ type: TEST, payload: ['test1', 'test2'] })
  }
}
