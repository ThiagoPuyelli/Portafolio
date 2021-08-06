import { useFela } from 'react-fela'
import Image from 'next/image'
import avatar from '../public/img/avatar.jpeg'

export default function Home() {
  const { css } = useFela()
  const contentStyle = css({
    display: 'flex',
    flexFlow: 'column wrap',
    alignItems: 'center',
    width: '100%',
    paddingTop: '100px',
    padding: '30px',
    '> .about': {
      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent: 'center',
      '> div': {
        margin: '10px',
      },
      '> .text': {
        width: '400px',
        fontSize: '20px'
      },
      '> .img': {
        width: '300px',
        border: '6px solid black',
        borderRadius: '30px',
        paddingBottom: '-10px',
        overflow: 'hidden',
        height: '380px'
      },
      '> .img .htmlImg': {
        border: '6px solid black',
        width: '100%',
      },
      '> .text .titleName': {
        fontSize: '50px',
        '> .titleBold': {
          color: 'var(--green1)',
          fontSize: '80px',
          textShadow: '0px 0px 3px #ccc',
          textDecoration: 'underline'
        }
      },
    }
  })
  
  return (
    <div className={contentStyle}>
      <div className="about">
        <div className="img">
          <Image src={avatar} className='htmlImg' alt='Foto de perfil' />
        </div>
        <div className="text">
          <h1 className='titleName'>
            <b className='titleBold'>T</b>hiago <b className='titleBold'>P</b>uyelli
          </h1>
          <p>
            Mi nombre es Thiago Puyelli, tengo 17 años y soy desarrollador web fullstack,
            comenze hace poco mas de un año, aprendiendo javascript y he ido mejorando con el tiempo
            aprendiendo otras herramientas y habilidades
          </p>
        </div>
      </div>
    </div>
  )
}
