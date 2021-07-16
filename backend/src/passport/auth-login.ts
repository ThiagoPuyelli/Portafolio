import passport from 'passport'
import { BasicStrategy } from 'passport-http'
import { Strategy, ExtractJwt } from 'passport-jwt'
import User from '../models/User'

export default () => {
  passport.serializeUser((user, done) => {
    done(null, user._id)
  })

  passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id)
    done(null, user)
  })

  passport.use('login', new BasicStrategy(
    async (username, password, done) => {
      try {
        console.log('pepe')
        let user: any = await User.findOne({ username })

        if (!user) {
          return done(false)
        }

        const verifyPassword = await user.comparePasswords(password)

        if (!verifyPassword) {
          return done(false)
        }

        if (user.toObject) {
          user = user.toObject()
        }

        return done(null, user)
      } catch (err) {
        return done(false)
      }
    }
  ))

  passport.use('token', new Strategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_PASSWORD
  }, async (payload, done) => {
    try {
      const user = await User.findById(payload.userID)

      done(null, user)
    } catch (err) {
      done(false)
    }
  }
  ))
}
