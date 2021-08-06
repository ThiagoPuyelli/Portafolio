import express, { Application } from 'express'
import morgan from 'morgan'
import session from 'express-session'
import cors from 'cors'
import passport from 'passport'
import { connect } from 'mongoose'
import { config } from 'dotenv'
import authLogin from './passport/auth-login'

// Routes
import authRoutes from './routes/auth.routes'
import projectRoutes from './routes/project.routes'
import skillRoutes from './routes/skill.routes'

export class App {
  public app: Application
  constructor () {
    this.app = express()

    config()
    this.app.set('port', process.env.PORT || 2300)

    this.setCors()
    authLogin()
    this.setMiddlewares()
    this.connectDatabase()
    this.setRoutes()
  }

  setCors () {
    this.app.use(cors({
      origin: process.env.FRON_URL
    }))
  }

  setMiddlewares () {
    this.app.use(morgan('dev'))
    this.app.use(express.urlencoded({ extended: false }))
    this.app.use(express.json())
    this.app.use(session({
      secret: process.env.SECRET_SESSION,
      resave: false,
      saveUninitialized: false
    }))
    this.app.use(passport.initialize())
    this.app.use(passport.session())
  }

  connectDatabase () {
    const { MONGODB_URI } = process.env

    connect(MONGODB_URI, {
      useFindAndModify: false,
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true
    }, (err: Error) => {
      if (!err) {
        console.log('Database is connected')
      } else {
        console.log('Error to database error:', err)
      }
    })
  }

  setRoutes () {
    this.app.use('/auth/', authRoutes)
    this.app.use('/project/', projectRoutes)
    this.app.use('/skill/', skillRoutes)
  }
}
