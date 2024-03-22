import style from './Message.module.css'

interface MessageProps {
	text: string
	sendAt: string
}

export const Message = ({ text, sendAt }: MessageProps) => {
	return (
		<div className={style.message}>
			<img
				src='https://lh3.googleusercontent.com/3bXLbllNTRoiTCBdkybd1YzqVWWDRrRwJNkVRZ3mcf7rlydWfR13qJlCSxJRO8kPe304nw1jQ_B0niDo56gPgoGx6x_ZOjtVOK6UGIr3kshpmTq46pvFObfJ2K0wzoqk36MWWSnh0y9PzgE7PVSRz6Y'
				alt='icon'
				width={40}
				height={40}
			/>
			<p>{text}</p>
			<span>{new Date(sendAt).toLocaleDateString()}</span>
		</div>
	)
}
