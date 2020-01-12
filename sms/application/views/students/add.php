<div class="row">
	<div class="col-sm-8 col-sm-offset-2">
		
		<h2 class="page-title"><i class="fa fa-user-plus" aria-hidden="true"></i>Add New Student Record</h2>

		<!-- <div class="container"> -->

			<div class="content">

				<?php echo form_open('students/add', array('class' => 'form-horizontal add-form')); ?>
				
					<div class="form-group">
						<label for="fullname" class="col-md-4 control-label">Full Name</label>
						<div class="col-md-7">
							<input type="text" id="fullname" placeholder="Enter Your Full Name" class="form-control" name="fullname" value="<?php echo set_value('fullname') ?>" >
							<?php echo form_error('fullname', '<div class=\'error alert-danger\'>', '</div>') ?>
						</div>
					</div>

					<div class="form-group">
						<label for="address" class="col-md-4 control-label">Residence Address</label>
						<div class="col-md-7">
							<textarea name="address" rows="4" id="address" class="form-control" ><?php echo set_value('address') ?></textarea>
							<?php echo form_error('address', '<div class=\'error alert-danger\'>', '</div>') ?>
						</div>
					</div>
					<div class="form-group">
						<label for="yop" class="col-md-4 control-label">Expected Year of Passing</label>
						<div class="col-md-5">
							<select name="yop" id="yop" class="form-control">
								<option value="" <?php echo set_select('yop', '', TRUE) ?> >Choose Year</option>
								<option value="2018" <?php echo set_select('yop', '2018') ?> >2018</option>
								<option value="2019" <?php echo set_select('yop', '2019') ?> >2019</option>
								<option value="2020" <?php echo set_select('yop', '2020') ?> >2020</option>
								<option value="2021" <?php echo set_select('yop', '2021') ?> >2021</option>
								<option value="2022" <?php echo set_select('yop', '2022') ?> >2022</option>
							</select>
							<?php echo form_error('yop', '<div class=\'error alert-danger\'>', '</div>') ?>
						</div>
					</div>
					
					<div class="form-group">
						<label for="gender" class="col-md-4 control-label">Gender</label>
						<div class="col-md-4">
							<div class="radio">
								<label>
									<input type="radio" name="gender" value="m" <?php echo set_radio('gender', 'm') ?>>
									Male
								</label>
								<label>
									<input type="radio" name="gender" value="f" <?php echo set_radio('gender', 'f')?>>
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
									<input type="checkbox" name="interests[]" value="0" <?php echo set_checkbox('interests[]', '0') ?>>
									Sports
								</label>
							
								<label>
									<input type="checkbox" name="interests[]" value="1" <?php echo set_checkbox('interests[]', '1') ?>>
									Programming
								</label>
							
								<label>
									<input type="checkbox" name="interests[]" value="2" <?php echo set_checkbox('interests[]', '2') ?>>
									Arts
								</label>
							
								<label>
									<input type="checkbox" name="interests[]" value="3" <?php echo set_checkbox('interests[]', '3') ?>>
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

					
				</div>
			</form>
		</div>
		
	<!-- </div> -->
</div>