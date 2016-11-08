$(document).ready(function() {
    //GET ARTICLE

    var query = parseQuery(document.location.search);
    var article_name = query["article"];

    pullFile("../resources/fullJSON.json", function(article) {
        var jsonF = JSON.parse(JSON.stringify(article));
        var jsonFArticles = JSON.parse(JSON.stringify(jsonF.article));

        for (var i = 0; i < jsonFArticles.length; i++) {
            if (jsonFArticles[i].file == article_name) {
                var thisarticle = jsonFArticles[i];
            }
        }

        document.title = thisarticle.title;

        $('#article-header').append('<h2>' + thisarticle.title + '</h2>' +
            '<p class="author">' + thisarticle.author + " | " +
            '<font color="grey">' + thisarticle.date + '</font>' + '</p>');

        if (thisarticle.template == 'top') {
            $('#article-photo-wrapper').addClass("top_template");
        }

        if (thisarticle.template == "left" || thisarticle.template == "right") {
            $('#article-photo').append('<img src="' + thisarticle.image + '" style="width:400px">');
        } else if (thisarticle.template == "top") {
            $('#article-photo').append('<img src="' + thisarticle.image + '" style="width:700px">');
        }

        $('#article-photo-caption').append(thisarticle.imageCaption);
        $('#article-body').append('<br><p class="description">' + thisarticle.description + '</p>' +
            '<p id="body">' + thisarticle.body + '</p>'
        );


        if (thisarticle.template == "right") {
            $('#article-photo-wrapper').addClass("right-template");
        }
        if (thisarticle.template == "left") {
            $('#article-photo-wrapper').addClass("left-template");
        }

        populateSidebar(thisarticle.similarArticles, article_name);
    });

});

function populateSidebar(files, root) {
    pullFile("../resources/fullJSON.json", function(Article) {
        var jsonF = JSON.parse(JSON.stringify(Article));
        var jsonFArticles = JSON.parse(JSON.stringify(jsonF.article));
        for (var i = 0; i < files.length; i++) {
            for (var j = 0; j < jsonFArticles.length; j++) {
                if (jsonFArticles[j].file == files[i]) {
                    $("#sidebar-wrapper .sidebar-nav").append('<li class="sidebar-stub">' +
                        '<img class="sidebarThumb" src="' + jsonFArticles[j].image + '" alt="" height="70px" width="70px">' +
                        '<a href="related_article_page.html?article=' + jsonFArticles[j].file + '&main_article=' + root + '">' +
                        '<div class="stubTitle">' + jsonFArticles[j].title + '</div>' +
                        '<div class="stubAuthor">' + jsonFArticles[j].author + '</div>' +
                        '<div class="stubAuthor">' + jsonFArticles[j].date + '</div>' +
                        '<p class="stubDesc"> <em>' + jsonFArticles[j].description + '</em> </p>' +
                        '</a>' + '</li>'
                    );
                }
            }
        }
    });
}

function pullFile(path, cb) {
    $.getJSON(path, function(data) {
        cb(data);
    });
}

function parseQuery(search) {
    var args = search.substring(1).split('&');
    var argsParsed = {};
    var i, arg, kvp, key, value;

    for (i = 0; i < args.length; i++) {
        arg = args[i];

        if (-1 === arg.indexOf('=')) {
            argsParsed[decodeURIComponent(arg).trim()] = true;
        } else {
            kvp = arg.split('=');
            key = decodeURIComponent(kvp[0]).trim();
            value = decodeURIComponent(kvp[1]).trim();
            argsParsed[key] = value;
        }
    }
    return argsParsed;
}
