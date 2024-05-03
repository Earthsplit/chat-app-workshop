interface HeaderProps {
	chatName: string
}

export const Header = ({ chatName }: HeaderProps) => {
	return (
		<header>
			<h1>{chatName}</h1>
		</header>
	)
}
