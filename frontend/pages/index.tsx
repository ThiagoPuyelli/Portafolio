import { useFela } from 'react-fela'
import Image from 'next/image'
import avatar from '../public/img/avatar.jpeg'

export default function Home() {
  const { css } = useFela()
  const contentStyle = css({
    display: 'flex',
    flexFlow: 'column wrap',
    alignItems: 'center',
    width: '100%'
  })
  
  return (
    <div className={contentStyle}>
      <div className="about">
        <div className="text">
          <h1 className='titleName'><b>T</b>hiago <b>P</b>uyelli</h1>
          <p>
            Mi nombre es Thiago Puyelli, tengo 17 años y soy desarrollador web fullstack como podras ver,
            comenze hace poco mas de un año, aprendiendo javascript y he ido mejorando con el tiempo
            aprendiendo otras herramientas y habilidades
          </p>
        </div>
        <div className="img">
          <Image src={avatar} alt='Foto de perfil' />
        </div>
      </div>
    </div>
  )
}
