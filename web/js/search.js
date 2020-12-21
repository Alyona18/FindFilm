function callResearch(data){
jQuery.ajax({ 
     url: 'https://stwv6xelj2.execute-api.us-east-1.amazonaws.com/PROD/movies/research', 
     type: 'POST', 
     contentType: 'application/json',
     data: data,
     dataType: 'json',
     timeout: 5000,
     success: function(data) { 
		try{
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
		console.log(data);} catch(e) {
			alert("Not_found");			
		}		
	} 
})

}

function callResearchG(data){
jQuery.ajax({ 
     url: 'https://stwv6xelj2.execute-api.us-east-1.amazonaws.com/PROD/movies/research/genre', 
     type: 'POST', 
     contentType: 'application/json',
     data: data,
     dataType: 'json',
     timeout: 5000,
     success: function(data) { 
		try{
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
		console.log(data);} catch(e) {
			alert("Not_found");			
		}		
	} 
})

}

function callResearchY(data){
jQuery.ajax({ 
     url: 'https://stwv6xelj2.execute-api.us-east-1.amazonaws.com/PROD/movies/research/year', 
     type: 'POST', 
     contentType: 'application/json',
     data: data,
     dataType: 'json',
     timeout: 5000,
     success: function(data) { 
		try{
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
		console.log(data);} catch(e) {
			alert("Not_found");			
		}		
	} 
})

}