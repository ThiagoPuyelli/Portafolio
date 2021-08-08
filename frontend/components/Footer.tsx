import { useFela } from 'react-fela'

export default function Footer () {
  const { css } = useFela()
  const footerStyle = css({
    borderTop: '2px solid #ccc',
    textAlign: 'center',
    padding: '30px',
    boxShadow: '0px 0px 3px #ccc'
  })

  return (
    <div className={footerStyle}>
      Web hecha por Thiago Puyelli
    </div>
  )
}