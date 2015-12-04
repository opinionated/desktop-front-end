$(document).ready(function() {
	//GET ARTICLE


	var query = parseQuery(document.location.search);
	var article_name = query["article"];

	pullFile("../resources/exJson/" + article_name, function(article){
		console.log(article);
		$('#article-photo').append('<img src="../resources/images/' + article.article.image + '">');
		$('#article-photo-caption').append(article.article.imageCaption);

		$('#article-body').append('<h2>'+ article.article.title +'</h2>' +
									'<p class="author">' + article.article.author + '</p>' +
									'<p class="date">' + article.article.date + '</p>' +
									'<p class="description">' + article.article.description + '</p>' +
									'<p>' + article.article.body + '</p>'
		);
	});

});

function pullFile(path, cb) {
	$.getJSON( path , function( data ) {
		cb(data);
	});
}

function parseQuery(search) {

    var args = search.substring(1).split('&');

    var argsParsed = {};

    var i, arg, kvp, key, value;

    for (i=0; i < args.length; i++) {

        arg = args[i];

        if (-1 === arg.indexOf('=')) {

            argsParsed[decodeURIComponent(arg).trim()] = true;
        }
        else {

            kvp = arg.split('=');

            key = decodeURIComponent(kvp[0]).trim();

            value = decodeURIComponent(kvp[1]).trim();

            argsParsed[key] = value;
        }
    }

    return argsParsed;
}