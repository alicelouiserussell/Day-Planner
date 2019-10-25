var currentDate = $("#currentDay");
var currentTime = moment().format("hh:mm a");
var saveButton = $(".save");

var hoursArray = [];



currentDate.text(moment().format("dddd, MMMM Do YYYY"));



$(".container").on("click", ".save", function(event){
    event.preventDefault();
    alert("hello!");
    var buttonNumber = $(this).attr("data-time");
    console.log(this);
    console.log(buttonNumber);

    var userInput = $("#input" + buttonNumber).val();

    hoursArray.push(buttonNumber);
    console.log(hoursArray);

    var buttonJSON = JSON.stringify(buttonNumber);
    localStorage.setItem("buttonNum", buttonJSON);

    var inputJSON = JSON.stringify(userInput);
    localStorage.setItem("userInput", inputJSON);

    for (var i = 0; i < hoursArray.length; i++) {
        console.log(i);
        console.log(hoursArray[i]);
        var pulledButton = localStorage.getItem("buttonNum");
        pulledButton = JSON.parse(pulledButton);
        console.log(pulledButton);
        
    }

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



















