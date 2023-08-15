//INDEXED ARRAY

const usersA = [
    { name: "Ibrahim", password: "bibcode" },
    { name: "Sanusi", password: "sanguy" },
    { name: "Aminu", password: "Amintacce" }
];

//ASSOCIATIVE ARRAY
const users = []

users['ibr'] = { name: "Ibrahim", password: "bibcode" };
users['sns'] = { name: "Sanusi", password: "sanguy" };
users["amn"] = { name: "Aminu", password: "Amintacce" };

//MULTI-DIMENSIONAL ARRAYS

const rubixFace = [
    ["X", "O", "X"],
    ["X", "X", "O"],
    ["X", "O", "O"]
];

for (let i = 0; i < rubixFace.length; i++) {
    const element = rubixFace[i];
    for (let j = 0; j < element.length; j++) {
        const element2 = element[j];
        console.log(element2);
    }
}

