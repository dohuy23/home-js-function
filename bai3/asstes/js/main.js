function kiemTraSo(number) {
    if (number > 0) {
        console.log(number + " là số dương");
    } else if (number < 0) {
        console.log(number + " là số âm");
    } else {
        console.log("Số bạn nhập là 0");
    }
}

let soNhap = parseFloat(prompt("Nhập số: "));
kiemTraSo(soNhap);
