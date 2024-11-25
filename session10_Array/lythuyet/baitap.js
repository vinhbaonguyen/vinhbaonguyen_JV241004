let array = [];
for (let i = 0; i < 10; i++) {
    let number = +prompt("Nhập vào 1 số nguyên");
    // thêm vào mảng 
    array.push(number);
}
// hiển thị menu cho nhập vào lựa chọn
let choice = 0; // lựa chọn
do {
    choice = +prompt("------------------Menu------------------ \n"
        + "1. HIển thị mảng\n"
        + "2. In ra các số chia hết cho 5\n"
        + "3. In ra các số nguyên tố\n"
        + "4. Tính tổng các phần tử trong mảng\n"
        + "5. Thoát"
        + "\nNhập vào lựa chọn 1->5");
    switch (choice) {
        case 1:
            // in dạng hộp thoại 
            alert("Mảng bạn nhập là: \n" + array.join("; "));
            break;
        case 2:
            let array5 = [];
            // duyet mảng
            for (let number of array) {
                if (number % 5 == 0) {
                    array5.push(number); // nếu chia hết cho 5 thì thêm vào mảng array5
                }
            }
            alert("Các số chia hết cho 5 là : \n" + array5.join(", "))
            break;
        case 3:
            let arrayPrime = [];
            for (const number of array) {
                let flag = true; // true là số nguyên tố
                if (number < 2) {
                    flag = false
                    // ko phải số nguyên tố
                } else {
                    for (let i = 2; i < number; i++) {
                        if (number % i == 0) {
                            // i là 1 ước của số
                            flag = false;
                            break; // dừng vòng lặp nếu 1 ước đã tìm thấy
                        }
                    }
                }
                if (flag) {
                    arrayPrime.push(number)
                }
            }
            // 1 số nguyên tố : số chia hết cho 1 và chính nó 
            // xây dựng thuật toán kiểm tra 1 số có phải nguyên tố hay ko 

            alert("Các số nguyên tố trong mảng là: \n" + arrayPrime.join(", "));
            break;
        case 4:
            let sum = 0; // biến nhớ luuw trữ tổng 
            for (let number of array) {
                sum += number;
            }
            alert("Tổng các phần tử trong mảng là: " + sum);
            break;
        case 5:
            break;
        default:
            alert("Hãy nhập 1 số từ 1 -> 5");

    }
} while (choice != 5);