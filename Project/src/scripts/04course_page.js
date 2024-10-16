// Lấy dữ liệu từ LocalStorage hoặc khởi tạo mảng rỗng nếu chưa có
let courseInformation = JSON.parse(localStorage.getItem('courseInfo')) || [];

// Tạo bảng từ dữ liệu đã lưu
let tableBody = document.querySelector('#dataTable tbody');

// Hàm để render danh sách khóa học từ localStorage
function renderCourseList() {
    tableBody.innerHTML = ''; // Xóa toàn bộ nội dung cũ trước khi render lại

    courseInformation.forEach((item, index) => {
        let row = document.createElement('tr');

        let sttCell = document.createElement('td');
        sttCell.textContent = index + 1; // STT tự động tăng dựa trên vị trí trong mảng
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
}

// Gọi hàm render khi trang được tải lại
renderCourseList();

// Function thêm mới khóa học
let formAddNew = document.getElementById("form_addNew");
console.log(formAddNew)
let btnAddNew = document.getElementById("row_2_addNew");
let dataTable = document.getElementById("dataTable");
let row2 = document.getElementById("row_2");
let btnCloseForm = document.getElementById("btn_closeform");
let xBtnAddNewForm = document.getElementById("x-btn-addnewform");

// Ẩn hiện form  
btnAddNew.addEventListener('click',function(){
    console.log("có vào đấy");
    dataTable.style.display = "none";
    row2.style.display = "none";
    formAddNew.style.display = "block"; // Form (ẩn)-> hiện ra
});

btnCloseForm.onclick = function(){
    formAddNew.style.display = "none";
    dataTable.style.display = "";
    row2.style.display = "";
}

xBtnAddNewForm.onclick = function(){
    formAddNew.style.display = "none";
    dataTable.style.display = "";
    row2.style.display = "";
}

// Thêm data vào localStorage
let btnAddNewForm = document.getElementById("btn_addnewform");
let courseCode = document.getElementById("ma-khoa-hoc");
let courseName = document.getElementById("ten-khoa-hoc");
let courseTime = document.getElementById("thoi-gian");

btnAddNewForm.addEventListener('click', function() {
    // Kiểm tra nếu các trường dữ liệu đều có giá trị
    if(courseCode.value && courseName.value && courseTime.value) {
        let newCourseInfo = {
            stt: courseInformation.length + 1, // STT tự động tăng
            maKhoaHoc: courseCode.value,
            tenKhoaHoc: courseName.value,
            thoiGian: courseTime.value,
            trangThai: "Hoạt Động",
        };

        // Thêm dữ liệu vào danh sách
        courseInformation.push(newCourseInfo);
        console.log("New course info added: ", newCourseInfo);

        // Lưu toàn bộ mảng vào localStorage
        localStorage.setItem("courseInfo", JSON.stringify(courseInformation));
        console.log("Current courseInformation in localStorage: ", courseInformation);

        // Gọi hàm render để hiển thị lại bảng
        renderCourseList();

        // Reset các giá trị đầu vào sau khi thêm
        courseCode.value = '';
        courseName.value = '';
        courseTime.value = '';
    } else {
        console.log("Please fill in all fields.");
    }
});
