import express from 'express'
import next from 'next'
import router from './controllers'
import cookieParser from 'cookie-parser'

const erroRouter = (e,req,res,next) => {
	console.log('HANDLING ERROR: ', e)
	return res.json({status: e.status || 400, success: false, message: e.message})
}

const dev = process.env.NODE_ENV !== 'production',
			app = next({dev}),
			handle = app.getRequestHandler(),
			port = process.env.PORT || 3000

const hadndeStart = () => {
	const server = express()
	server.use(cookieParser(process.env.COOKIE_SECRET))
	server.use(express.json())
	server.use('/api/v1', router)
	server.all('*',(...args) => handle(...args))
	server.use(erroRouter)
	server.listen(port, () => process.stdout.write(`The app listens on port ${port}\n`))
}

app
	.prepare()
	.then(hadndeStart)

const handleError = e => {
	console.log('Error: ',  e)
	os.exit(0)
}

process.on('uncaughtException', handleError)
process.on('unhandledRejection', handleError)