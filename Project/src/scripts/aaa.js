// Lấy dữ liệu từ LocalStorage
let courseInformation = JSON.parse(localStorage.getItem('courseInfo'));

//Tạo bảng từ liệu
let tableBody = document.querySelector('#dataTable tbody');
courseInformation.forEach(item => {
    let row = document.createElement('tr');
    
    //Tạo các ô (td) cho mỗi cột
    let sttCell = document.createElement('td');
    sttCell.textContent = item.stt;
    row.appendChild(sttCell);

    let maKhoaHocCell = document.createElement('td');
    maKhoaHocCell.textContent = item.maKhoaHoc;
    row.appendChild(maKhoaHocCell);

    let tenKhoaHocCell = document.createElement('td');
    tenKhoaHocCell.textContent = item.tenKhoaHoc;
    row.appendChild(tenKhoaHocCell);

    let thoiGianCell = document.createElement('td');
    thoiGianCell.textContent = item.thoiGian;
    row.appendChild(thoiGianCell);

    let trangThaiCell = document.createElement('td');
    trangThaiCell.textContent = item.trangThai;
    row.appendChild(trangThaiCell);

    let suaCell = document.createElement('td');
    suaCell.textContent = 'Sửa';
    row.appendChild(suaCell);

    let xoaCell = document.createElement('td');
    xoaCell.textContent = 'Xóa';
    row.appendChild(xoaCell);
    
    // Thêm hàng vào tbody của bảng
    tableBody.appendChild(row);

});

//Function them moi
let formAddNew = document.getElementById("form_addNew");
let btnAddNew = document.getElementById("row_2_addNew");
let dataTable = document.getElementById("dataTable");
let btnCloseForm = document.getElementById("btn_closeform");

    // Ẩn hiện form  
btnAddNew.onclick = function(){
    dataTable.style.display = "none";
    formAddNew.style.display = "block"; //Form (an)-> hien ra
}

btnCloseForm.onclick = function(){
    formAddNew.style.display = "none";
    dataTable.style.display = "";
}

    // Thêm data vào localStorage

let btnAddNewForm = document.getElementById("btn_addnewform");
let courseCode = document.getElementById("ma-khoa-hoc");
let courseName = document.getElementById("ten-khoa-hoc");
let courseTime = document.getElementById("thoi-gian");
let courseStatus = document.getElementById("hoat-dong");

// function updateSTT() {
//     let rows = document.querySelector("#dataTable tbody tr");
//     rows.forEach((row, index) => {

//     }) 
// }

btnAddNewForm.addEventListener('click', function(){
    //Kiểm tra nếu các trường dữ liệu đều có giá trị
    if(courseCode.value && courseName.value && courseTime.value){
        let newCourseInfo = {
            stt: 11,
            maKhoaHoc: courseCode.value,
            tenKhoaHoc: courseName.value,
            thoiGian: courseTime.value,
            trangThai: "Hoạt Động",
        };
        // Them du lieu vao danh sach
        courseInformation.push(newCourseInfo);
        

        //Luu vao localStorage
        localStorage.setItem("courseInfo", JSON.stringify(courseInformation));
        // localStorage.setItem("courseInfo", JSON.stringify(courseInfo));
        //Goi ham render de cho hien thi len bang

        //Reset cac gia tri dau vao sau khi them 
        courseCode.value = '';
        courseName.value = '';
        courseTime.value = '';
    }
})





