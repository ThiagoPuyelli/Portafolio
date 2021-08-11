import Menu from "./Menu"
import ThemeButton from "./ThemeButton"
import { useFela } from 'react-fela'
import { useSelector } from "react-redux"
import StoreInterface from "../interfaces/StoreInterface"
import defineTheme from "../utils/defineTheme"

export default function Header () {
  const theme = useSelector((state: StoreInterface) => state.theme.theme)
  const { css } = useFela()

  const headerStyle = css({
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-between',
    padding: '20px',
    background: defineTheme(theme, 'var(--firstWhite)', 'var(--firstBlack)')
  })
  return (
    <div className={headerStyle}>
      <Menu></Menu>
      <ThemeButton></ThemeButton>
    </div>
  )
}