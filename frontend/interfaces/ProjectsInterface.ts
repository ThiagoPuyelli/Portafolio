export interface ProjectInterface {
  title: string;
  description: string;
  image: string;
  tics: string[];
  url?: string;
  github?: string;
}

export default interface ProjectsInterface {
  projects: ProjectInterface[];
}