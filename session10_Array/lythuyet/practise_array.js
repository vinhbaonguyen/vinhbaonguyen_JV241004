let fruits = ["Banana", "Orange", "Apple", "Mango"];

let length = fruits.length
// The length Property
console.log("The length of array fruits : ", length);


// Accessing the First Array Element
let first = fruits[0]

console.log("The first of array element is :", first);

// Accessing the Last Array Element
let lAst = fruits[(fruits.length - 1)]
console.log("The last of array element is :", lAst);

// Looping Array Elements
// For

for (let i = 0; i < fruits.length; i++) {
    console.log(`gía trị thứ ${i} có giá trị là ${fruits[i]} `);
      
    
}

// Adding Array Elements
// Cách 1 method push
fruits.push("Coconut")
console.log("Giá trị sau của Array sau khi thêm Coconut :", fruits);
// Cách 2 index với thuộc tính length

fruits[fruits.length] = "Lemon"
console.log("Giá trị sau của Array sau khi thêm Lemon :", fruits);

