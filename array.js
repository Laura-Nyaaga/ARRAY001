//1.Find the last element of the following arrays.arr1 = [3,7,34,90,12]arr2 = [true, "green", "where",12,56]
let arr1 = [3,7,34,90,12];
console.log('last item', arr1[arr1.length - 1]);

let arr2 = [true, "green", "where",12,56];
console.log('last item', arr2[arr2.length - 1]);
//2.Write a JS program that will join the following array elements into a stringmyPets = ["Cow", "Bird", "Snake", "Dog"];
let stringmyPets = ["Cow", "Bird", "Snake", "Dog"];
console.log(stringmyPets.join());
//3.Write a JS script to sort the following array itemsvar arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ]
let arr3 =  [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
console.log(arr3.sort());
//4.Write a program to remove duplicates from the following array.Console the array without duplicates, and console another array that only contains the duplicates
//let arr = ["boy", "man", "girl",            "school", "girl", "woman"]
let arr = ["boy", "man", "girl", "school", "girl", "woman"];
function notDuplicate(arr) {
    return arr.filter((item,
        index) => arr.indexOf(item) === index);
};
let duplicateArray = (Darray) =>{

let duplicates = Darray.filter((item,index) =>Darray.indexOf(item)!=index);
return Array.from(new Set(duplicates));
};
let totalObjects = ["boy", "man", "girl", "school", "girl", "woman"]
console.log(duplicateArray(totalObjects));
//5.Write a JS script to search for the following word in the array."food"If the word is present, return it else return "the search word was not found"let arr5 = ["the", "way", "x", 4]

//6.Write a JS script to sort the following string:let word = "renniw"
let word = "renniw"
let newWord = word.split("").reverse().join("");
console.log(newWord);