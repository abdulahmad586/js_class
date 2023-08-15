/*
JSON  => JavaScript Object Notation
*/

// const schoolData = {
//     schoolName: "Awesome School",
//     carouselImages: [
//         "image1",
//         "image2",
//         "image3"
//     ],
//     classes: [
//         { className: "Primary 1", section: "Primary Section", teachers: [{ teacherName: "Mr. Obi" }] },
//         { className: "Primary 2", section: "Primary Section", teacher: "Mrs Margaret" },
//         { className: "Nursery", section: "Nursery Section", teacher: "Mrs Ibrahim" },
//     ]
// }

// console.log(schoolData);

// const jsonString = JSON.stringify(schoolData);

// console.log("JSON STRING:", jsonString);

// const convertedObject = JSON.parse(jsonString);
// console.log("CONVERTED JSON:", convertedObject);

const string = `{"error":null,"result":{"news":[],"schoolInfo":{"name":"Awesome School","logo":"https://awesome-school.onrender.com/images/school_logo.png","motto":"Keeping everying awesome for ya kids"},"carouselImages":["https://images.pexels.com/photos/8467296/pexels-photo-8467296.jpeg?cs=srgb&dl=pexels-anastasia-shuraeva-8467296.jpg&fm=jpg","https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940","https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"],"mission":"Our mission is to provide your children with the best morals and to guide them to achieve exemplary performance in academia","vision":"Out vision is Lorem ipsum da few dadsoapdsn grwfenos ewfenwiocnds efiwofnd, scdsocidndoew dewoihcidsfjew ewnfeiwoneiowrewe","contact":{"email":"schooladdress@school.com.ng","phone":"+234(0)70123456789","address":"Edit school address"},"about":{"about":"Lorem ipsum da few dadsoapdsn grwfenos ewfenwiocnds efiwofnd, scdsocidndoew dewoihcidsfjew ewnfeiwoneiowrewe Lorem ipsum da few dadsoapdsn grwfenos ewfenwiocnds efiwofnd, scdsocidndoew dewoihcidsfjew ewnfeiwoneiowrewe","staff":[{"name":"Katerina Ore","position":"Principal","image":"https://images.pexels.com/photos/5905483/pexels-photo-5905483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},{"name":"Katerina Ore","position":"Principal","image":"https://images.pexels.com/photos/5905483/pexels-photo-5905483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},{"name":"Katerina Ore","position":"Principal","image":"https://images.pexels.com/photos/5905483/pexels-photo-5905483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},{"name":"Katerina Ore","position":"Principal","image":"https://images.pexels.com/photos/5905483/pexels-photo-5905483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},{"name":"Katerina Ore","position":"Principal","image":"https://images.pexels.com/photos/5905483/pexels-photo-5905483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},{"name":"Katerina Ore","position":"Principal","image":"https://images.pexels.com/photos/5905483/pexels-photo-5905483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}]}}}`;

const obj = JSON.parse(string);
//OBJECT DECONSTRUCTION
const { carouselImages, mission, vision } = obj.result;

// console.log("Images: ", carouselImages, "Mission:", mission);

//ARRAY DECONSTRUCTION

const [firstImage, secondImage, thirdImage, fourthImage] = carouselImages;

// console.log(firstImage, secondImage, thirdImage, fourthImage)
