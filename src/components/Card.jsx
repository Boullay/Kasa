
const Card = ({id, cover, title}) => {
    return(
        <li key={id}>
			<img src={cover} alt={`${title} cover`} className="Card __img" />
			<span className="__title">{title}</span>
		</li>
    )
}

export default Card;