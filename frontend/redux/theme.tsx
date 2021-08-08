import { Dispatch } from "redux"

const initialState = {
  theme: 'Light',
  color: 'black'
}

const BLACK_THEME = 'BLACK_THEME'
const WHITE_THEME = 'WHITE_THEME'

export const themeReducer = (state = initialState, { type }: any) => {
  if (type === BLACK_THEME) {
    return { ...state, theme: 'Light', color: 'black'}
  } else if (type === WHITE_THEME) {
    return { ...state, theme: 'Dark', color: 'white' }
  } else {
    return initialState
  }
}

export const themeAction = (theme: string) => (dispatch: Dispatch) => {
  if (theme === 'Light') {
    dispatch({
      type: BLACK_THEME
    })
  } else if (theme === 'Dark'){
    dispatch({
      type: WHITE_THEME
    })
  } else {
    dispatch({
      type: BLACK_THEME
    })
  }
}