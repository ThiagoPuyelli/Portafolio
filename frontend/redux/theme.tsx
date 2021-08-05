import { Dispatch } from "redux"

const initialState = {
  theme: 'var(--white)',
  marginButton: '-45px',
  themeText: 'var(--black)'
}

const BLACK_THEME = 'BLACK_THEME'
const WHITE_THEME = 'WHITE_THEME'

export const themeReducer = (state = initialState, { type }: any) => {
  if (type === BLACK_THEME) {
    return { theme: 'var(--black)', marginButton: '0px', themeText: 'var(--white)' }
  } else if (type === WHITE_THEME) {
    return { theme: 'var(--white)', marginButton: '-45px', themeText: 'var(--black)' }
  } else {
    return state
  }
}

export const themeAction = (theme: string) => (dispatch: Dispatch) => {
  if (theme === 'var(--white)') {
    dispatch({
      type: BLACK_THEME
    })
  } else {
    dispatch({
      type: WHITE_THEME
    })
  }
}