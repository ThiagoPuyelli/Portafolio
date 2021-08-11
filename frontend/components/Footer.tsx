import { useFela } from 'react-fela'
import { useSelector } from 'react-redux'
import StoreInterface from '../interfaces/StoreInterface'
import defineTheme from '../utils/defineTheme'

export default function Footer () {
  const { css } = useFela()
  const theme = useSelector((state: StoreInterface) => state.theme.theme)
  const color = useSelector((state: StoreInterface) => state.theme.color)
  const footerStyle = css({
    display: 'block !important',
    borderTop: '2px solid ' + defineTheme(theme, '#ccc', 'var(--secondaryBlack)'),
    textAlign: 'center',
    padding: '30px',
    boxShadow: '0px 0px 3px ' + defineTheme(theme, '#ccc', 'var(--secondaryBlack)'),
    backgroundColor: defineTheme(theme, 'var(--firstWhite)', 'var(--firstBlack)'),
    color,
    fontSize: '20px'
  })

  return (
    <div className={footerStyle}>
      Web hecha por Thiago Puyelli
    </div>
  )
}