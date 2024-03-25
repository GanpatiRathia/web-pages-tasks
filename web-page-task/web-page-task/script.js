console.log("connected");
var a = true;
function checkblank(){
	if(document.getElementById("fname").value == "") {
		alert('Please Enter Your first name');
		
	    a = false;
	}
	if(document.getElementById("lname").value == "") {
		alert('Please Enter Your lname name');
		
	    a = false;
	}
	if(document.getElementById("email").value == "") {
		alert('Please Enter Your email');
		
	    a = false;
	}
	if(document.getElementById("mobile").value == "") {
		alert('Please Enter Your mobile no.');
		
	    a = false;
	}
	if(document.getElementById("password").value == "") {
		alert('Please Enter Your password');
		
	    a = false;
	}
	if(document.getElementById("city").value == "") {
		alert('Please Enter Your city name');
		
	    a = false;
	}

	else if(a = true)
	{
		alert("Data send successfully");
	}
}