import { useFela } from 'react-fela'
import Image from 'next/image'
import avatar from '../public/img/avatar.jpeg'
import axios from 'axios'
import { env } from '../next.config'
import { SkillsInterface, SkillInterface } from '../interfaces/SkillsInterface'
import StoreInterface from '../interfaces/StoreInterface'
import { useSelector } from 'react-redux'

export default function Home({ skills }: SkillsInterface) {
  const theme = useSelector((state: StoreInterface) => state.theme.theme)
  const { css } = useFela()
  const contentStyle = css({
    display: 'flex',
    flexFlow: 'column wrap',
    alignItems: 'center',
    width: '100%',
    paddingTop: '100px',
    padding: '30px',
    background: theme === 'Dark' ? 'var(--firstBlack)' : 'var(--firstWhite)',
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
        border: '10px solid black',
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
    },
    '> .skills': {
      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent: 'space-evenly',
      width: '100%',
      padding: '70px',
      '> .skill': {
        width: '320px',
        margin: '20px',
        '> .skillBox': {
          display: 'flex',
          flexFlow: 'row wrap',
          alignItems: 'center',
          position: 'relative',
          borderRadius: '20px',
          '> *': {
            margin: '10px'
          },
          '> .imgSkill': {
            position: 'relative'
          },
          '> .imgSkill *': {
            width: '80px',
            height: '80px',
            position: 'relative !important'
          }
        }
      }
    }
  })

  let skillsHTML: Array<any> = []
  
  if (skills.length === 0) {
    console.log('Error to find skills')
  } else {
    skillsHTML = skills.map((skill: SkillInterface) => {
      return (
        <div className='skill' key={skill.skill}>
          <div className='skillBox' style={
            {
              border: '6px solid ' + skill.color,
              boxShadow: '0px 0px 4px ' + skill.color
            }
            }>
            <div className='imgSkill'>
              <Image src={skill.image} layout='fill' alt={'Logo de ' + skill.skill} />
            </div>
            <h1>{skill.skill}</h1>
          </div>
          <div className="progress" style={
            {
              background: '#ccc',
              height: '15px',
              width: '100%',
              borderRadius: '20px',
              marginTop: '10px',
              overflow: 'hidden',
              boxShadow: '0px 0px 4px ' + skill.color,
              border: '1px solid ' + skill.color
            }
          }>
            <div className="progressBar" style={
              {
                width: skill.porcent + '%',
                backgroundColor: skill.color,
                height: '100%',
                fontSize: '15px',
                color: skill.color
              }
            }>
            .
            </div>
          </div>
        </div>
      )
    })
  }
  
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
      <div className="skills">
        {skillsHTML}
      </div>
    </div>
  )
}

export async function getStaticProps () {
  try {
    if (env.URI) {
      const skills = await axios.get(env.URI + '/skill')
      if (!skills) {
        console.log('Error to find skills in sevrer')
      }
      return {
        props: { skills: skills.data.message.skills }
      }
    } else {
      console.log('Error to find skills in sevrer')
      return { 
        props: {
          skills: []
        }
      }
    }
  } catch (err) {
    console.log(err)
    return { 
      props: {
        skills: []
      }
    }
  }
}
