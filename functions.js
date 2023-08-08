//named function
//anonymous function
//arrow function
//callback function
//generator function
//async await


//named function
// function voltage(current, resistance) {
//     const v = current * resistance;
//     return v;
// }
// const result = voltage(14, 300);
// console.log("RESULT IS", result, "v");
//-----------------------------------------------

//anonymous function
// var operation = function (a, b) {
//     //add 
//     return a + b;
// }

// operation = function (a, b, c, d) {
//     return a * b * c * d;
// }

//arrow function
// var operation = (a, b) => {
//     return a + b;
// }

// console.log(operation(2, 3));


//callback function

// function add(a, b) {



// }

// console.log("Working");
// add(23, 3)
// console.log("Continue working");

// const add = (a, b, callback) => {
//     const result = a + b;
//     callback(result);
// }

// function mtn(r) {
//     console.log("Calling back with result as:", r);
// }

// add(5, 4, mtn);

// const bookContent = "The easiest way to get icons on your website is with a Kit. It's your very own custom version of Font Awesome, all bundled up with only the icons, tools, and settings you need";

// function* talk() {
//     const splittedContent = bookContent.split(" ");
//     for (let i = 0; i < splittedContent.length; i++) {
//         const currentWord = splittedContent[i];
//         yield currentWord;
//     }

//     return "WE ARE DONE!!!";
// }

// const talkResponse = talk();

// let doneReading = false;

// while (!doneReading) {
//     const result = talkResponse.next();
//     const value = result.value;
//     doneReading = result.done;

//     console.log(value);
// }


// function div(x, y, cb) {
//     if (y == 0) {
//         cb("Division by zero is not allowed", null);
//         return;
//     }
//     const res = x / y;
//     cb(null, res);
// }

// div(2, 0, (error, result) => {
//     if (error) {
//         console.log("THERE WAS AN ERROR!", error);
//     } else {
//         console.log("WE HAVE A RESULT:", result);
//     }
// })


function divide(x, y) {
    const divisionPromise = new Promise((resolve, reject) => {

        if (y === 0) {
            reject("Division by zero is not allowed");
            return;
        }

        const result = x / y;
        resolve(result);

    });

    return divisionPromise;
}


async function doOperation() {
    try {
        let result = await divide(30, 3);
        console.log(result);
        result = await divide(20, 0);
        console.log(result);
        result = await divide(10, 3);
        console.log(result);
    } catch (error) {
        console.log("Error", error);
    }
}

doOperation();