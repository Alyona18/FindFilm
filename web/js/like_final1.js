function AddFilmR(data){
jQuery.ajax({ 
     url: 'https://stwv6xelj2.execute-api.us-east-1.amazonaws.com/PROD/users', 
     type: 'POST', 
     contentType: 'application/json',
     data: data,
     dataType: 'json',
     timeout: 5000,
     success: function(data) { 
		try{
			var re = JSON.stringify({
				'token': JSON.parse(request).token				
			});
			favore(re);
		} catch {
			console.log("(");
		}	
	} 
})

}

function AddFilm(){
	var film = document.getElementById("poster").src;
	const data = JSON.stringify({
			"token": JSON.parse(request).token,
			"film": film
		});
	AddFilmR(data);
}

function favore(data){
jQuery.ajax({ 
     url: 'https://stwv6xelj2.execute-api.us-east-1.amazonaws.com/PROD/users/favorites', 
     type: 'POST', 
     contentType: 'text/plain',
     data: data,
     dataType: 'json',
     timeout: 5000,
     success: function(data) { 
		try{
			var film_list = data;
			var str = film_list.films_favor;
			var film_array = str.split(',');
			favor_list = film_array;
			for (var i = 0; i < 3; i++){
				var id = 'poster' + i; 
				document.getElementById(id).src = film_array[i];
			} 
		}catch {
			console.log('error');
		}
	} 
})
}

function Next(){
	var array = favor_list;
	var poster = document.getElementById("poster0").src;
	var i = array.indexOf(poster);
	if (i + 5 < array.length - 1){
		for (var j = (i + 3); j < (i + 6); j++){
			var id = 'poster' + (j-i-3);
			if (array[j]){
				document.getElementById(id).src = array[j];
			} else {document.getElementById(id).src = 'img/oops.png';} 
		}
	} else {
		if (i + 4 < array.length - 1){
			for (var j = (i + 3); j < (i + 5); j++){
				var id = 'poster' + (j-i-3);
				document.getElementById(id).src = array[j];}
			document.getElementById('poster2').src = 'img/oops.png';
		} else { 
			if (i + 3 < array.length - 1){
				document.getElementById('poster0').src = array[i+3];
				document.getElementById('poster1').src = 'img/oops.png';
				document.getElementById('poster2').src = 'img/oops.png';
		}}
	}
}	

function Previous(){
	var array = favor_list;
	var poster = document.getElementById('poster0').src;
	var i = array.indexOf(poster);
	
	if (i > 0 && i < array.length){
		for (var j = i-1; j > (i - 4); j--){
			var id = 'poster' + (j-i+3);
			document.getElementById(id).src = array[j];
		}
		
	}	
}

function showFilm(data){
	jQuery.ajax({ 
		url: 'https://stwv6xelj2.execute-api.us-east-1.amazonaws.com/PROD/movies', 
		type: 'POST', 
		contentType: 'application/json',
		data: data,
		dataType: 'json',
		timeout: 5000,
		success: function(data) { 
			try{
				console.log(data);
				document.getElementById("poster").src = data.poster;
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
			} catch {
			console.log("(");
		}	
	} 
})
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

var hash = window.location.hash.substr(1);//this creates an array with key ([0] element) and value ([1] element)
var token = hash.split('&').reduce(function (result, item) {
	var parts = item.split('=');
	result[parts[0]] = parts[1];
	return result;
}, {});
var jwtDecoded = parseJwt(token.id_token);
var request = JSON.stringify({
	'token': jwtDecoded.sub
	});
var favor_list = [];
favore(request);
