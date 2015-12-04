// mainPage.js
$(document).ready(function() {
	console.log("hellow world");	
	$.getJSON( "resources/exJson/exMain.json", function( data ) {
		console.log(data)
		// var items = [];
		// $.each( data, function( key, val ) {
		// items.push( "<li id='" + key + "'>" + val + "</li>" );
		// });

		// $( "<ul/>", {
		// "class": "my-new-list",
		// html: items.join( "" )
		// }).appendTo( "body" );
	});
});
			