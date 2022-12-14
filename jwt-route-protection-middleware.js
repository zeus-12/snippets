import { Router } from 'express'
import { create } from './controller'
import jwt from 'jsonwebtoken'

const router = new Router()

router.post(
  '/things',
  only(['admin','customer']),
  create
)

const only = roles = (req, res, next) => {
  try {
    req.decoded = jwt.verify(token, 'my-secret')
    if(roles.includes(req.decoded.role)
      next()
    else 
      throw new Error('Sem permissões') //can use a custom error factory to manage better the responses
  } catch(err) {
    next(error)
  }
}