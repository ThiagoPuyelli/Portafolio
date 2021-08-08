import { useSelector, useDispatch } from 'react-redux'
import StoreInterface from '../interfaces/StoreInterface'
import { themeAction } from '../redux/theme'

export default function ThemeButton () {
  const dispatch = useDispatch()
  const theme = useSelector((state: StoreInterface) => state.theme.theme)
  const color = useSelector((state: StoreInterface) => state.theme.color)
  
  async function changeTheme () {
    if (theme === 'Light') {
      dispatch(themeAction('Dark'))
    } else {
      await dispatch(themeAction('Light'))
    }
  }
  
  return (
    <button onClick={changeTheme} style={{
      color,
      cursor: 'pointer',
      borderRadius: '20px',
      padding: '10px',
      fontSize: '20px',
      position: 'fixed',
      top: '20px',
      right: '20px',
      border: 'none',
      background: 'transparent',
    }}>{theme} theme</button>
  )
}