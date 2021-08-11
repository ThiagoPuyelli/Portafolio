import { Schema, Document, model } from 'mongoose'
import ProjectInterface from '../interfaces/ProjectInterface'

const projectSchema = new Schema<ProjectInterface & Document>({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  tecnologies: {
    type: [{
      tec: {
        type: String,
        required: true
      },
      color: {
        type: String,
        required: true
      }
    }],
    required: true
  },
  image: {
    type: String,
    required: true
  },
  url: String,
  github: String
})

export default model<ProjectInterface & Document>('Project', projectSchema)
