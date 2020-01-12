export const AddOption = (props) => {
	return (
		<div>
			<form onSubmit={(e) => {props.onSubmit(e)}}>
				<input type="text" name="option" />	
				<button type="submit" className="button" >Subbmit</button>		
			</form>
		</div>	
	)
}

export default AddOption;