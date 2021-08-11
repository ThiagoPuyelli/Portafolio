import { ProjectInterface, TecnologyInterface } from "../interfaces/ProjectsInterface";
import Image from "next/image"
import Link from 'next/link'
import { useFela } from "react-fela";
import defineTheme from "../utils/defineTheme";
import { useSelector } from "react-redux";
import StoreInterface from "../interfaces/StoreInterface";

export default function Project ({ image, title, description, tecnologies, url, github }: ProjectInterface) {
  const { css } = useFela()
  const theme = useSelector((state: StoreInterface) => state.theme.theme)
  
  const projectStyle = css({
    textAlign: 'center',
    width: '400px',
    padding: '20px',
    borderRadius: '20px',
    border: '6px solid black !important',
    boxShadow: '0px 0px 4px black !important',
    margin: '20px',
    background: 'transparent',
    '> *': {
      marginTop: '20px'
    },
    '> .titleProject': {
      marginTop: '0px'
    },
    '> .imageProject': {
      position: 'relative',
      width: '100%',
      boxShadow: '0px 0px 4px #ccc',
    },
    '> .imageProject *': {
      position: 'relative !important',
      width: '100%',
      height: '200px',
    },
    '> .linksProject': {
      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent: 'space-between',
      marginBottom: '10px',
      '> .linkProject *': {
        padding: '5px',
        paddingLeft: '20px',
        paddingRight: '20px',
        fontWeight: 'bold',
        cursor: 'pointer',
        transition: '300ms all',
        textDecoration: 'underline',
        borderRadius: '15px',
      },
      '> .linkProject.urlProject *': {
        color: 'rgb(19, 81, 250)',
        border: '2px solid rgb(19, 81, 250)',
        backgroundColor: 'rgb(19, 81, 250, 0.2)',
        boxShadow: '0px 0px 3px rgb(19, 81, 250)',
        ':hover': {
          textShadow: '0px 0px 3px rgb(19, 81, 250)',
          boxShadow: '0px 0px 3px rgb(19, 81, 250), 0px 0px 3px inset rgb(19, 81, 250)'
        }
      },
      '> .linkProject.githubProject *': {
        color: defineTheme(theme, 'var(--firstBlack)', 'var(--firstWhite)'),
        border: '2px solid ' + defineTheme(theme, 'var(--firstBlack)', 'var(--firstWhite)'),
        backgroundColor: 'rgb(0, 0, 0, 0.2)',
        boxShadow: '0px 0px 3px ' + defineTheme(theme, 'var(--firstBlack)', 'var(--firstWhite)'),
        ':hover': {
          textShadow: '0px 0px 3px ' + defineTheme(theme, 'var(--firstBlack)', 'var(--firstWhite)'),
          boxShadow: '0px 0px 3px ' + defineTheme(theme, 'var(--firstBlack)', 'var(--firstWhite)') + ', 0px 0px 3px inset ' + defineTheme(theme, 'var(--firstWhite)', 'var(--firstBlack)')
        }
      }
    },
    '> .tecsProject': {
      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent: 'space-between'
    }
  })

  return (
    <div className={projectStyle}>
      <h1 className='titleProject'>{title}</h1>
      <div className="imageProject">
        <Image src={image} layout='fill' alt='Image to project' />
      </div>
      <p className='descriptionProject'>{description}</p>
      <div className="linksProject">
        {url && <div className='linkProject urlProject'><Link passHref href={url}><a target='_blank'>Url</a></Link></div> }
        {github && <div className='linkProject githubProject'><Link passHref href={github}><a target='_blank'>Github</a></Link></div> }
      </div>
      <div className="tecsProject">
        {tecnologies.map((tec: TecnologyInterface) => {
          return <span 
            key={tec.tecnology} 
            className='tecProject'
            style={{
              color: tec.color,
              border: '3px solid ' + tec.color,
              boxShadow: '0px 0px 3px ' + tec.color,
              fontWeight: 'bold',
              borderRadius: '10px',
              padding: '5px'
            }}
            >
            {tec.tecnology}
            </span>
        })}
      </div>
    </div>
  )
}