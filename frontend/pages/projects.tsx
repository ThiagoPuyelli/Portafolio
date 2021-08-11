import axios from "axios"
import Project from "../components/Project"
import { ProjectInterface } from "../interfaces/ProjectsInterface"
import ProjectsInterface from "../interfaces/ProjectsInterface"
import { env } from "../next.config"

export default function Projects (projects: ProjectsInterface) {
  
  return (
    <div className="contentProjects">
      <h1>Projects</h1>
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