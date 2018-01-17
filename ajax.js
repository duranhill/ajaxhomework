$(document).ready(function(){
console.log('ready')
$(":button").on('click', function(){
	var x = $(this).data("search")
	console.log(this.id);
	var queryUrl = "http://api.giphy.com/v1/gifs/search?q="+x+"&api_key=2bzMw7ok9xld294a0TRVVQwsvc3L7PVD&limit=10";
		console.log(queryUrl);

		$.ajax({
			url: queryUrl,
			method:"GET"
		}).done(function(response){
			console.log(response.data[1,2,3].images.downsized_large.url);
			var image = $('<img>')
			image.attr('src', response.data[1].images.downsized_large.url)
			console.log('image', image);
			$('#gifContainer').append(image)
			$('body').append('<p>rating:' +response.data[9].rating+'</p>');
			$('body').append("<img src='"+response.data[0].images.downsized.url+"'>");
			$('body').append("<img src='"+response.data[0].images.downsized_medium.url+"'>");

		});


})


})