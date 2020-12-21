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
 
callAjax();

