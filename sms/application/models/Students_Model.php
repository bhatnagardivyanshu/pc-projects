<?php 

	class Students_Model extends CI_Model {
		public function __construct() {
			$this->load->database();	// load database library
		}

		public function get_students($id = null){

			if(!$id){
				$this->db->order_by('stud_id');
				$query = $this->db->get('students');
				return $query->result_array();
			}

			$query = $this->db->get_where('students',array('stud_id' => $id));
			return $query->row_array();
		}

		public function save_student($id = null) {
			$data = array(
				'stud_fname'=>	$this->input->post('fullname'),
				'stud_addr'	=>	$this->input->post('address'),
				'stud_gend'	=>	$this->input->post('gender'),
				'stud_yop'	=>	$this->input->post('yop'),
				'stud_intr'	=>	json_encode($this->input->post('interests'))
			);
			
			if(!$id){
				$this->db->insert('students', $data);
				$rows_affected = $this->db->affected_rows();
				if((int)$rows_affected === 1){ return true; }
				else { return false; }
			}else{
				$query = $this->db->where('stud_id', $id);
				$this->db->update('students', $data);
				$rows_affected = $this->db->affected_rows();
				if((int)$rows_affected === 1){ return true; }
				else { return false; }
			}
		}

		public function delete_student($id) {
			$this->db->where('stud_id', $id);
			$this->db->limit(1);
			$this->db->delete('students');
			$deleted = $this->db->affected_rows();
			if((int)$deleted === 1){
				return true;
			}else{
				return false;
			}
		}

	}

 ?>