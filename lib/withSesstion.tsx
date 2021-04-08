import { NextApiHandler } from 'next'
import { withIronSession } from 'next-iron-session'

export default function withSession(handler: NextApiHandler) {
  return withIronSession(handler, {
    // password: process.env.SECRET_COOKIE_PASSWORD,
    // cookieName: 'next.js/examples/with-iron-session',
    password: 'c2a85490-cc60-4f21-94e8-8dc5dd3220da',
    cookieName:'blog'
  })
}