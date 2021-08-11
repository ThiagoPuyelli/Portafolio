export interface TecnologyInterface {
  tecnology: string;
  color: string;
}

export interface ProjectInterface {
  title: string;
  description: string;
  image: string;
  tecnologies: TecnologyInterface[];
  url?: string;
  github?: string;
}

export default interface ProjectsInterface {
  projecs: ProjectInterface[];
}