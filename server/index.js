import { WebSocketServer } from 'ws'

const wss = new WebSocketServer({
	port: 8080,
})

const users = []
let count = 1
wss.on('connection', function connection(user_connection) {
	const userId = count
	users.push({ user_connection, id: userId })
	console.info('New connection')

	user_connection.on('message', function message(data) {
		console.info(`${data}`)
		console.info(`Broadcasting message to ${users.length} users`)
		users.forEach(user => {
			user.user_connection.send(`${data}`)
		})
	})
	user_connection.send('test')

	count++
})
