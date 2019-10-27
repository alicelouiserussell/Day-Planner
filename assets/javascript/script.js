var currentDate = $("#currentDay");
var currentHour = moment().format("HH");
var saveButton = $(".save");

var hoursArray = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var plansArray = [];

currentDate.text(moment().format("dddd, MMMM Do YYYY"));

$(document).ready(function() {
    renderSavedPlans();
    for (var i = 0; i < hoursArray.length; i++) {
        var hour = parseInt(hoursArray[i]);
        var time = parseInt(currentHour);

        if (hour === time){
           $(".hour" + hour).addClass("bg-muted border-warning");
        } else if (hour < time){
            $(".hour" + hour).addClass("bg-secondary");
        } else if (hour > time) {
            $(".hour" + hour).addClass("bg-success")
        };
    };
});

function renderSavedPlans(){
    var pulledPlans = localStorage.getItem("plans");
        pulledPlans= JSON.parse(pulledPlans); 
        console.log(pulledPlans);
        
    pulledPlans.forEach(function(plan){
        console.log(plan.hour);
        console.log(plan.plans);
        console.log($("#input" + plan.hour));
        var setHour = $("#input" + plan.hour);
        setHour.empty();
        setHour.append(plan.plans);
    });
};

$(".container").on("click", ".save", function(event){
    event.preventDefault();
    alert("hello!");
    var buttonNumber = $(this).attr("data-time");
    console.log(this);
    console.log(buttonNumber);

    var userInput = $("#input" + buttonNumber).val();
    console.log(userInput);

    plansArray.push({hour: buttonNumber, plans: userInput});
    console.log(plansArray);

    var plansJSON = JSON.stringify(plansArray);
    localStorage.setItem("plans", plansJSON);
});




















