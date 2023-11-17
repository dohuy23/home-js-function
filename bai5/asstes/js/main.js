function chiaHet35(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        console.log(number + " chia hết cho cả 3 và 5");
    } else {
        console.log(number + " không chia hết cho cả 3 và 5");
    }
}

let soNhap = parseInt(prompt("Nhập một: "));
chiaHet35(soNhap);
