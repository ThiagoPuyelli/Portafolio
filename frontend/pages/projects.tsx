import axios from "axios"
import Project from "../components/Project"
import { ProjectInterface } from "../interfaces/ProjectsInterface"
import ProjectsInterface from "../interfaces/ProjectsInterface"
import { env } from "../next.config"
import { useSelector } from "react-redux"
import StoreInterface from "../interfaces/StoreInterface"
import { useFela } from "react-fela"
import defineTheme from "../utils/defineTheme"

export default function Projects (projects: ProjectsInterface) {
  const theme = useSelector((state: StoreInterface) => state.theme.theme)
  const color = useSelector((state: StoreInterface) => state.theme.color)
  const { css } = useFela()

  const projectsStyle = css({
    display: 'flex',
    flexFlow: 'column wrap',
    alignItems: 'center',
    paddingTop: '20px',
    background: defineTheme(theme, 'var(--firstWhite)', 'var(--firstBlack)'),
    border: 'none !important',
    margin: '0px !important',
    paddingBottom: '30px',
    '> *': {
      color
    }
  })
  
  return (
    <div className={projectsStyle}>
      <h1 className='titleProjects'>Proyectos</h1>
      <div className="projects">
        {projects.projecs.map(pro => {
          const { title, description, image, tecnologies, url, github } = pro
          return <Project title={title} description={description} image={image} tecnologies={tecnologies} url={url} github={github}  key={pro.title} />
        })}
      </div>
    </div>
  )
}

export async function getStaticProps () {
  try {
    const response = await axios.get(env.URI + '/project')

    if (!response) {
      console.log(response)
      return {
        props: {
          projects: []
        }  
      }
    }

    return {
      props: {
        projecs: response.data.message.projects
      }
    }
  } catch (err) {
    console.log(err)
    return {
      props: {
        projects: []  
      }
    }
  }
}