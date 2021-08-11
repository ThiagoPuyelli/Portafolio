/*
import { useFela } from 'react-fela'
import Image from 'next/image'
import menuDark from '../public/img/menuLight.svg'
import menuLight from '../public/img/menuDark.svg'
import Link from 'next/link'
import StoreInterface from '../interfaces/StoreInterface'
import { useSelector } from 'react-redux'
import defineTheme from '../utils/defineTheme'

export default function Menu () {
  let width = '0px'
  let padding = '0px'
  let transform = 'rotateZ(0deg)'
  const theme = useSelector((state: StoreInterface) => state.theme.theme)
  const color = useSelector((state: StoreInterface) => state.theme.color)
    
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
      background: defineTheme(theme, 'var(--firstWhite)', 'var(--firstBlack)'),
      padding,
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
      border: '2px solid ' + defineTheme(theme, 'var(--green3)', 'var(--green1)'),
      borderTop: 'none !important',
      height: '10px',
      marginTop: '15px',
      paddingLeft: '5px',
      paddingRight: '5px'
    },
    '> .links .link .linkButton': {
      marginTop: '-17px',
      transition: '300ms all',
      color,
      fontWeight: 'bold'
    },
    '> .links .link .linkButton:hover': {
      transform: 'scale(1.2, 1.2)',
      color: defineTheme(theme, 'var(--green2)', 'var(--green1)')
    },
    '> .imgStyle': {
        width: '70px',
        height: '70px',
        position: 'fixed',
        left: '20px',
        top: '20px',
        borderRadius: '99px',
        boxShadow: '0px 0px 5px ' + defineTheme(theme, '#ccc', 'var(--secondaryBlack)'),
        padding: '10px',
        border: '1px solid ' + defineTheme(theme, '#ccc', 'var(--secondaryBlack)'),
        transition: '300ms all',
        cursor: 'pointer',
        zIndex: '3 !important',
        background: defineTheme(theme, 'var(--firstWhite)', 'var(--firstBlack)'),
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
      if (links) links.style.width = '270px'
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
        <Image className='menuImg' src={defineTheme(theme, menuDark, menuLight)} alt='Image to menu' />
      </div>
      <ul className="links">
        <li className="link">
          <div className="linkButton">
            <Link href='/'>Inicio</Link>
          </div>
        </li>
        <li className="link">
          <div className="linkButton">
            <Link href='/contact'>Contacto</Link>
          </div>
        </li>
        <li className="link">
          <div className="linkButton">
            <Link href='/projects'>Proyectos</Link>
          </div>
        </li>
      </ul>
    </div>
  )
}*/
import Link from "next/link"
import { useFela } from 'react-fela'
import StoreInterface from '../interfaces/StoreInterface'
import { useSelector } from 'react-redux'
import defineTheme from '../utils/defineTheme'

export default function Menu () {
  const theme = useSelector((state: StoreInterface) => state.theme.theme)
  const color = useSelector((state: StoreInterface) => state.theme.color)
    
  const { css } = useFela()
  const menuStyle = css({
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-between',
    width: '300px',
    color,
    listStyle: 'none',
    '> li': {
      padding: '5px',
      border: '3px solid ' + defineTheme(theme, 'var(--green3)', 'var(--green1)'),
      borderTop: 'none !important',
      height: '10px',
      marginTop: '20px'
    },
    '> li *': {
      display: 'block',
      fontWeight: 'bold',
      fontSize: '18px',
      marginTop: '-20px !important',
      ':hover': {
        transform: 'scale(1.1, 1.1)',
        color: defineTheme(theme, 'var(--green3)', 'var(--green1) !important'),
      }
    }
  })
  return (
    <ul className={menuStyle}>
      <li>
        <Link href='/' passHref>Inicio</Link>
      </li>
      <li>
        <Link href='/contact' passHref>Contacto</Link>
      </li>
      <li>
        <Link href='/projects' passHref>Proyectos</Link>
      </li>
    </ul>
  )
}