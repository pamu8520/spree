

function myDate() {
    document.getElementById('demo').innerHTML = Date();
}



function myDateProper() {
    temp = Date().split(' ');
    console.log(temp);
    day = getDay(temp[0]);

    month = getMonth(temp[1]);

    date = day + ", " + month + ", " + temp[3];

    document.getElementById('demo').innerHTML = date;
}

function getDay(d) {
    switch (d) {
        case "Mon":
            return("Monday");
        case "Tue":
            return("Tuesday");
        case "Wed":
            return("Wednesday");
        case "Thu":
            return("Thursday");
        case "Fri":
            return("Friday");
        case "Sat":
            return("Saturday");
        case "Sun":
            return("Sunday");
        break;
    }
}


function getMonth(m) {
    switch (m) {
        case "Jan":
            return("January");
        case "Feb":
            return("February");
        case "Mar":
            return("Mars");
        case "Apr":
            return("April");
        case "May":
            return("May");
        case "June":
            return("June");
        case "July":
            return("July");
        case "Aug":
            return("August");
        case "Sep":
            return("September");
        case "Mar":
            return("Mars");
        case "Apr":
            return("April");
        case "May":
            return("May");
        break;
    }
}

function feedBack() {
    name = document.getElementById("intxt").value;

    if (name != "") {
        document.getElementById("namn").innerHTML = name + " is a beautiful name";
    } else {
        document.getElementById("namn").innerHTML = '<img src="./img/Bear.jpg"> ';

    }
}


function change() {

    textString = document.getElementById("intxt").value;

    if (document.getElementById("No1")) {
        document.getElementById("No1").setAttribute("id", "No2");
           }    else {
        document.getElementById("No2").setAttribute("id", "No1");
    }
}
