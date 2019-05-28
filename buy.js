function buy()
{
	var name = document.forms["message"]["name"].value;
	var email= document.forms["message"]["email"].value;
	var address = document.forms["message"]["address"].value;
	var phone = document.forms["message"]["phone"].value;
	var message = document.forms["message"]["message"].value;
	if(name == "" || email == "" || address == "" || phone == "")
	{
		alert ("Please donot leave the field empty.");
		
	}
	else
	{
		alert ("You will receive a call for verification of product and will be delivered in an hour.");
		
	}
}