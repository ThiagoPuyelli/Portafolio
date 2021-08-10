import { ProjectInterface } from "../interfaces/ProjectsInterface";
import Image from "next/image"

export default function Project ({ image, title, description, tics, url, github }: ProjectInterface) {
  return (
    <div className="project">
      <h1 className='titleProject'>{title}</h1>
      <div className="imageProject">
        <Image src={require(image)} alt='Image to project' />
      </div>
      <p className='descriptionProject'>{description}</p>
      <div className="linksProject">
        {url && <span className='urlProject'>{url}</span>}
        {github && <span className='githubProject'>{github}</span>}
      </div>
      <div className="tecsProject">
        {tics.map((tec: string) => {
          return <span key={tec} className='tecProject'>{tec}</span>
        })}
      </div>
    </div>
  )
}