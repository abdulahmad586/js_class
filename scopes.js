

var result; //global variable

{
    const title = "Abubakar"; //local variable
    const age = 34; //local varible
    result = "NAME: " + title + " AGE:" + age;
    {
        const password = "habu";
        result += " PASSWORD: " + password;
    }

}

console.log(result);