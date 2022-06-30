var currentDay = $("#currentDay");
var container = $(".container");
//defining the block containing the time,discriptionand save btn and its classes
var divBlock = $("<div>").addClass("row");
var divTimeBlock = $("<div>").addClass("time-block col-12 col-md-2 col-lg-2");
var divDescription = $("<div>").addClass("description col-12 col-md-9 col-lg-9");
var divBtn = $("<div>").addClass("saveBtn col-12 col-md-1 col-lg-1");
//append divs time, description and btn  tothe divBlock
divBlock.append(divTimeBlock);
divBlock.append(divDescription);
divBlock.append(divBtn);

// function handle date to be displayed on header
function handleDate(){
    var now = moment().format("dddd MMMM Do YYYY hh:mm:ss a");
    currentDay.text(now);
}
//function that will append the divBloks to the container
function addDiv(){
    container.append(divBlock.clone());
}
//Defining time blocks for business hours.
//adding the hours to divTimeBlock a for  for the morning hours
for(j=9; j<=12; j++){
    if(j<12){
        var text = j+" :AM";
    }else{
        var text = j+" :PM";
    }
    divTimeBlock.text(text);
    addDiv();
}
//adding afternoon hours
for(var i = 1; i <= 5; i++){
    var text = i+" :PM";
    divTimeBlock.text(text);
    addDiv();
}

//calling handledate
setInterval(handleDate,1000);