var currentDate = $("#currentDay");
var currentTime = moment().format("hh:mm a");
var saveButton = $(".save");

var hoursArray = []



currentDate.text(moment().format("dddd, MMMM Do YYYY"));



$(".container").on("click", ".save", function(event){
    event.preventDefault();
    alert("hello!");
    var buttonNumber = $(this).attr("data-time");
    console.log(this);
    console.log(buttonNumber);
    
    var buttonJSON = JSON.stringify(buttonNumber);
    localStorage.setItem("buttonNum", buttonJSON);
});

console.log(currentTime);


function loadPage() {

}

// user clicks "save"
    // grab information from user:
            // 1. input text
            // 2. hour of input (data-time)
    // save information locally



// page loads
    // function displays stored information on page
        // pulls from local storage 
        // appends to page 



















