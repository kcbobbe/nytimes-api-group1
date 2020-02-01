var searchedKeyword = "obama";
var startYYYY = 2010;
var endYYYY = 2012;
​
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=" + searchedKeyword + "&begin_date=" + startYYYY + "%30%31%30%31" + "&end_date=" + endYYYY + "%30%31%30%31" + "&api-key=pbI9EpnqZmSUxGRvzfp2wSqyaAlsFYgT";
​
​
$("#button").on("click", function() {
​
$.ajax({
    url: queryURL,
    method: "GET"
    }).then(function(answer) {
    var results = (answer.response.docs);
    console.log(queryURL);
    for(var i = 1; i < results.length; i++) {
        var div = $("<div>");
        $("body").append(div);
​
        var title = $("<p>");
        title.text(i + ": " + results[i].headline.main);
        div.append(title);
​
        var section = $("<p>");
        section.text("Section: " + results[i].section_name);
        title.append(section);
​
        var date = $("<p>");
        date.text("Published: " + results[i].pub_date);
        section.append(date);
​
        var br = $("<br>");
        date.append(br);
​
        var url = $("<a href>");
        url.text(results[i].web_url);
        date.append(url);
​
        var end = $("<hr>");
        url.append(end);
    }
    
    });
});