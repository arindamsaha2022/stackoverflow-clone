import express from "express"
import{singup, login} from '../controllers/auth'


const router = express.Router()
router.post('/singup', singup)
router.post('/login', singup)

export default router