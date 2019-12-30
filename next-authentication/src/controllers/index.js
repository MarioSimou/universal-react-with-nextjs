import expressPromiseRouter from 'express-promise-router'

const router = expressPromiseRouter()

router.get('/ping', (req,res) => {
	res.send('pong')
})

export default router