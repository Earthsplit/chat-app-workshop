import style from './SendBox.module.css'

import { SendButton } from './SendButton'
import { SendInput } from './SendInput'

export const SendBox = () => {
	return (
		<div className={style.sendBox}>
			<SendInput />
			<SendButton />
		</div>
	)
}
