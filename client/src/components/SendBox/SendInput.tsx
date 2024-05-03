import style from './SendBox.module.css'

interface SendInputProps {
	value: string
	onChange: () => void
}

export const SendInput = ({ value, onChange }: SendInputProps) => {
	return (
		<input
			placeholder='Enter a message...'
			type='text'
			className={style.sendInput}
			value={value}
			onChange={onChange}
		/>
	)
}
