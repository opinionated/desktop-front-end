// mainPage.js
$(document).ready(function() {

	pullFile("resources/exJson/exMain.json",function(data){
		//handle main article
		pullFile("resources/exJson/" + data.articles.main, function(mainArticle){
			console.log(mainArticle);
			$('div .bigArticle').append('<div class="bigThumb"><img src="'+ mainArticle.article.image +'" alt="" height="140px">' +
										'<p class="author">' + mainArticle.article.imageCaption + '</p></div>' +
										'<h2>'+ mainArticle.article.title +'</h2>' +
										'<p class="author">' + mainArticle.article.author + '</p>' +
										'<p>' + mainArticle.article.description + '</p>'
			);
		});
		//handle politics articles
		for (var i = 0; i < data.articles.politics.length; i++) {
		    pullFile("resources/exJson/" + data.articles.politics[i], function(Article){
		    	$('div .pcolumn').append('<div class="miniPArticle">' +
											'<h3>' + Article.article.title + '</h3>' +
											'<p class="author">' + Article.article.author + '</p>' +
											'<p>' + Article.article.description + '</p>' +
										'</div>'
				);
		    });
		}
		//handle opinion articles
		for (var i = 0; i < data.articles.opinion.length; i++) {
		    pullFile("resources/exJson/" + data.articles.opinion[i], function(Article){
		    	$('div .ocolumn').append('<div class="miniOArticle">' +
											'<h3>' + Article.article.title + '</h3>' +
											'<p class="author">' + Article.article.author + '</p>' +
											'<p>' + Article.article.description + '</p>' +
										'</div>'
				);
		    });
		}
		//handle sports articles
		for (var i = 0; i < data.articles.opinion.length; i++) {
		    pullFile("resources/exJson/" + data.articles.opinion[i], function(Article){
		    	$('div .scolumn').append('<div class="miniSArticle">' +
											'<h3>' + Article.article.title + '</h3>' +
											'<p class="author">' + Article.article.author + '</p>' +
											'<p>' + Article.article.description + '</p>' +
										'</div>'
				);
		    });
		}
	});

});

function pullFile(path, cb) {
	$.getJSON( path , function( data ) {
		cb(data);
	});
}	