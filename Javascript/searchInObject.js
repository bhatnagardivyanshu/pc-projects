while(true)
{
	var resp = prompt("Enter name/quit");

	if(resp === null || resp.toLowerCase() == "quit"){
		break;
	}else{
		for(student in students){
			if(students[student].name.toLowerCase() == resp.toLowerCase()){
				print_object(students[student]);
				break;
			}
		}
	}


}