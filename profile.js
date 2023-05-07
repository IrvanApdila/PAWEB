// ambil nilai input dari local storage
const userData = JSON.parse(localStorage.getItem('user'));

// menampilkan data pada halaman
document.getElementById("email").textContent = userData.email;
document.getElementById("password").textContent = userData.password;
document.getElementById("jenisKelamin").textContent = userData.jeniskelamin;
document.getElementById("pekerjaan").textContent = userData.pekerjaan;
document.getElementById("hobi").textContent = userData.hobi;
