function ChanLe(number) {
    if (number % 2 === 0) {
        console.log(number + " là số chẵn");
    } else {
        console.log(number + " là số lẻ");
    }
}
let soNhap = parseInt(prompt("Nhập số: "));
ChanLe(soNhap);
