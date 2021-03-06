import { Schema, Document, model } from 'mongoose'
import UserInterface from '../interfaces/UserInterface'
import bcrypt from 'bcryptjs'
import { NextFunction } from 'express'

const userSchema = new Schema<UserInterface & Document>({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

userSchema.pre('save', async function (next: NextFunction) {
  if (!this.isModified('password')) return next()

  try {
    const passwordHased = await bcrypt.hash(this.password, 12)
    this.password = passwordHased
    next()
  } catch (error) {
    next(error)
  }
})

userSchema.methods.comparePasswords = async function (password: string) {
  try {
    const comparePassword = await bcrypt.compare(password, this.password)
    return comparePassword
  } catch (err) {
    return false
  }
}

export default model<UserInterface & Document>('User', userSchema)
