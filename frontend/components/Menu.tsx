import { useFela } from 'react-fela'
import Image from 'next/image'
import menuDark from '../public/img/menuLight.svg'
import Link from 'next/link'

export default function Menu () {
  let width = '0px'
  let padding = '0px'
  let transform = 'rotateZ(0deg)'
    
  const { css } = useFela()
  const menuStyle = css({
    '> .buttonMenu': {
      width: '70px',
      height: '70px',
      boxShadow: '0px 0px 5px #ccc'
    },
    '> .links': {
      display: 'flex',
      flexFlow: 'row wrap',
      listStyle: 'none',
      transition: '300ms all',
      alignItems: 'center',
      justifyContent: 'space-around',
      position: 'fixed',
      padding,
      boxShadow: '0px 0px 5px #ccc !important',
      border: '1px solid #ccc',
      zIndex: '2 !important',
      left: '80px',
      top: '20px',
      height: '40px',
      width,
      borderRadius: '0px 20px 20px 0px',
      overflow: 'hidden'
    },
    '> .links .link': {
      display: 'block',
      border: '2px solid var(--green3)',
      borderTop: 'none',
      height: '10px',
      marginTop: '15px',
      paddingLeft: '5px',
      paddingRight: '5px'
    },
    '> .links .link .linkButton': {
      marginTop: '-17px',
      transition: '300ms all'
    },
    '> .links .link .linkButton:hover': {
      transform: 'scale(1.2, 1.2)',
      color: 'var(--green2)'
    },
    '> .imgStyle': {
        width: '70px',
        height: '70px',
        position: 'fixed',
        left: '20px',
        top: '20px',
        borderRadius: '99px',
        boxShadow: '0px 0px 5px #ccc',
        padding: '10px',
        border: '1px solid #ccc',
        transition: '300ms all',
        cursor: 'pointer',
        zIndex: '3 !important',
        background: 'white',
        transform,
        '> menuImg': {
          width: '100%'
        }
    },
    '> .imgStyle:hover': {
      transform: 'scale(1.2, 1.2)'
    }
  })

  const menuClick = () => {
    const links: HTMLElement|null = document.querySelector('.links')
    const menuImg: HTMLElement|null = document.querySelector('.imgStyle')
    if (width === '0px' && padding === '0px' && transform === 'rotateZ(0deg)') {
      if (links) links.style.width = '250px'
      if (links) links.style.padding = '10px'
      if (menuImg) menuImg.style.transform = 'rotateZ(90deg)'
      width = '250px'
      padding = '10px'
      transform = 'rotateZ(90deg)'
    } else if (width === '250px' && padding === '10px' && transform === 'rotateZ(90deg)') {
      if (links) links.style.width = '0px'
      if (links) links.style.padding = '0px'
      if (menuImg) menuImg.style.transform = 'rotateZ(0deg)'
      width = '0px'
      padding = '0px'
      transform = 'rotateZ(0deg)'
    }
  }

  return (
    <div className={menuStyle}>
      <div className='imgStyle' onClick={menuClick}>
        <Image className='menuImg' src={menuDark} alt='Image to menu' />
      </div>
      <ul className="links">
        <li className="link">
          <div className="linkButton">
            <Link href='/'>Inicio</Link>
          </div>
        </li>
        <li className="link">
          <div className="linkButton">
            <Link href='/contact'>Contact</Link>
          </div>
        </li>
        <li className="link">
          <div className="linkButton">
            <Link href='/projects'>Projects</Link>
          </div>
        </li>
      </ul>
    </div>
  )
}