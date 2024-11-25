let array;

array = [1,2,3,4,5,6,7,8,9,10]
let arrayString = ["banana","orange","apple"]
let arrayObject = [1,"baonguyen",true,false]
let arrayAdvance = new Array(4)

console.log("array>>>>",array);

console.log("arrayAdvance>>>",arrayAdvance);


let phanTuvitrithu5 = array[5]
console.log("phanTuvitrithu5",phanTuvitrithu5);

array[5] = 100;
console.log("array>>>>",array);

// Độ dài mãng
console.log("Độ dài Array : ", array.length);  
// length là thuộc tính
// Thêm phần tử vào cuối mãng
array.push(10000)
console.log("array>>>>", array);

for (let i = 0; i < array.length; i++) {
    console.log(`Phần tử tại vị trí ${i} = ${array[i]}`);}

    // Nối chuỗi bằng literal string `(~shift + phím @)

for (let i = 0; i < array.length; i++) {
    if (array[i] % 3 == 0) {
        console.log(`phần tử tại vị trí ${i} = ${array[i]} chia hết cho 3`);
    }
}

for (let value of array ) {
    console.log("value>>>>",value);
}


// Các phương thức của Array 
let length = array.unshift(1,2,3,4); // chèn các phần tử mới vào đầu và trả về độ dài mới của mảng
console.log(array);
console.log(length);
// array.filter(); // sau hàm
// array.findIndex(); // sau hàm
// array.forEach(); // sau hàm
// array.includes(); // kiểm tra phần tử có tồn tại trong mảng hay ko
let checkExist = arrayString.includes("banana");
console.log("Quả chuối có tồn tại trong mảng ArrayString hay ko ? ",checkExist);

array.indexOf(); // lấy ra vị trí theo giá trị , trả về -1 nếu giá trị ko tồn tại
let IndexOfQuaDao = arrayString.indexOf("quả đo"); // vị trí = 2
console.log( "Vị trí quả đào  = ",IndexOfQuaDao);

array.join(); // nối mảng thành chuỗi 
console.log(" nối mảng thành chuỗi cách nhau bởi dấu  '-'  : ", array.join("-"));

// array.map(); // sau ham
array.pop(); // xóa và trả về phần tử cuối cùng của mảng
// array.reduce(); // sau hàm
// array.shift(); // lấy và xóa phần tử đầu của mảng
// array.some(); // sau hàm
// array.sort(); // sau hàm