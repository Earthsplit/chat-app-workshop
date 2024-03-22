import style from './SendBox.module.css'

export const SendInput = () => {
	return (
		<input
			placeholder='Enter a message...'
			type='text'
			className={style.sendInput}
		/>
	)
}
