function Diem(mark) {
    if (mark >= 85) {
        console.log("A");
    } else if (mark >= 70 && mark < 85) {
        console.log("B");
    } else if (mark >= 40 && mark < 70) {
        console.log("C");
    } else {
        console.log("D");
    }
}

let mark = parseFloat(prompt("Nhập điểm của bạn (từ 0 đến 100): "));
Diem(mark);