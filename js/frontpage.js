// mainPage.js
$(document).ready(function() {

    // handle main article
    $.getJSON('resources/fullJSON.json', function(data) {
        var jsonF = JSON.parse(JSON.stringify(data));
        var jsonFArticles = JSON.parse(JSON.stringify(jsonF.article));

        if (jsonFArticles.length % 3 == 0) {
            for (var i = 0; i < jsonFArticles.length; i++) {
                if (i % 3 == 0) {
                    if (jsonFArticles[i].image != "") {
                        $('#column1').append('<a href="html/article_page.html?article=' + jsonFArticles[i].file + '" style="color: #333; text-decoration: none;"> <div class="article"><h4>' + jsonFArticles[i].title + '</h4>' +
                            '<p class="author">' + jsonFArticles[i].author + ' | ' + '<font color="grey">' + jsonFArticles[i].date + '</font>' + '</p>' + '<p> <img style="float:left; margin: 5px 15px 5px 0px;" src="' + jsonFArticles[i].image + '" alt="" width="140px">' + jsonFArticles[i].description + '</p>' +
                            '</div> </a>')
                    }
                    else {
                        $('#column1').append('<a href="html/article_page.html?article=' + jsonFArticles[i].file + '" style="color: #333; text-decoration: none;"> <div class="article"><h4>' + jsonFArticles[i].title + '</h4>' +
                            '<p class="author">' + jsonFArticles[i].author + ' | ' + '<font color="grey">' + jsonFArticles[i].date + '</font>' + '</p>' + '<p>' + jsonFArticles[i].description + '</p>' +
                            '</div> </a>')
                    }

                }
                else if (i%3==1) {
                    if (jsonFArticles[i].image != "") {
                        $('#column2').append('<a href="html/article_page.html?article=' + jsonFArticles[i].file + '" style="color: #333; text-decoration: none;"> <div class="article"><h4>' + jsonFArticles[i].title + '</h4>' +
                            '<p class="author">' + jsonFArticles[i].author + ' | ' + '<font color="grey">' + jsonFArticles[i].date + '</font>' + '</p>' + '<p> <img style="float:left; margin: 5px 15px 5px 0px;" src="' + jsonFArticles[i].image + '" alt="" width="140px">' + jsonFArticles[i].description + '</p>' +
                            '</div> </a>')
                    }
                    else {
                        $('#column2').append('<a href="html/article_page.html?article=' + jsonFArticles[i].file + '" style="color: #333; text-decoration: none;"> <div class="article"><h4>' + jsonFArticles[i].title + '</h4>' +
                            '<p class="author">' + jsonFArticles[i].author + ' | ' + '<font color="grey">' + jsonFArticles[i].date + '</font>' + '</p>' + '<p>' + jsonFArticles[i].description + '</p>' +
                            '</div> </a>')
                    }
                }
                else {
                    if (jsonFArticles[i].image != "") {
                        $('#column3').append('<a href="html/article_page.html?article=' + jsonFArticles[i].file + '" style="color: #333; text-decoration: none;"> <div class="article"><h4>' + jsonFArticles[i].title + '</h4>' +
                            '<p class="author">' + jsonFArticles[i].author + ' | ' + '<font color="grey">' + jsonFArticles[i].date + '</font>' + '</p>' + '<p> <img style="float:left; margin: 5px 15px 5px 0px;" src="' + jsonFArticles[i].image + '" alt="" width="140px">' + jsonFArticles[i].description + '</p>' +
                            '</div> </a>')
                    }
                    else {
                        $('#column3').append('<a href="html/article_page.html?article=' + jsonFArticles[i].file + '" style="color: #333; text-decoration: none;"> <div class="article"><h4>' + jsonFArticles[i].title + '</h4>' +
                            '<p class="author">' + jsonFArticles[i].author + ' | ' + '<font color="grey">' + jsonFArticles[i].date + '</font>' + '</p>' + '<p>' + jsonFArticles[i].description + '</p>' +
                            '</div> </a>')
                    }
                }
            }
        }
        else if (jsonFArticles.length % 3 == 1) {
            if (jsonFArticles[0].image != "") {
                $("#everythingElse").prepend('<div class="jumbotron"><h2>' + jsonFArticles[0].title + '</h2>' +
                    '<p class="author">' + jsonFArticles[0].author + ' | ' + '<font color="grey"> ' + jsonFArticles[0].date + '</font></p>' +
                    '<p class="body"> <img style="float:right; margin: 5px 5px 5px 15px;"" src="' + jsonFArticles[0].image + '" alt="" height="225px">' +
                        jsonFArticles[0].description + '</p> <a href="html/article_page.html?article=' + jsonFArticles[0].file + '" style="color: #333; text-decoration: none;"> </a>'
                ).click(function() {
                    window.location = $(this).find("a:first").attr("href");
                    return false;
                });
            }
            else {
                $("#everythingElse").prepend('<a href=index.html style="color: #333; text-decoration: none;"> <div class="jumbotron"><h2>' + jsonFArticles[0].title + '</h2>' +
                    '<p class="author">' + jsonFArticles[0].author + ' | ' + '<font color="grey"> ' + jsonFArticles[0].date + '</font></p>' +
                    '<p>' + jsonFArticles[0].description + '</p> </a>'
                ).click(function() {
                    window.location = $(this).find("a:first").attr("href");
                    return false;
                });
            }

            for (var i = 1; i < jsonFArticles.length; i++) {
                if (i % 3 == 0) {
                    if (jsonFArticles[i].image != "") {
                        $('#column1').append('<a href="html/article_page.html?article=' + jsonFArticles[i].file + '" style="color: #333; text-decoration: none;"> <div class="article"><h4>' + jsonFArticles[i].title + '</h4>' +
                            '<p class="author">' + jsonFArticles[i].author + ' | ' + '<font color="grey">' + jsonFArticles[i].date + '</font>' + '</p>' + '<p> <img style="float:left; margin: 5px 15px 5px 0px;" src="' + jsonFArticles[i].image + '" alt="" width="140px">' + jsonFArticles[i].description + '</p>' +
                            '</div> </a>')
                    }
                    else {
                        $('#column1').append('<a href="html/article_page.html?article=' + jsonFArticles[i].file + '" style="color: #333; text-decoration: none;"> <div class="article"><h4>' + jsonFArticles[i].title + '</h4>' +
                            '<p class="author">' + jsonFArticles[i].author + ' | ' + '<font color="grey">' + jsonFArticles[i].date + '</font>' + '</p>' + '<p>' + jsonFArticles[i].description + '</p>' +
                            '</div> </a>')
                    }

                }
                else if (i%3==1) {
                    if (jsonFArticles[i].image != "") {
                        $('#column2').append('<a href="html/article_page.html?article=' + jsonFArticles[i].file + '" style="color: #333; text-decoration: none;"> <div class="article"><h4>' + jsonFArticles[i].title + '</h4>' +
                            '<p class="author">' + jsonFArticles[i].author + ' | ' + '<font color="grey">' + jsonFArticles[i].date + '</font>' + '</p>' + '<p> <img style="float:left; margin: 5px 15px 5px 0px;" src="' + jsonFArticles[i].image + '" alt="" width="140px">' + jsonFArticles[i].description + '</p>' +
                            '</div> </a>')
                    }
                    else {
                        $('#column2').append('<a href="html/article_page.html?article=' + jsonFArticles[i].file + '" style="color: #333; text-decoration: none;"> <div class="article"><h4>' + jsonFArticles[i].title + '</h4>' +
                            '<p class="author">' + jsonFArticles[i].author + ' | ' + '<font color="grey">' + jsonFArticles[i].date + '</font>' + '</p>' + '<p>' + jsonFArticles[i].description + '</p>' +
                            '</div> </a>')
                    }
                }
                else {
                    if (jsonFArticles[i].image != "") {
                        $('#column3').append('<a href="html/article_page.html?article=' + jsonFArticles[i].file + '" style="color: #333; text-decoration: none;"> <div class="article"><h4>' + jsonFArticles[i].title + '</h4>' +
                            '<p class="author">' + jsonFArticles[i].author + ' | ' + '<font color="grey">' + jsonFArticles[i].date + '</font>' + '</p>' + '<p> <img style="float:left; margin: 5px 15px 5px 0px;" src="' + jsonFArticles[i].image + '" alt="" width="140px">' + jsonFArticles[i].description + '</p>' +
                            '</div> </a>')
                    }
                    else {
                        $('#column3').append('<a href="html/article_page.html?article=' + jsonFArticles[i].file + '" style="color: #333; text-decoration: none;"> <div class="article"><h4>' + jsonFArticles[i].title + '</h4>' +
                            '<p class="author">' + jsonFArticles[i].author + ' | ' + '<font color="grey">' + jsonFArticles[i].date + '</font>' + '</p>' + '<p>' + jsonFArticles[i].description + '</p>' +
                            '</div> </a>')
                    }
                }
            }

        }
        else {
            if (jsonFArticles[0].image != "") {
                $("#everythingElse").prepend('<a href=index.html style="color: #333; text-decoration: none;"> <div class="jumbotron"><h2>' + jsonFArticles[0].title + '</h2>' +
                    '<p class="author">' + jsonFArticles[0].author + ' | ' + '<font color="grey"> ' + jsonFArticles[0].date + '</font></p>' +
                    '<p> <img style="float:center;"style="float:left; margin: 5px 15px 5px 0px;"src="' + jsonFArticles[i].image + '" alt="" width="140px">' + jsonFArticles[0].description + '</p>' +
                    '<a href="html/article_page.html?article=' + jsonFArticles[0].file + '"></a>'
                ).click(function() {
                    window.location = $(this).find("a:first").attr("href");
                    return false;
                });
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
            }

            for (var i=1; i < jsonFArticles.length; i++) {
                if (i % 3 == 0) {
                    if (jsonFArticles[i].image != "") {
                        $('#column1').append('<a href="html/article_page.html?article=' + jsonFArticles[i].file + '" style="color: #333; text-decoration: none;"> <div class="article"><h4>' + jsonFArticles[i].title + '</h4>' +
                            '<p class="author">' + jsonFArticles[i].author + ' | ' + '<font color="grey">' + jsonFArticles[i].date + '</font>' + '</p>' + '<p> <img style="float:left; margin: 5px 15px 5px 0px;" src="' + jsonFArticles[i].image + '" alt="" width="140px">' + jsonFArticles[i].description + '</p>' +
                            '</div> </a>')
                    }
                    else {
                        $('#column1').append('<a href="html/article_page.html?article=' + jsonFArticles[i].file + '" style="color: #333; text-decoration: none;"> <div class="article"><h4>' + jsonFArticles[i].title + '</h4>' +
                            '<p class="author">' + jsonFArticles[i].author + ' | ' + '<font color="grey">' + jsonFArticles[i].date + '</font>' + '</p>' + '<p>' + jsonFArticles[i].description + '</p>' +
                            '</div> </a>')
                    }

                }
                else if (i%3==1) {
                    if (jsonFArticles[i].image != "") {
                        $('#column2').append('<a href="html/article_page.html?article=' + jsonFArticles[i].file + '" style="color: #333; text-decoration: none;"> <div class="article"><h4>' + jsonFArticles[i].title + '</h4>' +
                            '<p class="author">' + jsonFArticles[i].author + ' | ' + '<font color="grey">' + jsonFArticles[i].date + '</font>' + '</p>' + '<p> <img style="float:left; margin: 5px 15px 5px 0px;" src="' + jsonFArticles[i].image + '" alt="" width="140px">' + jsonFArticles[i].description + '</p>' +
                            '</div> </a>')
                    }
                    else {
                        $('#column2').append('<a href="html/article_page.html?article=' + jsonFArticles[i].file + '" style="color: #333; text-decoration: none;"> <div class="article"><h4>' + jsonFArticles[i].title + '</h4>' +
                            '<p class="author">' + jsonFArticles[i].author + ' | ' + '<font color="grey">' + jsonFArticles[i].date + '</font>' + '</p>' + '<p>' + jsonFArticles[i].description + '</p>' +
                            '</div> </a>')
                    }
                }
                else {
                    if (jsonFArticles[i].image != "") {
                        $('#column3').append('<a href="html/article_page.html?article=' + jsonFArticles[i].file + '" style="color: #333; text-decoration: none;"> <div class="article"><h4>' + jsonFArticles[i].title + '</h4>' +
                            '<p class="author">' + jsonFArticles[i].author + ' | ' + '<font color="grey">' + jsonFArticles[i].date + '</font>' + '</p>' + '<p> <img style="float:left; margin: 5px 15px 5px 0px;" src="' + jsonFArticles[i].image + '" alt="" width="140px">' + jsonFArticles[i].description + '</p>' +
                            '</div> </a>')
                    }
                    else {
                        $('#column3').append('<a href="html/article_page.html?article=' + jsonFArticles[i].file + '" style="color: #333; text-decoration: none;"> <div class="article"><h4>' + jsonFArticles[i].title + '</h4>' +
                            '<p class="author">' + jsonFArticles[i].author + ' | ' + '<font color="grey">' + jsonFArticles[i].date + '</font>' + '</p>' + '<p>' + jsonFArticles[i].description + '</p>' +
                            '</div> </a>')
                    }
                }
            }

            if (jsonFArticles[jsonFArticles.length].image != "") {
                $("#everythingElse").append('<a href=index.html style="color: #333; text-decoration: none;"> <div class="jumbotron"><h2>' + jsonFArticles[jsonFArticles.length].title + '</h2>' +
                    '<p class="author">' + jsonFArticles[jsonFArticles.length].author + ' | ' + '<font color="grey"> ' + jsonFArticles[jsonFArticles.length].date + '</font></p>' +
                    '<p> <img style="float:center;"style="float:left; margin: 5px 15px 5px 0px;" src="' + jsonFArticles[jsonFArticles.length].image + '" alt="" width="140px">' + jsonFArticles[jsonFArticles.length].description + '</p>' +
                    '<a href="html/article_page.html?article=' + jsonFArticles[jsonFArticles.length].file + '"></a>'
                ).click(function() {
                    window.location = $(this).find("a:first").attr("href");
                    return false;
                });
            }
            else {
                $("#everythingElse").append('<a href=index.html style="color: #333; text-decoration: none;"> <div class="jumbotron"><h2>' + jsonFArticles[jsonFArticles.length].title + '</h2>' +
                    '<p class="author">' + jsonFArticles[jsonFArticles.length].author + ' | ' + '<font color="grey"> ' + jsonFArticles[jsonFArticles.length].date + '</font></p>' +
                    '<p>' + jsonFArticles[jsonFArticles.length].description + '</p>' +
                    '<a href="html/article_page.html?article=' + jsonFArticles[jsonFArticles.length].file + '"></a>'
                ).click(function() {
                    window.location = $(this).find("a:first").attr("href");
                    return false;
                });
            }
        }
    });
});

function pullFile(path, cb) {
    $.getJSON(path, function(data) {
        cb(data);
    });
}
