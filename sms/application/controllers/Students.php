<?php 

	/* A controller to handle the pages request */

	class Students extends CI_Controller {

		public function load_view($view_name, $data=array()){
			$this->load->view('templates/header', $data);
			$this->load->view('students/'.$view_name, $data);
			$this->load->view('templates/footer');
		}
		
		public function index() {
			// setting page title
			$data['page_title'] = 'Student\'s List';
			$data['students'] = $this->Students_Model->get_students();
			$this->load_view('list', $data);
			
		}
		
		public function edit($id = null){

			if($id == null){ show_404(); }

			$this->form_validation->set_rules('fullname', 'Full Name', 'trim|required|min_length[5]|regex_match[/^[a-z ]*$/i]');
			$this->form_validation->set_rules('address', 'Address', 'trim|required|min_length[5]|regex_match[/^[a-zA-Z0-9\s,\'-]*$/]');
			$this->form_validation->set_rules('gender', 'Gender', 'required');
			$this->form_validation->set_rules('yop', 'Expected Year of Passing', 'required');

			if($this->form_validation->run()){
				$result = $this->Students_Model->save_student($id);
				if($result){
					$this->session->set_flashdata('message', array("action" => "edited", "success" => true));
				}else{
					$this->session->set_flashdata('message', array("action" => "edited", "success" => false));
				}
				unset($result);
				redirect(base_url());
			}else{
				$result = $this->Students_Model->get_students($id);
				if(!empty($result)){
					$data['student'] = $result;
					$data['page_title'] = 'Edit Student';
					$this->load_view('edit', $data);
				}else{
					show_404();
				}
				unset($result);
			}
		}


		public function add(){

			$this->form_validation->set_rules('fullname', 'Full Name', 'trim|required|min_length[5]|regex_match[/^[a-z ]*$/i]');
			$this->form_validation->set_rules('address', 'Address', 'trim|required|min_length[5]|regex_match[/^[a-zA-Z0-9\s,\'-]*$/]');
			$this->form_validation->set_rules('gender', 'Gender', 'required');
			$this->form_validation->set_rules('yop', 'Expected Year of Passing', 'required');

			if(!$this->form_validation->run()){
				$data['page_title'] = 'Add Student';
				$this->load_view('add', $data);
			}else{			
				$result = $this->Students_Model->save_student();
				if($result){
					$this->session->set_flashdata('message', array("action" => "added", "success" => true));
				}else{
					$this->session->set_flashdata('message', array("action" => "added", "success" => false));
				}
				unset($result);
				redirect(base_url());
			}
		}


		public function delete($id = null){

			if($id === null){ show_404(); }
			else {
				$result = $this->Students_Model->delete_student($id);

				if($result){
					$this->session->set_flashdata('message', array("action" => "deleted", "success" => true));
				}else{
					$this->session->set_flashdata('message', array("action" => "deleted", "success" => false));
				}
				unset($result);
				redirect(base_url());
			}
		}
	}

 ?>