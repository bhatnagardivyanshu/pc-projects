export default function Action(props) {
	console.log(props);
	return (
		<div>
			<button
				className = "big-button"
				onClick={props.onClick}
				disabled={!props.hide}
			>
			What should I do?
			</button>
		</div>)
}