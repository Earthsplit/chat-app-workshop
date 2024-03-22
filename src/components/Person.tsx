import style from './Person.module.css'
interface PersonProps {
	name: string
	image: string
}

export const Person = ({ name, image }: PersonProps) => {
	return (
		<div className={style.post}>
			<img
				src={image}
				alt='icon'
				width={40}
				height={40}
			/>
			<h1>{name}</h1>
		</div>
	)
}
