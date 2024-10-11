logOut = document.getElementById("logOutBtn");
logOut.onclick = function() {
    alert("Rời khỏi trang Quản trị sinh viên");
    delete localStorage.loggedIn;
    window.location.href = "01common interface.html";
    
}