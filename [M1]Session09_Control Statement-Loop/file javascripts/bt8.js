let a = +(prompt("Nhap so duong a: "));
let b = +(prompt("Nhap so duong b: "));
if(a >= b &&  b > 0){
    for(let i = 1; i <= a; i++){
        if(i%b === 0){
            console.log(i);
        }
    }
}
else{
    alert("Nhap so khong hop le");
    location.reload();
}
