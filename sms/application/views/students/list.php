<div class="row">
	<div class="col-md-8 col-md-offset-2">
		
		<h2 class="page-title"><i class="fa fa-list-ol" aria-hidden="true"></i>List of Students</h2>
		<div id="studentsList" class="content">
			<table class="table table-condensed">
				<thead>
					<tr>
						<th>S.No</th>
						<th>Student Name</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					<?php foreach ($students as $key => $value): ?>
						<tr>
							<td><?php echo (int)$key+1; ?></td>
							<td><?php echo "<i class='fa fa-user' aria-hidden='true'></i><span class='studentName'>".$value['stud_fname']."</span>" ?></td>
							<td>
								<a href="<?php echo base_url().'students/edit/'.$value['stud_id']; ?>" class="btn btn-info btn-sm"><i class="fa fa-pencil-square" aria-hidden="true"></i>EDIT</a>
								<a href="<?php echo base_url().'students/delete/'.$value['stud_id']; ?>"  
									id="deleteStudent" class="btn btn-danger btn-sm" 
									data-name="<?php echo $value['stud_fname'] ?>" 
									data-id="<?php echo $value['stud_id'] ?>"><i class="fa fa-trash" aria-hidden="true"></i>DELETE</a>
							</td>
						</tr>
					<?php endforeach?>
				</tbody>
			</table>
		</div>

	</div>
</div>

<div id="notify" class="">
	<div id="notification_div">
		<h4 id="notification"></h4>
	</div>
</div>

<?php if(isset($this->session->flashdata('message')['success'])){ ?>
	<script type="text/javascript">
		$(function(){
			var success = '<?php echo $this->session->flashdata('message')['success'] ?>';
			var action = '<?php echo $this->session->flashdata('message')['action'] ?>';
			if(success){
				var message = 'Student has been '+action+' successfully!';
				$("#notify").removeClass('failed');
				$("#notify").addClass('success');
			}else{
				var message = 'No Changes Made!';
				$("#notify").removeClass('success');
				$("#notify").addClass('failed');
			}
			console.log(message);
			$("#notification").html(message);
			$("#notify")
				.animate({top:["toggle", "swing"], opacity:1},550)
				.delay(1800)
				.animate({top:["toggle", "swing"], opacity: 0},400)
		})
	</script>
<?php } ?>