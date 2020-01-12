$(function(){
	deleteStudent();
})

function deleteStudent(){
	$("body").on('click', '#deleteStudent', function(e){
		e.preventDefault();
		var studentName = $(this).data('name');
		var sure = confirm('Are you sure you want to delete '+studentName+'?');
		if(sure){
			var href = $(this).attr('href');
			window.location.href = href;
		}
	})
}