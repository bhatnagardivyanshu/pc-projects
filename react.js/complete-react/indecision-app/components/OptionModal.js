import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
	<Modal
		isOpen={!!props.selectedOption}
		onRequestClose={props.closeModal}
		contentLabel="Selected Option"
	>
		<h1>Selected Option</h1>
		<h3>{props.selectedOption}</h3>
		<button onClick={props.closeModal} >Close Modal</button>
	</Modal>
)

export default OptionModal;