import { useState } from 'react'
import style from './SendBox.module.css'
import React from 'react'

interface SendButtonProps {
	onSend: (message: string) => void
}

export const SendBox = ({ onSend }: SendButtonProps) => {
	const [message, setMessage] = useState('')
	const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setMessage(event.target.value)
	}
	const handleSendMessage = () => {
		setMessage('')
		onSend(message)
	}

	return (
		<>
			<input
				placeholder='Enter a message...'
				type='text'
				className={style.sendInput}
				value={message}
				onChange={handleChange}
			/>
			<button
				onClick={handleSendMessage}
				className={style.sendButton}
			>
				Send
			</button>
		</>
	)
}
