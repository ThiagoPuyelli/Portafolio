export interface ProjectInterface {
  title: string;
  description: string;
  image: string;
  tecnologies: string[];
  url?: string;
  github?: string;
}

export default interface ProjectsInterface {
  projecs: ProjectInterface[];
}