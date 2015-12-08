$(document).ready(function() {
	//GET ARTICLE


	var query = parseQuery(document.location.search);
	var article_name = query["article"];

	pullFile("../resources/exJson/" + article_name, function(article){

		$('#article-header').append('<h2>'+ article.article.title +'</h2>' +
									'<p class="author">' + article.article.author  + " | " +
 									'<font color="grey">' + article.article.date + '</font>' + '</p>');

		if (article.article.template == 'top') {
			$('#article-photo-wrapper').addClass("top_template");
		}

		if (article.article.template == "left" || article.article.template == "right") {
			$('#article-photo').append('<img src="' + article.article.image + '" style="width:400px">');
		} else if (article.article.template == "top") {
			$('#article-photo').append('<img src="' + article.article.image + '" style="width:900px">');
		}

		$('#article-photo-caption').append(article.article.imageCaption);
		$('#article-body').append('<br><p class="description">' + article.article.description + '</p>' +
								'<p>' + article.article.body + '</p>'
		);


		if(article.article.template == "right"){
			$('#article-photo-wrapper').addClass("right-template");
		}
		if(article.article.template == "left"){
			$('#article-photo-wrapper').addClass("left-template");
		}



		populateSidebar(article.article.similarArticles, article_name);
	});
	
});

function populateSidebar(files, root){

	for(var i=0; i<files.length; i++){
		pullFile("../resources/exJson/" + files[i], function(Article){
			$("#sidebar-wrapper .sidebar-nav").append('<li class="sidebar-stub">' +
														'<img class="sidebarThumb" src="'+ Article.article.image +'" alt="" height="70px" width="70px">' +
								                		'<a href="related_article_page.html?article='+Article.article.file+'&main_article=' + root + '">'+
								                		'<div class="stubTitle">' + Article.article.title + '</div>' +
								                		'<div class="stubAuthor">' + Article.article.author + '</div>' +
								                		'<div class="stubAuthor">' + Article.article.date + '</div>' +
								                		'</a>' +
								                		'<p class="stubDesc"><em>'+ Article.article.description +'</em></p>' +
													'</li>'
			);
		});
	}
}
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