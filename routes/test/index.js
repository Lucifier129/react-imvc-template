import { Router } from 'express'

const router = Router()

export default function (app, server) {
	app.use('/restapi', router)
	server.on('error', (error) => {
		console.log('error', error)
	})
}

router.get('/admin', (req, res) => {
	res.json({
		name: 'Jade Gu'
	})
})