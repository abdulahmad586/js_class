async function makeTea() {
    await water();
    await Promise.all([
        sugar(),
        lipton(),
        milk(),
    ]);
    console.log(await stir());
    console.log(await done());
}

makeTea();

function water() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(
            () => {
                console.log("Gotten water");
                resolve("Gotten water");
            }, 5000
        )
    });
    return promise;
}
function sugar() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Gotten sugar");
            resolve("Gotten sugar");
        }, 1000)
    });
    return promise;
}
function lipton() {
    const promise = new Promise((resolve, reject) => {
        console.log("Gotten lipton");
        resolve("Gotten lipton");
    });
    return promise;
}
function milk() {
    const promise = new Promise((resolve, reject) => {
        console.log("Gotten milk");
        resolve("Gotten milk");
    });
    return promise;
}

function stir() {
    const promise = new Promise((resolve, reject) => {
        resolve("Stirring");
    });
    return promise;
}

function done() {
    const promise = new Promise((resolve, reject) => {
        resolve("Ready to drink");
    });
    return promise;
}
