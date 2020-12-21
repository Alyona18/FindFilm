
function openSForm() {
	document.getElementById("SForm").style.display = "block";
} 


function closeSForm() {
	document.getElementById("SForm").style.display = "none";
} 

function save(){
	var film = JSON.stringify({
		'poster': document.getElementById('poster').src,
		'title' : document.getElementById('title').innerHTML,
		'avg_score': document.getElementById('avg_score').innerHTML,
		'genre': document.getElementById('genre').innerHTML,
		'year': document.getElementById('year').innerHTML,
		'country': document.getElementById('country').innerHTML,
		'duration': document.getElementById('duration').innerHTML	
	});
	window.localStorage.setItem('remember', film);
}

function search(){
	if (document.getElementById('selectG').value != "s0" && document.getElementById('YearS').value != "s0") {
		var year = document.getElementById('YearS').value;
		var genre = document.getElementById('selectG').value;
		const data = JSON.stringify({
			'year': year,
			'genre': genre					
		});
		console.log(data);
		callResearch(data);
	}
	if (document.getElementById('selectG').value != "s0" && document.getElementById('YearS').value == "s0") {
		var genre = document.getElementById('selectG').value;
		const data = JSON.stringify({
			'genre': genre					
		});
		console.log(data);
		callResearchG(data);
	}
	if (document.getElementById('selectG').value == "s0" && document.getElementById('YearS').value != "s0") {
		var year = document.getElementById('YearS').value;
		const data = JSON.stringify({
			'year': year				
		});
		console.log(data);
		callResearchY(data);
	}
}

function SendSupport(data){
jQuery.ajax({ 
     url: 'https://stwv6xelj2.execute-api.us-east-1.amazonaws.com/PROD/users/support', 
     type: 'POST', 
     contentType: 'application/json',
     data: data,
     dataType: 'json',
     timeout: 5000,
     success: function(data) { 
		try{
			document.getElementById('support').innerHTML = "succes";			
		} catch {
			console.log("(");
		}	
	} 
})

}

function support(){
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
    var email = document.getElementById('Semail').value;
	if(email.match(mailformat)) {  
		if (document.getElementById('message').value != ""){
			var message = document.getElementById('message').value;
			var request = JSON.stringify({
				'email': email,
				'message': message		
			});
			console.log(request);
			SendSupport(request);
			closeSForm();
       } else {  
           alert("Message is empty");  
       }
	} else {alert("You have entered an invalid email address!");}	
}