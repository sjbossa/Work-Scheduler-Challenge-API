// Add current date for jumbotron
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var updateTime = setInterval(function () {
  var currentTime = moment().format("dddd,MMMM Do YYYY, h:mm:ss a");
  $("currentDay").text(currentTime);
}, 1000); 
  //Save Button click listener - saves text written by user in current time block to local storage
  $(".saveBtn").on("click", function () {
    //console log(this)
    var task = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
      localStorage.setItem(time, task);
        // Get items from local storage if any
        $("#1 .description").val(localStorage.getItem("1"));
        $("#2 .description").val(localStorage.getItem("2"));
        $("#3 .description").val(localStorage.getItem("3"));
        $("#4 .description").val(localStorage.getItem("4"));
        $("#5 .description").val(localStorage.getItem("5"));
        $("#6 .description").val(localStorage.getItem("6"));
        $("#7 .description").val(localStorage.getItem("7"));
        $("#8 .description").val(localStorage.getItem("8"));
        $("#9 .description").val(localStorage.getItem("9"));
        $("#10 .description").val(localStorage.getItem("10"));
        $("#11 .description").val(localStorage.getItem("11"));
        $("#12 .description").val(localStorage.getItem("12"));
        $("#13 .description").val(localStorage.getItem("13"));
        $("#14 .description").val(localStorage.getItem("14"));
        $("#15 .description").val(localStorage.getItem("15"));
        $("#16 .description").val(localStorage.getItem("16"));
        $("#17 .description").val(localStorage.getItem("17"));
        $("#18 .description").val(localStorage.getItem("18"));
        $("#19 .description").val(localStorage.getItem("19"));
        $("#20 .description").val(localStorage.getItem("20"));
        $("#21 .description").val(localStorage.getItem("21"));
        $("#22 .description").val(localStorage.getItem("22"));
        $("#23 .description").val(localStorage.getItem("23"));
        $("#24 .description").val(localStorage.getItem("24"));

  });
//double check current time/sync
function compareHour() {
  var hour = moment().hour();
  // loop over time blocks
  $(".time-block").each(function () {
      var block = $(this).attr("id");
   // console.log(typeof block);
   // console.log(type of hour);
      if (block < hour) {
          $(this).addClass("past");
          $(this).removeClass("present");
          $(this).removeClass("future");
      } else if (block == hour) {
          $(this).removeClass("past");
          $(this).addClass("present");
          $(this).removeClass("future");
      } else {
          $(this).removeClass("past");
          $(this).removeClass("present");
          $(this).addClass("future");
      }
 })};

// call the function
compareHour();
