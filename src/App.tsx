import style from './App.module.css'
import { Header } from './components/Header'
import { Message } from './components/Message'
import { Person } from './components/Person'
import { SendBox } from './components/SendBox/SendBox'

function App() {
	return (
		<div className={style.chat}>
			<div className={style.header}>
				<Header chatName='skiing' />
			</div>
			<div className={style.messages}>
				<Message
					text='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam odio placeat incidunt, quos temporibus sunt perspiciatis recusandae eos eligendi voluptatibus. Labore voluptatibus harum, natus quibusdam veritatis expedita suscipit? Ipsa, obcaecati?'
					sendAt='2024-01-02T00:00:00'
				/>
				<Message
					text='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam odio placeat incidunt, quos temporibus sunt perspiciatis recusandae eos eligendi voluptatibus. Labore voluptatibus harum, natus quibusdam veritatis expedita suscipit? Ipsa, obcaecati?'
					sendAt='2024-01-02T00:00:00'
				/>
				<Message
					text='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam odio placeat incidunt, quos temporibus sunt perspiciatis recusandae eos eligendi voluptatibus. Labore voluptatibus harum, natus quibusdam veritatis expedita suscipit? Ipsa, obcaecati?'
					sendAt='2024-01-02T00:00:00'
				/>
				<Message
					text='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam odio placeat incidunt, quos temporibus sunt perspiciatis recusandae eos eligendi voluptatibus. Labore voluptatibus harum, natus quibusdam veritatis expedita suscipit? Ipsa, obcaecati?'
					sendAt='2024-01-02T00:00:00'
				/>
			</div>
			<SendBox />
			<div className={style.persons}>
				<Person
					name='Bob'
					image='https://lh3.googleusercontent.com/3bXLbllNTRoiTCBdkybd1YzqVWWDRrRwJNkVRZ3mcf7rlydWfR13qJlCSxJRO8kPe304nw1jQ_B0niDo56gPgoGx6x_ZOjtVOK6UGIr3kshpmTq46pvFObfJ2K0wzoqk36MWWSnh0y9PzgE7PVSRz6Y'
				/>
				<Person
					name='Alice'
					image='https://lh3.googleusercontent.com/3bXLbllNTRoiTCBdkybd1YzqVWWDRrRwJNkVRZ3mcf7rlydWfR13qJlCSxJRO8kPe304nw1jQ_B0niDo56gPgoGx6x_ZOjtVOK6UGIr3kshpmTq46pvFObfJ2K0wzoqk36MWWSnh0y9PzgE7PVSRz6Y'
				/>
			</div>
		</div>
	)
}

export default App
