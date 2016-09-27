// mainPage.js
$(document).ready(function() {

		//handle main article
		$.getJSON('resources/fullJSON.json', function(data) {
    		var jsonF = JSON.parse(JSON.stringify(data));
			var jsonFArticles = JSON.parse(JSON.stringify(jsonF.article))
			console.log(jsonFArticles);
			$('div.bigArticle').append('<div class="bigThumb"><img src="'+ jsonFArticles[0].image +'" alt="" height="140px">' +
										'<p class="author">' + jsonFArticles[0].imageCaption + '</p></div>' +
										'<h2>'+ jsonFArticles[0].title +'</h2>' +
										'<p class="author">' + jsonFArticles[0].author +  " | " + '<font color="grey"> ' + jsonFArticles[0].date + '</font>' + '</p>' +
										'<p>' + jsonFArticles[0].description + '</p>' +
										'<a href="html/article_page.html?article='+ jsonFArticles[0].main +'"></a>'
			).click(function () {
				window.location = $(this).find("a:first").attr("href");
				return false;
			});
			for (var i = 1; i < jsonFArticles.length; i++) {
				var col;
				if (i % 3 == 0) {
					col = 'div .pcolumn';
				}
				else if (i % 3 == 1) {
					col = 'div .ocolumn';
				}
				else {
					col = 'div .scolumn';
				}
				$(col).append('<a href="html/article_page.html?article='+ jsonFArticles[i].file +'">' +
			    			'<div class="miniPArticle">' +
							'<h3>' + jsonFArticles[i].title + '</h3>' +
							'<p class="author">' + jsonFArticles[i].author  + " | " +
	 						'<font color="grey">' + jsonFArticles[i].date + '</font>' +'</p>' +
							'<img class="miniThumb" src="'+ jsonFArticles[i].image +'" alt="" height="50px">' +
							'<p>' + jsonFArticles[i].description + '</p>' +
							'</div>' + '</a>'
				);
			}
		});
});

function pullFile(path, cb) {
	$.getJSON( path , function( data ) {
		cb(data);
	});
}
