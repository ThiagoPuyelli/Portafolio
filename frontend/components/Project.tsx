import { ProjectInterface } from "../interfaces/ProjectsInterface";
import Image from "next/image"
import Link from 'next/link'
import { useFela } from "react-fela";

export default function Project ({ image, title, description, tecnologies, url, github }: ProjectInterface) {
  const { css } = useFela()
  const projectStyle = css({
    textAlign: 'center',
    width: '400px',
    padding: '20px',
    borderRadius: '20px',
    border: '6px solid black',
    boxShadow: '0px 0px 4px black',
    margin: '20px',
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
      '> .linkProject': {
        padding: '5px',
        paddingLeft: '20px',
        paddingRight: '20px',
        fontWeight: 'bold',
        cursor: 'pointer',
        transition: '300ms all',
        textDecoration: 'underline',
        borderRadius: '15px',
      },
      '> .linkProject.urlProject': {
        color: 'rgb(19, 81, 250)',
        border: '2px solid rgb(19, 81, 250)',
        backgroundColor: 'rgb(19, 81, 250, 0.2)',
        boxShadow: '0px 0px 3px rgb(19, 81, 250)',
        ':hover': {
          textShadow: '0px 0px 3px rgb(19, 81, 250)',
          boxShadow: '0px 0px 3px rgb(19, 81, 250), 0px 0px 3px inset rgb(19, 81, 250)'
        }
      },
      '> .linkProject.githubProject': {
        color: 'var(--firstBlack)',
        border: '2px solid var(--firstBlack)',
        backgroundColor: 'rgb(0, 0, 0, 0.2)',
        boxShadow: '0px 0px 3px var(--firstBlack)',
        ':hover': {
          textShadow: '0px 0px 3px var(--firstBlack)',
          boxShadow: '0px 0px 3px var(--firstBlack), 0px 0px 3px inset var(--firstBlack)'
        }
      }
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
        {tecnologies.map((tec: string) => {
          return <span key={tec} className='tecProject'>{tec}</span>
        })}
      </div>
    </div>
  )
}