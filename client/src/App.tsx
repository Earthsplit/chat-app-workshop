import useWebSocket, { ReadyState } from 'react-use-websocket'
import style from './App.module.css'
import { useEffect, useState } from 'react'
import { SendBox } from './components/SendBox/SendBox'

function App() {
	const [username, setUsername] = useState<string>('')
	const [messageHistory, setMessageHistory] = useState<MessageEvent[]>([])
	const { sendMessage, lastMessage, readyState } = useWebSocket(
		'ws://localhost:8080',
		{ shouldReconnect: closeEvent => true }
	)

	const onUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUsername(e.target.value)
	}

	// Handle incoming messages
	useEffect(() => {
		if (lastMessage !== null) {
			console.log(lastMessage.data)

			setMessageHistory(prev => [...prev, lastMessage])
		}
	}, [lastMessage])

	if (readyState !== ReadyState.OPEN) {
		return <div>Connecting...</div>
	}

	const handleMessage = () => {
		const message = {
			usr: username,
			msg: lastMessage?.data,
		}

		sendMessage(JSON.stringify(message))
	}

	return (
		<div>
			<input
				type='text'
				value={username}
				onChange={onUsernameChange}
				placeholder='Enter your username'
			/>
			<div>Last message: {lastMessage?.data}</div>
			<SendBox onSend={handleMessage} />
			{messageHistory.map((message, idx) => (
				<div key={idx}>{message ? message.data : null}</div>
			))}
		</div>
	)
}

export default App
