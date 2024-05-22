import express from 'express'
import { playerControllers } from '../../dependences'

export const playerRouter = express.Router()

playerRouter.get('/players', playerControllers.getAllUsers)

