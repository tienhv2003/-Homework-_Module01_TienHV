//let n = +(prompt("Mời Bạn đoán số (0 - 100"));
//let result = 50;
//if( n < result){
//    console.log("Too small");
//}
//else if(n > result){
//    console.log("Too big");
//}
//else{
//    console.log("Bingo");
//}
//let i = 0;
//for(i=0 ; i<4 ; i++) {
//    console.log("Hello World");
//}

let n = +prompt("Nhap so n")
let s = 0;
for(let i = 1; i <= n; i++ ){
    s = s + i;
}
console.log("tong s = ", +s)