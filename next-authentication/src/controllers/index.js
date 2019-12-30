import expressPromiseRouter from 'express-promise-router'
import login from './login'
import logout from './logout'
const router = expressPromiseRouter()

router.post('/login', login)
router.post('/logout', logout)

export default router