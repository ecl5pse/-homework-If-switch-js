"use struct"

/* ПЕРВОЕ ЗАДАНИЕ


const userValue = prompt("Pleas input your number :");
const userNumber = +userValue;

if (userNumber > 0 ){
    alert( "This is a positive number.");

} else {

        if (userNumber < 0)
        {
            alert("This is a negative number.");
        }

        else {
                if (userNumber === 0)
                {
                    alert("Zero");
                }
                else {
                    alert("Enter number");
                }
        }

}*/


/* ВТОРОЕ ЗАДАНИЕ


const  userValue = prompt("Please enter your age :");
const userNumber = +userValue;

if (userNumber < 0){
    alert("incorrect age");

}else if(userNumber === 0 ){
    alert("Very good boy");

}else if(userNumber > 0 && userNumber === 120){
    alert("Good boy");
}else if (userNumber > 0) {
    alert("enter from 0 to 120");
}

*/

/* ТРЕТИЕ  ЗАДАНИЕ
const  userValue = prompt("Please enter your number:");
let userNumber = +userValue;

if(userNumber >= 0 ){
    alert(userNumber);

}else {
    userNumber=-userNumber;
    alert(userNumber);
}
*/



/* ЧЕТВЕРТОЕ ЗАДАНИЕ
const  userValueHour = prompt("Please enter your Hour :");
const  userValueMinutes = prompt("Please enter your Minutes :");
const  userValueSecond = prompt("Please enter your Second :")

const userNumberHour = +userValueHour;
const userNumberMinutes = +userValueMinutes;
const userNumberSecond = +userValueSecond;

if( userNumberHour < 24 && userNumberHour> 0 && userNumberMinutes < 60 && userNumberMinutes > 0 && userNumberSecond < 60 && userNumberSecond > 0){
    console.log("ok")
}  else {
        console.log("Please enter your number");
      }

*/

/* ПЯТОЕ ЗАДАНИЕ
const userValueX = prompt("Please enter your сoordinate X:");
const userValueY = prompt("Please enter your сoordinate Y:");

const  userCoordinateX = +userValueX;
const  userCoordinateY = +userValueY;


if ( userCoordinateX > 0 && userCoordinateY > 0   ){
    console.log("quarter I ");

} else if (userCoordinateX < 0 && userCoordinateY > 0) {
    console.log('quarter II');
} else if(userCoordinateX < 0 && userCoordinateY < 0){
    console.log('quarter III');
}else if(userCoordinateX >0 && userCoordinateY<0){
    console.log('quarter IV');
}else {
    console.log('enter the correct number');
}


*/








