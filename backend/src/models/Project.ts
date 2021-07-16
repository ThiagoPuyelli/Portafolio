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
    type: [String],
    required: true
  },
  image: {
    type: String,
    required: true
  }
})

export default model<ProjectInterface & Document>('Project', projectSchema)
