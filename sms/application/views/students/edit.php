<div class="row">
	<div class="col-sm-8 col-md-offset-2">
		
		<h2 class="page-title"><i class="fa fa-pencil-square-o" aria-hidden="true"></i>Edit Student Record</h2>
	
		<div class="content">

			<?php echo form_open('students/edit/'.$student['stud_id'], array('class' => 'form-horizontal edit-form')); ?>
				
				<div class="form-group">
					<label for="fullname" class="col-md-4 control-label">Full Name</label>
						<div class="col-md-7">
							<?php 
								$name_values = array('name' => 'fullname', 'id' => 'fullname', 'value' => $student['stud_fname'], 'class' => 'form-control');
								echo form_input($name_values); 
							?>
							<?php echo form_error('fullname', '<div class=\'error alert-danger\'>', '</div>') ?>
						</div>
				</div>
				
				<div class="form-group">
					<label for="address" class="col-md-4 control-label">Residence Address</label>
					<div class="col-md-7">
						<?php
								$address_values = array('name' => 'address', 'id' => 'address', 'value' => $student['stud_addr'], 'class' => 'form-control', 'rows' => 4);
								echo form_textarea($address_values);
						?>
						<?php echo form_error('address', '<div class=\'error alert-danger\'>', '</div>') ?>
					</div>
				</div>
					
				<div class="form-group">
					<label for="yop" class="col-md-4 control-label">Residence Address</label>
					<div class="col-md-5">
							<?php 

								$yop_selected = (isset($student)) ? $student['stud_yop'] : "";
								$yop_values = array("" => "Choose Year", "2018" => "2018", "2019" => "2019", "2020" => "2020", "2021" => "2021", "2022" => "2022");
								echo form_dropdown('yop', $yop_values, $yop_selected, array("class" => "form-control"));

						 	?>
							<?php echo form_error('yop', '<div class=\'error alert-danger\'>', '</div>') ?>
					</div>
				</div>


				<div class="form-group">
					<label for="gender" class="col-md-4 control-label">Gender</label>
					<div class="col-md-4">
						<div class="radio">
							<label>
								<?php echo form_radio('gender', "m", $student['stud_gend'] === "m"); ?>
								Male
							</label>
							<label>
								<?php echo form_radio('gender', "f", $student['stud_gend'] === "f"); ?>
								Female
							</label>
					
							<?php echo form_error('gender', '<div class=\'error alert-danger\'>', '</div>') ?>
						</div>
					</div>
				</div>


				<div class="form-group">
					<label for="interests[]" class="col-md-4 control-label">Extra Curricular Interests</label>
					<div class="col-md-7">

						<div class="checkbox">
							<label>
								<?php echo form_checkbox('interests[]', "0", in_array("0", (array)json_decode($student['stud_intr']))) ?>
								Sports
							</label>
						
							<label>
								<?php echo form_checkbox('interests[]', "1", in_array("1", (array)json_decode($student['stud_intr']))) ?>
								Programming
							</label>
						
							<label>
								<?php echo form_checkbox('interests[]', "2", in_array("2", (array)json_decode($student['stud_intr']))) ?>
								Arts
							</label>
						
							<label>
								<?php echo form_checkbox('interests[]', "3y", in_array("3y", (array)json_decode($student['stud_intr']))) ?>
								Music
							</label>
						</div>
					</div>	
				</div>

				<div class="col-md-5 col-md-offset-7">
					<input type="submit" class="btn btn-success" value="SUBMIT">
					<a href="<?php echo base_url() ?>">
						<input type="button" class="btn btn-danger" value="CANCEL">
					</a>
				</div>

			

				
			</form>
		</div>
		
	</div>
</div>