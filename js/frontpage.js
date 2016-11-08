// mainPage.js
$(document).ready(function() {

    // handle main article
    $.getJSON('resources/fullJSON.json', function(data) {
        var jsonF = JSON.parse(JSON.stringify(data));
        var jsonFArticles = JSON.parse(JSON.stringify(jsonF.article));

        if (jsonFArticles.length % 3 == 0) {
            for (var i=0; i < jsonFArticles.length; i++) {
                if (i%3==0) {
                    $('#column1').append('<a href="html/article_page.html?article=' + jsonFArticles[i].file + '" style="color: #333; text-decoration: none;"> <div class="article"><h4>' + jsonFArticles[i].title + '</h4>' +
                        '<p class="author">' + jsonFArticles[i].author + ' | ' + '<font color="grey">' + jsonFArticles[i].date + '</font>' + '</p>' + '<p>' + jsonFArticles[i].description + '</p>' +
                    '</div> </a>')
                }
                else if (i%3==1) {
                    $('#column2').append('<a href="html/article_page.html?article=' + jsonFArticles[i].file + '" style="color: #333; text-decoration: none;"> <div class="article"><h4>' + jsonFArticles[i].title + '</h4>' +
                        '<p class="author">' + jsonFArticles[i].author + ' | ' + '<font color="grey">' + jsonFArticles[i].date + '</font>' + '</p>' + '<p>' + jsonFArticles[i].description + '</p>' +
                    '</div>')
                }
                else {
                    $('#column3').append('<a href="html/article_page.html?article=' + jsonFArticles[i].file + '" style="color: #333; text-decoration: none;"> <div class="article"><h4>' + jsonFArticles[i].title + '</h4>' +
                        '<p class="author">' + jsonFArticles[i].author + ' | ' + '<font color="grey">' + jsonFArticles[i].date + '</font>' + '</p>' + '<p>' + jsonFArticles[i].description + '</p>' +
                    '</div>')
                }
            }
        }
        else if (jsonFArticles.length % 3 == 1) {
            $("#everythingElse").prepend('<a href=index.html style="color: #333; text-decoration: none;"> <div class="jumbotron"><h2>' + jsonFArticles[0].title + '</h2>' +
                '<p class="author">' + jsonFArticles[0].author + ' | ' + '<font color="grey"> ' + jsonFArticles[0].date + '</font></p>' +
                '<p>' + jsonFArticles[0].description + '</p>' +
                '<a href="html/article_page.html?article=' + jsonFArticles[0].file + '"></a>'
            ).click(function() {
                window.location = $(this).find("a:first").attr("href");
                return false;
            });

            for (var i=1; i < jsonFArticles.length; i++) {
                if (i%3==1) {
                    $('#column1').append('<a href=index.html style="color: #333; text-decoration: none;"> <div class="article"><h4>' + jsonFArticles[i].title + '</h4>' +
                        '<p class="author">' + jsonFArticles[i].author + ' | ' + '<font color="grey">' + jsonFArticles[i].date + '</font>' + '</p>' + '<p>' + jsonFArticles[i].description + '</p>' +
                    '</div> </a>')
                }
                else if (i%3==2) {
                    $('#column2').append('<a href=index.html style="color: #333; text-decoration: none;"> <div class="article"><h4>' + jsonFArticles[i].title + '</h4>' +
                        '<p class="author">' + jsonFArticles[i].author + ' | ' + '<font color="grey">' + jsonFArticles[i].date + '</font>' + '</p>' + '<p>' + jsonFArticles[i].description + '</p>' +
                    '</div>')
                }
                else {
                    $('#column3').append('<a href=index.html style="color: #333; text-decoration: none;"> <div class="article"><h4>' + jsonFArticles[i].title + '</h4>' +
                        '<p class="author">' + jsonFArticles[i].author + ' | ' + '<font color="grey">' + jsonFArticles[i].date + '</font>' + '</p>' + '<p>' + jsonFArticles[i].description + '</p>' +
                    '</div>')
                }
            }

        }
        else {
            $("#everythingElse").prepend('<a href=index.html style="color: #333; text-decoration: none;"> <div class="jumbotron"><h2>' + jsonFArticles[0].title + '</h2>' +
                '<p class="author">' + jsonFArticles[0].author + ' | ' + '<font color="grey"> ' + jsonFArticles[0].date + '</font></p>' +
                '<p>' + jsonFArticles[0].description + '</p>' +
                '<a href="html/article_page.html?article=' + jsonFArticles[0].file + '"></a>'
            ).click(function() {
                window.location = $(this).find("a:first").attr("href");
                return false;
            });

            for (var i=1; i < jsonFArticles.length; i++) {
                if (i%3==1 && i!=jsonFArticles.length-1) {
                    $('#column1').append('<a href=index.html style="color: #333; text-decoration: none;"> <div class="article"><h4>' + jsonFArticles[i].title + '</h4>' +
                        '<p class="author">' + jsonFArticles[i].author + ' | ' + '<font color="grey">' + jsonFArticles[i].date + '</font>' + '</p>' + '<p>' + jsonFArticles[i].description + '</p>' +
                    '</div> </a>')
                }
                else if (i%3==2) {
                    $('#column2').append('<a href=index.html style="color: #333; text-decoration: none;"> <div class="article"><h4>' + jsonFArticles[i].title + '</h4>' +
                        '<p class="author">' + jsonFArticles[i].author + ' | ' + '<font color="grey">' + jsonFArticles[i].date + '</font>' + '</p>' + '<p>' + jsonFArticles[i].description + '</p>' +
                    '</div>')
                }
                else if (i%3==0){
                    $('#column3').append('<a href=index.html style="color: #333; text-decoration: none;"> <div class="article"><h4>' + jsonFArticles[i].title + '</h4>' +
                        '<p class="author">' + jsonFArticles[i].author + ' | ' + '<font color="grey">' + jsonFArticles[i].date + '</font>' + '</p>' + '<p>' + jsonFArticles[i].description + '</p>' +
                    '</div>')
                }
            }

            $("#everythingElse").append('<a href=index.html style="color: #333; text-decoration: none;"> <div class="jumbotron"><h2>' + jsonFArticles[jsonFArticles.length-1].title + '</h2>' +
                '<p class="author">' + jsonFArticles[jsonFArticles.length-1].author + ' | ' + '<font color="grey"> ' + jsonFArticles[jsonFArticles.length-1].date + '</font></p>' +
                '<p>' + jsonFArticles[jsonFArticles.length-1].description + '</p>' +
                '<a href="html/article_page.html?article=' + jsonFArticles[jsonFArticles.length-1].file + '"></a>'
            ).click(function() {
                window.location = $(this).find("a:first").attr("href");
                return false;
            });
        }
    });
});

function pullFile(path, cb) {
    $.getJSON(path, function(data) {
        cb(data);
    });
}
