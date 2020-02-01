$(document).ready(function() {

  //come back to this and try submit
  $("#clearButton").on("click", function(e) {
    e.preventDefault();
    $("#searchTerm").val("");
    $("#numberOfRecords").val("1");
    $("#startYear").val("");
    $("#endYear").val("");
  })




  $("#searchButton").on("click", function(e) {
    e.preventDefault();
    var searchTerm = $("#searchTerm").val();
    var numberOfRecords = $("#numberOfRecords").val();
    var startYear = $("#startYear").val();
    var endYear = $("#endYear").val();
    console.log(searchTerm, numberOfRecords, startYear, endYear);
  })

})