export default function Option(props){
	return (
		<p
			className="option"
			onClick={() => {props.onClick(props.optionText)}} >{props.optionText}
			<span className="cross">x</span>
		</p>
	)
}