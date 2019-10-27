var currentDate = $("#currentDay");
var currentHour = moment().format("HH");
var saveButton = $(".save");

var hoursArray = [9, 10, 11, 12, 13, 14, 15, 16, 17];



currentDate.text(moment().format("dddd, MMMM Do YYYY"));

$(document).ready(function() {
    for (var i = 0; i < hoursArray.length; i++) {
        var hour = parseInt(hoursArray[i]);
        var time = parseInt(currentHour);

        console.log(time);
        console.log(hour);
        if (hour === time){
           $(".hour" + hour).addClass("bg-success");
           console.log(hour === time);
        } else if (hour < time){
            $(".hour" + hour).addClass("bg-light");
            console.log(hour < time);
        } else if (hour > time) {
            $(".hour" + hour).addClass("bg-primary")
        };
    };

});

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



// user clicks "save"
    // grab information from user:
            // 1. input text
            // 2. hour of input (data-time)
    // save information locally



// page loads
    // function displays stored information on page
        // pulls from local storage 
        // appends to page 



















