const login = (username, password) => {
    if (username != "admin") throw { errCode: 1, message: "kepfo[sejkfepdajfdpsafkopakoprf" };
    if (password != "myPassword") throw { errCode: 2, message: "fewjmaofjdiopsafjdopsafjkpot" };

    return { loggedIn: true, message: "You have been logged in successfully" };
}
 
try {
    console.log("LOGIN RESPONSE:", login("admin", "myPassword"));
} catch (error) {

    switch (error.errCode) {
        case 1:
            console.log("Please enter the correct username");
            break;
        case 2:
            console.log("Please enter the correct password");
            break;
    }

}