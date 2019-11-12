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

/* Шестое задание

const  userValueMonth = prompt("Plese enter your number month");
const  userNumberMonth  = +userValueMonth;

switch (userNumberMonth) {

    case 1:
        console.log("January");
        break;

    case 2:
        console.log("February");
        break;

    case 3:
        console.log("March");
        break;

    case 4:
        console.log("April");
        break;

    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;

    case 7:
        console.log("July");
        break;

    case 8:
        console.log("August");
        break;

    case 9:
        console.log("September");
        break;

    case 10:
        console.log("October");
        break;

    case 11:
        console.log("November");
        break;

    case 12:
        console.log("December");
        break;

     default:
        console.log("Enter number 1 to 12");
        break;

}


*/



/* СЕДЬМОЕ ЗАДАНИЕ

const userFirstValue = prompt("Please input first value");
const mark  = prompt("Please input operation")
const userSecondValue = prompt("Please input second value");


const userFirstNumber=+userFirstValue;
const userSecondNumber=+userSecondValue;






switch (mark) {

    case "+":
        console.log(sum(userFirstNumber, userSecondNumber));
        break;


    case "-" :
        console.log(sab(userFirstNumber, userSecondNumber));
        break;

    case "*" :
        console.log(multipl(userFirstNumber, userSecondNumber));
        break;

    case "/" :
        console.log(divis(userFirstNumber, userSecondNumber));
        break;

    default:
        console.log("Enter number");
        break;
}

function sum  ( firstNumber , secondNumber) {

    return +firstNumber +  +secondNumber;


}


function sab  ( firstNumber , secondNumber) {

    return firstNumber -secondNumber ;


}
function multipl  ( firstNumber , secondNumber) {

    return firstNumber * secondNumber ;


}
function divis  ( firstNumber , secondNumber) {

    if (secondNumber == 0){
         return  console.log("cannot be divided by zero");
    }else{
            return firstNumber / secondNumber ;
            console.log("sa");
         }


}
*/






