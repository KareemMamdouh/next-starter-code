import { TEST } from 'redux/store/actionTypes'

const initialState = {}

const resucer = (state = initialState, action) => {
  switch (action.type) {
    case TEST:
      return {
        ...state,
        data: action.payload,
      }

    default:
      return { ...state }
  }
}

export default resucer
