import { Schema, Document, model } from 'mongoose'
import { SkillInterface } from '../interfaces/SkillInterface'

const skillSchema = new Schema<SkillInterface & Document>({
  skill: {
    type: String,
    required: true
  },
  porcent: {
    type: Number,
    required: true,
    min: 0,
    max: 100
  },
  color: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
})

export default model<SkillInterface & Document>('Skill', skillSchema)
