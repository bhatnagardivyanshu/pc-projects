var students = [
	{
		name: 'Ayush Gulati',
		class: 'XII-B',
		house: 'Subhash House',
		subject: 'Non-Medical'
	},
	{
		name: 'Abhishek Khandelwal',
		class: 'XII-D',
		house: 'Patel House',
		subject: 'Commerce with Maths'
	},
	{
		name: 'Divyanshu Bhatnagar',
		class: 'XII-B',
		house: 'Gandhi House',
		subject: 'Non-Medical'
	},
	{
		name: 'Saransh Arora',
		class: 'XII-B',
		house: 'Shastri House',
		subject: 'Medical'
	}
]

function print_object(obj){
	for(val in obj){
		document.write("<p>"+val+" : "+obj[val]+"</p>");
	}
}

// print_object(students[0]);