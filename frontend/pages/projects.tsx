import axios from "axios"
import Project from "../components/Project"
import { ProjectInterface } from "../interfaces/ProjectsInterface"
import ProjectsInterface from "../interfaces/ProjectsInterface"
import { env } from "../next.config"

export default function Projects (projects: ProjectsInterface) {
  console.log(projects)
  
  return (
    <div className="contentProjects">
      <h1>Projects</h1>
      {projects.projects.map(pro => {
        const { title, description, image, tics, url, github } = pro
        return <Project title={title} description={description} image={image} tics={tics} url={url} github={github}  key={pro.title} />
      })}
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