"use struct"

const userValue = prompt("Pleas input your number");
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

}