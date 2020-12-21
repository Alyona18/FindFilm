function openSForm() {
	document.getElementById("SForm").style.display = "block";
} 

function closeSForm() {
	document.getElementById("SForm").style.display = "none";
} 
		
function dislike() {
	document.getElementById("like").style.display = "none";
	document.getElementById("nolike").style.display = "block";
		
}
		
function like() {
	document.getElementById("like").style.display = "block";
	document.getElementById("nolike").style.display = "none";			
}

function callAjax(data){
jQuery.ajax({ 
     url: 'https://stwv6xelj2.execute-api.us-east-1.amazonaws.com/PROD', 
     type: 'GET', 
     contentType: 'text/plain',
     data: data,
     dataType: 'json',
     timeout: 5000,
     success: function(data) { 
		document.getElementById("poster").src = data.poster;
		console.log(data.id);
		const $elemT = document.querySelector('#title');
		$elemT.textContent = data.title;
		const $elemG = document.querySelector('#genre');
		$elemG.textContent = data.genre;
		const $elemY = document.querySelector('#year');
		$elemY.textContent = data.year;
		const $elemC = document.querySelector('#country');
		$elemC.textContent = data.country;
		const $elemA_S = document.querySelector('#avg_score');
		$elemA_S.textContent = data.avg_vote;
		const $elemD = document.querySelector('#duration');
		$elemD.textContent = data.duration;
		console.log(data);		
	} 
})

}

function show0(){
	var a = JSON.stringify({
		'poster' : document.getElementById('poster0').src
	});
	showFilm(a);
}

function show1(){
	var a = JSON.stringify({
		'poster' : document.getElementById('poster1').src
	});
	showFilm(a);
}
			
function show2(){
	var a = JSON.stringify({
		'poster' : document.getElementById('poster2').src
	});
	showFilm(a);
}

function parseJwt(token) {
  try {
    const base64HeaderUrl = token.split('.')[0];
    const base64Header = base64HeaderUrl.replace('-', '+').replace('_', '/');
    const headerData = JSON.parse(window.atob(base64Header));
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    const dataJWT = JSON.parse(window.atob(base64));
    dataJWT.header = headerData;
    var user = JSON.stringify({
		'email': dataJWT.email,
		'username': dataJWT['cognito:username']
	});
	var name = dataJWT['cognito:username'];
	document.getElementById('k').innerHTML = 'Hello, ' + name;
	window.sessionStorage.setItem('info', user);
	return dataJWT;
  } catch (err) {
    console.log("(");
	return false;
  }
}


function search(){
	if (document.getElementById('selectG').value != "s0" && document.getElementById('YearS').value != "s0") {
		var year = document.getElementById('YearS').value;
		var genre = document.getElementById('selectG').value;
		const data = JSON.stringify({
			'year': year,
			'genre': genre					
		});
		callResearch(data);
	}
	if (document.getElementById('selectG').value != "s0" && document.getElementById('YearS').value == "s0") {
		var genre = document.getElementById('selectG').value;
		const data = JSON.stringify({
			'genre': genre					
		});
		callResearchG(data);
	}
	if (document.getElementById('selectG').value == "s0" && document.getElementById('YearS').value != "s0") {
		var year = document.getElementById('YearS').value;
		const data = JSON.stringify({
			'year': year				
		});
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
	if(document.getElementById('message').value != "") {
		var ses = JSON.parse(window.sessionStorage.getItem('info'));
		var email = ses.email;
		console.log(email);
		var message = document.getElementById('message').value;
		var request = JSON.stringify({
			'email': email,
			'message': message		
		});
		console.log(request);
		SendSupport(request);	   
		
	} else {  
        alert("Message is empty");    
    }
}	
 
	


var film_past = JSON.parse(window.localStorage.getItem('remember'));
window.localStorage.removeItem('remember');
console.log(film_past.avg_score);
document.getElementById('poster').src = film_past.poster;
document.getElementById('title').innerHTML = film_past.title;
document.getElementById('avg_score').innerHTML = film_past.avg_score;
document.getElementById('genre').innerHTML = film_past.genre;
document.getElementById('year').innerHTML = film_past.year;
document.getElementById('country').innerHTML = film_past.country;
document.getElementById('duration').innerHTML = film_past.duration;

var hash = window.location.hash.substr(1);//this creates an array with key ([0] element) and value ([1] element)
var token = hash.split('&').reduce(function (result, item) {
	var parts = item.split('=');
	result[parts[0]] = parts[1];
	return result;
}, {});
var jwtDecoded = parseJwt(token.id_token);
if(jwtDecoded)
{
	console.log(jwtDecoded);
}



