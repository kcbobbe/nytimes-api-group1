$(document).ready(function() {

  //come back to this and try submit
  $("#clearButton").on("click", function(e) {
    e.preventDefault();
    $("#resultsContainer").attr("style","display:none")
    $("#searchTerm").val("");
    $("#numberOfRecords").val("1");
    $("#startYear").val("");
    $("#endYear").val("");
  })


  $("#searchButton").on("click", function(e) {
    e.preventDefault();
    $("#resultsContainer").attr("style","display:block")
    var searchTerm = $("#searchTerm").val();
    var numberOfRecords = $("#numberOfRecords").val();
    var startYear = $("#startYear").val();
    var endYear = $("#endYear").val();
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=" + searchTerm + "&begin_date=" + startYear + "%30%31%30%31" + "&end_date=" + endYear + "%30%31%30%31" + "&offset=" + "20" +  "&api-key=pbI9EpnqZmSUxGRvzfp2wSqyaAlsFYgT";
    console.log(searchTerm, numberOfRecords, startYear, endYear);

    $.ajax({
      url: queryURL,
      method: "GET"
      }).then(function(answer) {
      var results = (answer.response.docs);
      console.log(queryURL);
      for(var i =0; i < results.length; i++) {
          var newli = $("<li>");
          newli.attr("class", "list-group-item")
          $("#articleList").append(newli);

          var title = $("<h5>");
          title.text((i + 1) + ": " + results[i].headline.main);
          newli.append(title);

          var section = $("<p>");
          section.text("Section: " + results[i].section_name);
          newli.append(section);

          var date = $("<p>");
          date.text("Published: " + results[i].pub_date);
          newli.append(date);

          // var br = $("<br>");
          // date.append(br);

          var url = $("<a>");
          url.attr("href", results[i].web_url)
          url.text(results[i].web_url);
          newli.append(url);

      }
      
      });
  })

})