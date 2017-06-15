$('#signin').click(function(){
	var username = $('#user').val();
	var password = $('#pass').val();
	console.log(username,password);
	window.open("http://localhost:3000/index","_self");
})
