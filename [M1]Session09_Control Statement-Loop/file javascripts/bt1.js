let yearOfBirth = prompt("Nhập năm sinh của Bạn: ");
let currentYear = 2024;
if(!isNaN(yearOfBirth) && yearOfBirth.trim() !== ""){
    let age = +(yearOfBirth) - currentYear;
    alert("Bạn" + age + "tuổi");
}
else{
    alert("Năm sinh không hợp lệ");
}