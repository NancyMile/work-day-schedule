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
    // take the current hour and return it as integer to be compared
    //for changing backgroun color purposes
    var current_hour = moment().format("H");
    return parseInt(current_hour);
}
//function that will append the divBloks to the container
function addDiv(blockTime){
     //call change background and send the blocktime
    changebackground(blockTime);
    container.append(divBlock.clone());
}

//function check background according to the time
function changebackground(blockTime){
    var current_hour = handleDate();
    //current_hour =10;
    ///bacground color
    if(current_hour > blockTime){
        // grey bacground
        divDescription.css("background","grey");
    }else if(current_hour == blockTime){
        //red bracground
        divDescription.css("background","red");
    }else{
      //green background
      divDescription.css("background","green");
    }
}

//Defining time blocks for business hours.
//adding the hours to divTimeBlock a for  for the morning hours
for(j= 9; j<= 17; j++){
    //text with 12h format for the time colum
    var text = moment(j,"h").format("h A");
    //hour in 24 format to be compared
    var hour =parseInt(moment(j,"H").format("H"));
    divTimeBlock.text(text);
    addDiv(hour);
}

//calling handledate
setInterval(handleDate,1000);